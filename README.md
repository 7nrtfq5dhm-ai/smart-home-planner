# Smart Home Planner — Документация

Техническая документация проекта «Умный планировщик домов и квартир», развёрнутая на Docusaurus с подходом **Docs as Code**.

## Живая документация

🌐 **GitHub Pages:** `https://7nrtfq5dhm-ai.github.io/smart-home-planner/`

## Быстрый старт

### 1. Требования

- Node.js >= 18
- npm >= 9
- Git

### 2. Установка зависимостей

```bash
npm install
```

### 3. Локальный запуск

```bash
npm start
```

Сайт откроется на `http://localhost:3000`.

### 4. Сборка для продакшена

```bash
npm run build
```

---

## Деплой на GitHub Pages

### Вариант A: Через GitHub Actions (рекомендуется)

1. Создай публичный репозиторий на GitHub с именем `smart-home-planner`
2. Склонируй его: `git clone https://github.com/<USERNAME>/smart-home-planner`
3. Скопируй все файлы этого проекта в папку репозитория
4. В `docusaurus.config.js` замени `7nrtfq5dhm-ai` на свой ник
5. Сделай push в ветку `main`
6. GitHub Actions автоматически задеплоит сайт на `gh-pages`
7. Включи GitHub Pages в настройках репозитория → Source: **gh-pages branch**

### Вариант B: Ручной деплой

```bash
GIT_USER=<USERNAME> npm run deploy
```

---

## Структура документации

```
docs/
├── index.md                    # Главная страница
├── 01-overview/
│   ├── product-description.md  # Описание продукта и проблема
│   ├── stakeholders.md         # Стейкхолдеры
│   └── business-goals.md       # Бизнес-цели и KPI
├── 02-requirements/
│   ├── use-cases.md            # Use Cases (UC-01 — UC-06)
│   └── nfr-fr.md               # FR и NFR
├── 03-architecture/
│   ├── erd.md                  # ERD и обоснование решений
│   ├── storage.md              # Технологии хранения
│   ├── api-spec.md             # REST API (OpenAPI 3.0)
│   └── async-api.md            # AsyncAPI (RabbitMQ)
└── 04-integrations/
    ├── sequence-diagrams.md    # Sequence-диаграммы
    └── platformization.md      # Платформизация (B2B)
```

## Используемые плагины

| Плагин | Назначение |
|--------|-----------|
| `redocusaurus` | Интерактивная документация REST API из OpenAPI YAML |
| `docusaurus-plugin-plantuml` | Рендеринг PlantUML-диаграмм (sequence, ERD) |

## Docs as Code

Этот проект использует подход **Docs as Code**:
- Документация хранится в Git как Markdown-файлы
- Изменения проходят через Pull Request
- CI/CD автоматически деплоит обновления на GitHub Pages
- Документация версионируется вместе с кодом
