---
id: async-api
title: Асинхронный API (AsyncAPI)
sidebar_label: AsyncAPI (RabbitMQ)
---

# Асинхронное взаимодействие — AsyncAPI

## Зачем асинхронность?

Пользователь пишет промпт («Сгенерируй дом 5 на 8 метров»). Если главный бэкенд будет **синхронно ждать** ответа от тяжёлой нейросети, запрос «отвалится» по таймауту — AI генерирует план от нескольких секунд до минуты.

**Решение:**
1. Главный бэкенд **мгновенно отвечает** фронтенду `201 Created`
2. Саму тяжёлую задачу **асинхронно отправляет** в AI-микросервис через брокер сообщений

## Выбор технологии — RabbitMQ

| Критерий | Обоснование |
|---------|-------------|
| **Гарантия доставки** | Если AI-сервис упадёт во время генерации, RabbitMQ не получит Acknowledgment и вернёт задачу в очередь. Проект пользователя не потеряется |
| **Маршрутизация** | Можно делить задачи по типу: «Создание с нуля» → мощные серверы; «Мелкие правки» → быстрые серверы |

## Паттерн взаимодействия

```
Фронтенд → [POST /projects/generate] → Главный бэкенд
                                              │
                                     Publisher (издатель)
                                              │
                                        RabbitMQ
                                         Очередь ai.layout.tasks
                                              │
                                     Consumer (потребитель)
                                              │
                                        AI-микросервис
                                              │
                                      Сохраняет результат в БД
```

## AsyncAPI-спецификация

```yaml
asyncapi: 2.6.0

info:
  title: Smart Home Planner - AI Async Tasks API
  version: 1.0.0
  description: Асинхронный контракт между Главным Бэкендом и AI-воркером
               для генерации планировок квартир

servers:
  rabbitmq-prod:
    url: amqp://rabbitmq.smartplanner.com:5672
    protocol: amqp
    description: Брокер сообщений RabbitMQ

channels:
  ai.layout.tasks:
    description: Очередь задач на генерацию или модификацию планов нейросетью
    publish:
      summary: Отправка задачи от Главного Бэкенда
      operationId: publishAiTask
      message:
        $ref: '#/components/messages/AiTaskMessage'

components:
  messages:
    AiTaskMessage:
      name: AiTaskMessage
      title: Сообщение с задачей для ИИ
      summary: Передаёт вводные данные (промпт) от пользователя к нейросети
      payload:
        $ref: '#/components/schemas/AiTaskPayload'

  schemas:
    AiTaskPayload:
      type: object
      required:
        - taskId
        - projectId
        - actionType
        - prompt
      properties:
        taskId:
          type: string
          format: uuid
          description: >
            Уникальный ID задачи. Нужен для идемпотентности —
            чтобы ИИ не сгенерировал одно и то же дважды при сетевом сбое.
          example: "123e4567-e89b-12d3-a456-426614174000"
        projectId:
          type: string
          format: uuid
          description: >
            ID проекта, в который AI-сервис должен сохранить результат.
          example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
        actionType:
          type: string
          enum:
            - CREATE_NEW_LAYOUT
            - MODIFY_EXISTING_LAYOUT
          description: Тип задачи — создание нового плана или модификация текущего
        prompt:
          type: string
          description: Текстовый запрос пользователя
          example: "Сгенерируй дом 5 на 8 метров"
```
