---
id: sequence-diagrams
title: Sequence-диаграммы
sidebar_label: Sequence-диаграммы
---

# Sequence-диаграммы

## SD-01: Регистрация пользователя (UC-01)

```plantuml
@startuml
actor Пользователь as User
participant "Фронтенд" as FE
participant "Backend API" as BE
participant "Email/SMS Service" as SMS
database "PostgreSQL" as DB

User -> FE: Нажимает «Зарегистрироваться»
FE -> User: Форма ввода email/телефона

User -> FE: Вводит email или телефон
FE -> BE: POST /auth/send-otp
BE -> SMS: Отправить OTP-код
SMS --> User: OTP-код на email/телефон

User -> FE: Вводит OTP-код
FE -> BE: POST /auth/verify-otp
BE --> FE: OTP подтверждён

User -> FE: Вводит и повторяет пароль
FE -> BE: POST /auth/register
BE -> DB: INSERT INTO user (...)
DB --> BE: OK
BE --> FE: JWT-токен + user data
FE --> User: Редирект на главный экран

@enduml
```

---

## SD-02: Создание проекта через AI (UC-04, Асинхронная генерация)

```plantuml
@startuml
actor Пользователь as User
participant "Фронтенд" as FE
participant "Backend API" as BE
participant "RabbitMQ" as MQ
participant "AI-микросервис" as AI
database "PostgreSQL" as DB

User -> FE: Вводит промпт «Дом 5 на 8 метров»
FE -> BE: POST /api/v1/projects/generate\n{commandText: "Дом 5 на 8 метров"}

BE -> DB: INSERT ai_task (status=PENDING)
BE -> MQ: Publish → ai.layout.tasks\n{taskId, projectId, prompt, actionType}
BE --> FE: 201 Created {taskId}
FE --> User: Уведомление «Генерируем план...»

note over AI: Асинхронная обработка
MQ -> AI: Consume task
AI -> AI: Генерация планировки (AI-модель)
AI -> DB: UPDATE project\n(canvas_json = результат)
AI -> MQ: Acknowledgment (задача выполнена)
AI -> BE: Webhook → статус задачи = COMPLETED

BE --> FE: WebSocket / Polling → статус COMPLETED
FE --> User: Редирект в редактор /editor/{projectId}
@enduml
```

---

## SD-03: Отправка AI-команды в редакторе (UC-04, Синхронный путь)

:::note Шаблон
Этот раздел требует доработки. Описать поток для синхронных команд редактирования через чат AI-помощника.
:::

```plantuml
@startuml
actor Пользователь as User
participant "Редактор (Фронтенд)" as FE
participant "Backend API" as BE
participant "AI-сервис" as AI

User -> FE: Вводит команду «Расширь кухню на 2 метра»
FE -> BE: POST /api/v1/projects/{projectId}/ai-commands\n{commandText: "..."}

note over BE,AI: Обработка команды
BE -> AI: Интерпретация команды
AI --> BE: Изменения планировки
BE --> FE: 200 OK {updatedProject}
FE -> FE: Перерисовка холста
FE --> User: «Изменения применены»
@enduml
```

:::info
Для отображения PlantUML-диаграмм необходим плагин [docusaurus-plugin-plantuml](https://github.com/akebifiky/remark-simple-plantuml).
:::
