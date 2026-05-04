import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import '../../src/css/custom.css';

const cards = [
  { emoji: '🏠', title: 'Карточка продукта', text: 'Описание системы, технический стек, SLA, целевая аудитория.', link: '/docs/intro' },
  { emoji: '📋', title: 'Требования', text: 'Use Cases (UC-01–UC-04), функциональные и нефункциональные требования.', link: '/docs/requirements/use-cases' },
  { emoji: '🗄️', title: 'Архитектура', text: 'ERD, технологии хранения данных, AsyncAPI для RabbitMQ.', link: '/docs/architecture/erd' },
  { emoji: '⚡', title: 'API Reference', text: 'REST API с примерами запросов, кодами ответов и ошибками.', link: '/docs/api/overview' },
  { emoji: '🔗', title: 'Sequence-диаграммы', text: 'Диаграммы: регистрация, AI-генерация, команды в редакторе.', link: '/docs/integrations/sequence-diagrams' },
  { emoji: '🏢', title: 'Платформизация', text: 'B2B-стратегия, ЮKassa, white-label виджет для застройщиков.', link: '/docs/integrations/platformization' },
];

const stack = ['React 18', 'Canvas API', 'REST API', 'OpenAPI 3.0', 'RabbitMQ', 'AsyncAPI 2.6', 'PostgreSQL', 'MongoDB', 'Redis', 'S3 Storage', 'AI-микросервис', 'JWT'];

export default function Home() {
  return (
    <Layout title="Главная" description="Умный планировщик домов и квартир — техническая документация">
      <main>
        <div className="hero-banner">
          <h1 className="hero-title">Smart Home Planner</h1>
          <p className="hero-subtitle">Умный планировщик домов и квартир — техническая документация</p>
          <div className="hero-buttons">
            <Link to="/docs/intro" className="btn-primary">Открыть документацию</Link>
            <Link to="/docs/api/overview" className="btn-secondary">API Reference</Link>
          </div>
        </div>

        <div className="cards-grid">
          {cards.map((c) => (
            <div key={c.title} className="card">
              <div className="card-emoji">{c.emoji}</div>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-text">{c.text}</p>
              <Link to={c.link} className="card-link">Открыть →</Link>
            </div>
          ))}
        </div>

        <div className="stack-section">
          <h2 className="stack-title">Технологический стек</h2>
          <div className="stack-tags">
            {stack.map((t) => <span key={t} className="stack-tag">{t}</span>)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
