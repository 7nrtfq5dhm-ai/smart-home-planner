import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Главная" description="Умный планировщик домов и квартир">
      <main>
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)',
          color: 'white',
          padding: '80px 40px',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: 800 }}>
            Smart Home Planner
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px' }}>
            Умный планировщик домов и квартир — техническая документация
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/docs/intro"
              style={{
                background: 'white',
                color: '#2563EB',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}>
              Открыть документацию
            </Link>
            <Link
              to="/api-reference"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}>
              API Reference
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '60px auto',
          padding: '0 40px',
        }}>
          <Card
            emoji="🏠"
            title="Карточка продукта"
            text="Описание системы, технический стек, SLA, целевая аудитория и основные функции."
            link="/docs/intro"
            linkText="Открыть →"
          />
          <Card
            emoji="📋"
            title="Требования"
            text="Use Cases (UC-01–UC-04), функциональные и нефункциональные требования."
            link="/docs/requirements/use-cases"
            linkText="Открыть →"
          />
          <Card
            emoji="🗄️"
            title="Архитектура"
            text="ERD с обоснованиями, технологии хранения, AsyncAPI для RabbitMQ."
            link="/docs/architecture/erd"
            linkText="Открыть →"
          />
          <Card
            emoji="⚡"
            title="API Reference"
            text="Интерактивная документация REST API с примерами запросов и кликабельными кодами ответов."
            link="/api-reference"
            linkText="Открыть →"
          />
          <Card
            emoji="🔗"
            title="Sequence-диаграммы"
            text="Диаграммы последовательностей: регистрация, AI-генерация, команды в редакторе."
            link="/docs/integrations/sequence-diagrams"
            linkText="Открыть →"
          />
          <Card
            emoji="🏢"
            title="Платформизация"
            text="B2B-стратегия, интеграция с ЮKassa, white-label виджет для застройщиков."
            link="/docs/integrations/platformization"
            linkText="Открыть →"
          />
        </div>

        {/* Stack */}
        <div style={{
          background: '#f8fafc',
          padding: '50px 40px',
          textAlign: 'center',
          borderTop: '1px solid #e2e8f0',
        }}>
          <h2 style={{ marginBottom: '32px', color: '#1e293b' }}>Технологический стек</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {['React 18', 'Canvas API', 'REST API', 'OpenAPI 3.0', 'RabbitMQ', 'AsyncAPI 2.6', 'PostgreSQL', 'MongoDB', 'Redis', 'S3 Storage', 'AI-микросервис', 'JWT'].map(tech => (
              <span key={tech} style={{
                background: '#dbeafe',
                color: '#1d4ed8',
                padding: '8px 18px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

function Card({ emoji, title, text, link, linkText }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '28px',
      background: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{emoji}</div>
      <h3 style={{ margin: '0 0 10px', color: '#1e293b', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ color: '#64748b', flex: 1, margin: '0 0 20px', lineHeight: 1.6 }}>{text}</p>
      <Link to={link} style={{
        color: '#2563EB',
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: '0.95rem',
      }}>
        {linkText}
      </Link>
    </div>
  );
}
