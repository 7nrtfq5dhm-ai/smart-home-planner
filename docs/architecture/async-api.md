---
id: async-api
title: AsyncAPI — RabbitMQ
sidebar_label: AsyncAPI (RabbitMQ)
---

# Асинхронное взаимодействие

## Проблема и решение

Пользователь пишет промпт («Сгенерируй дом 5 на 8 метров»). AI генерирует план от нескольких секунд до минуты. Если главный бэкенд будет синхронно ждать — HTTP-запрос «отвалится» по таймауту.

**Решение:** бэкенд мгновенно отвечает `201 Created` и отправляет задачу в очередь **RabbitMQ**. AI-микросервис (Consumer) забирает задачу, обрабатывает и сохраняет результат в БД.

## Обоснование выбора RabbitMQ

**1. Гарантия доставки.** Если AI-сервис упадёт во время генерации, RabbitMQ не получит подтверждение (Acknowledgment) и вернёт задачу в очередь. Проект пользователя не потеряется.

**2. Маршрутизация.** Можно делить задачи: «Создание с нуля» → мощные серверы; «Мелкие правки» → быстрые серверы.

## Схема взаимодействия

```
Пользователь
    │
    ▼
POST /api/v1/projects/generate {commandText}
    │
    ▼
Backend API (Publisher)
    │
    ├─── 201 Created {taskId} ──► Фронтенд ──► «Генерируем план...»
    │
    └─── publish ──► RabbitMQ
                     Очередь: ai.layout.tasks
                         │
                         ▼
                    AI-микросервис (Consumer)
                         │
                    Генерирует план
                         │
                    UPDATE project в PostgreSQL
                         │
                    Webhook → статус COMPLETED
                         │
                         ▼
                    Frontend ──► редактор открывается
```

## AsyncAPI-спецификация

```yaml
asyncapi: 2.6.0

info:
  title: Smart Home Planner — AI Async Tasks API
  version: 1.0.0
  description: Асинхронный контракт между Backend и AI-воркером

servers:
  rabbitmq-prod:
    url: amqp://rabbitmq.smartplanner.com:5672
    protocol: amqp
    description: Брокер сообщений RabbitMQ

channels:
  ai.layout.tasks:
    description: Очередь задач на генерацию планировок
    publish:
      summary: Отправка задачи от Backend
      operationId: publishAiTask
      message:
        payload:
          type: object
          required: [taskId, projectId, actionType, prompt]
          properties:
            taskId:
              type: string
              format: uuid
              description: ID задачи (для идемпотентности — защита от дублирования)
              example: "123e4567-e89b-12d3-a456-426614174000"
            projectId:
              type: string
              format: uuid
              description: ID проекта для сохранения результата
              example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
            actionType:
              type: string
              enum:
                - CREATE_NEW_LAYOUT
                - MODIFY_EXISTING_LAYOUT
              description: Тип задачи — создание нового или модификация текущего
            prompt:
              type: string
              description: Текстовый запрос пользователя
              example: "Сгенерируй дом 5 на 8 метров"
```
