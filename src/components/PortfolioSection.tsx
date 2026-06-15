import type { PortfolioCategory, Lang } from '../types'
import { portfolio } from '../data/portfolio'
import { PortfolioCard } from './PortfolioCard'

interface PortfolioSectionProps {
  lang: Lang
  activeId: PortfolioCategory
}

export function PortfolioSection({ lang, activeId }: PortfolioSectionProps) {
  const filtered = activeId === 'all'
    ? portfolio
    : portfolio.filter(p => p.category === activeId)

  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 28px 80px' }}>
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 3, height: 26, background: 'var(--tc-cyan-dark)', borderRadius: 2, flexShrink: 0 }} />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 'clamp(20px,3vw,30px)', color: 'var(--tc-text)',
        }}>
          {lang === 'es' ? 'Nuestros Trabajos' : 'Our Work'}
        </h2>
        <div style={{ flex: 1, height: 1, background: 'var(--tc-border)' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--tc-muted)', letterSpacing: '.05em' }}>
          {filtered.length} {lang === 'es' ? 'proyectos' : 'projects'}
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 20,
        animation: 'tcFadeIn .35s ease both',
      }}>
        {filtered.map(item => (
          <PortfolioCard key={item.id} item={item} lang={lang} />
        ))}
      </div>
    </section>
  )
}
