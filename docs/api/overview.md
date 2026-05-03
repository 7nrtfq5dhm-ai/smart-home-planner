---
id: overview
title: API Reference
sidebar_label: API Reference
---

# API Reference

Интерактивная документация REST API доступна на отдельной странице.

import Link from '@docusaurus/Link';

<div style={{marginBottom: '2rem'}}>
  <Link
    className="button button--primary button--lg"
    to="/api-reference">
    Открыть интерактивный API Reference →
  </Link>
</div>

## Обзор эндпоинтов

**Base URL:** `https://api.smartplanner.com/v1`

| Метод | Endpoint | Описание |
|-------|---------|---------|
| `GET` | `/projects` | Список проектов пользователя |
| `POST` | `/projects` | Создать проект вручную |
| `POST` | `/projects/generate` | Создать проект через AI |
| `GET` | `/projects/{projectId}` | Загрузить данные проекта |
| `PUT` | `/projects/{projectId}` | Сохранить проект |
| `POST` | `/projects/{projectId}/ai-commands` | Отправить AI-команду |
| `GET` | `/projects/{projectId}/layers` | Получить инженерный слой |

## Аутентификация

Все запросы требуют JWT-токен в заголовке:

```
Authorization: Bearer <token>
```

Токен выдаётся при авторизации через `POST /auth/login`.
