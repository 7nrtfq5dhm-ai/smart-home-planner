---
id: api-spec
title: Спецификация REST API
sidebar_label: REST API (OpenAPI)
---

# Спецификация REST API

## Описание

REST API для Smart Home Planner соответствует стандарту **OpenAPI 3.0.3**. Интерактивная документация доступна на странице [API Reference](/api-reference).

**Base URL:** `https://api.smartplanner.com/v1`

## Эндпоинты

### Проекты

| Метод | Path | Описание |
|-------|------|---------|
| `GET` | `/projects` | Список проектов пользователя (с фильтром по `status`) |
| `POST` | `/projects` | Создание нового проекта вручную |
| `GET` | `/projects/{projectId}` | Загрузка конкретного проекта (холст) |
| `PUT` | `/projects/{projectId}` | Сохранение изменений проекта |
| `POST` | `/projects/generate` | Создание проекта через AI-промпт |
| `POST` | `/projects/{projectId}/ai-commands` | Текстовая команда AI в редакторе |
| `GET` | `/projects/{projectId}/layers` | Инженерный слой (`?type=ELECTRICITY`) |

### Параметры

- **Path-параметр:** `{projectId}` — UUID проекта, передаётся в URL
- **Query-параметр:** `?status=DRAFT|IN_PROGRESS|COMPLETED` — фильтрация списка
- **Query-параметр:** `?type=ELECTRICITY|WATER|SEWAGE` — тип инженерного слоя

## OpenAPI-спецификация (YAML)

```yaml
openapi: 3.0.3
info:
  title: Smart Home Planner API
  version: 1.0.0
  description: Спецификация API для Умного планировщика квартир

servers:
  - url: https://api.smartplanner.com/v1

paths:
  /projects:
    get:
      summary: Получить список проектов
      parameters:
        - name: status
          in: query
          required: false
          schema:
            $ref: '#/components/schemas/ProjectStatusEnum'
      responses:
        '200':
          description: Список загружен
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Project'

  /projects/generate:
    post:
      summary: Создать проект через AI
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AICommand'
      responses:
        '201':
          description: План сгенерирован
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Project'

  /projects/{projectId}:
    get:
      summary: Загрузить план помещения
      parameters:
        - name: projectId
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Данные проекта
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Project'
    put:
      summary: Сохранить проект
      parameters:
        - name: projectId
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Project'
      responses:
        '200':
          description: Успешно сохранено

  /projects/{projectId}/ai-commands:
    post:
      summary: Отправить команду AI-помощнику
      parameters:
        - name: projectId
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AICommand'
      responses:
        '200':
          description: AI обновил план
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Project'

components:
  schemas:
    ProjectStatusEnum:
      type: string
      enum:
        - DRAFT
        - IN_PROGRESS
        - COMPLETED

    Project:
      type: object
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          example: "Новая квартира"
        status:
          $ref: '#/components/schemas/ProjectStatusEnum'
        dimensions:
          type: object
          properties:
            width:
              type: number
              example: 10
            length:
              type: number
              example: 8
        createdAt:
          type: string
          format: date-time

    AICommand:
      type: object
      required:
        - commandText
      properties:
        commandText:
          type: string
          example: "Сделай кухню больше"
```

:::tip Интерактивная документация
После деплоя полная интерактивная документация API доступна через плагин **redocusaurus** по адресу `/api-reference`.
:::
