---
id: async-api
title: AsyncAPI — RabbitMQ
sidebar_label: AsyncAPI (RabbitMQ)
---

# Асинхронное взаимодействие — AsyncAPI

## Зачем нужна асинхронность

Когда пользователь пишет промпт («Сгенерируй дом 10 на 8 метров»), AI-модель обрабатывает запрос от нескольких секунд до минуты. Если главный бэкенд будет синхронно ждать ответа, HTTP-соединение «отвалится» по таймауту.

**Решение:** бэкенд мгновенно отвечает `201 Created` и отправляет задачу в очередь RabbitMQ. AI-микросервис забирает задачу, обрабатывает её и сохраняет результат в базу.

## Схема взаимодействия

```
Пользователь
    │
    ▼
POST /api/v1/projects/generate
    │
    ▼
Backend API ──publish──► RabbitMQ
    │                    Очередь: ai.layout.tasks
    │                         │
    ▼                         ▼
201 Created {taskId}    AI-микросервис
                             │
                       Генерирует план
                             │
                       Сохраняет в БД
                             │
                       Webhook → статус COMPLETED
                             │
                             ▼
                    Frontend перенаправляет
                    пользователя в редактор
```

## Почему RabbitMQ, а не HTTP

| Критерий | RabbitMQ | Прямой HTTP |
|---------|---------|------------|
| Таймаут | Нет | Есть (30–60 сек) |
| Гарантия доставки | Да (Acknowledgment) | Нет |
| Масштабирование | Добавить Consumer | Сложнее |
| Падение AI-сервиса | Задача вернётся в очередь | Задача потеряется |

## AsyncAPI-спецификация

```yaml
asyncapi: 2.6.0
info:
  title: Smart Home Planner — AI Tasks
  version: 1.0.0

servers:
  rabbitmq-prod:
    url: amqp://rabbitmq.smartplanner.com:5672
    protocol: amqp

channels:
  ai.layout.tasks:
    description: Очередь задач на генерацию планировок
    publish:
      operationId: publishAiTask
      message:
        payload:
          type: object
          required: [taskId, projectId, actionType, prompt]
          properties:
            taskId:
              type: string
              format: uuid
              description: ID задачи (для идемпотентности)
            projectId:
              type: string
              format: uuid
            actionType:
              type: string
              enum:
                - CREATE_NEW_LAYOUT
                - MODIFY_EXISTING_LAYOUT
            prompt:
              type: string
              example: "Сгенерируй дом 10 на 8 метров"
```
