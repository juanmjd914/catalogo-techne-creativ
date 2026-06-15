import { useState } from 'react'
import type { PortfolioItem, Lang } from '../types'

const CATEGORY_LABELS: Record<string, { es: string; en: string; color: string }> = {
  web:    { es: 'Web & E-commerce', en: 'Web & E-commerce', color: '#0094FD' },
  gastro: { es: 'Gastronomía',       en: 'Gastronomy',        color: '#FF006B' },
  salud:  { es: 'Salud & Belleza',   en: 'Health & Beauty',   color: '#00BFBF' },
  menu:   { es: 'Menú Digital',      en: 'Digital Menu',      color: '#FFAA00' },
  otros:  { es: 'Otros negocios',    en: 'Other businesses',  color: '#6B7280' },
}

interface PortfolioCardProps {
  item: PortfolioItem
  lang: Lang
}

export function PortfolioCard({ item, lang }: PortfolioCardProps) {
  const [hov, setHov] = useState(false)
  const cat = CATEGORY_LABELS[item.category]
  const hasUrl = item.url !== null

  const handleClick = () => {
    if (hasUrl) window.open(item.url!, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={handleClick}
      style={{
        background: 'var(--tc-white)',
        border: `1px solid ${hov && hasUrl ? 'rgba(0,148,253,0.35)' : 'var(--tc-border)'}`,
        borderRadius: 12, overflow: 'hidden',
        transform: hov && hasUrl ? 'translateY(-5px)' : 'none',
        boxShadow: hov && hasUrl
          ? '0 16px 50px rgba(0,148,253,0.15)'
          : '0 2px 10px rgba(0,0,0,0.06)',
        transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        cursor: hasUrl ? 'pointer' : 'default',
      }}>

      {/* Imagen */}
      <div style={{ overflow: 'hidden', flexShrink: 0, position: 'relative', borderRadius: '11px 11px 0 0' }}>
        <img src={item.image} alt={item.name}
          style={{
            width: '100%', height: 'auto', display: 'block',
            transform: hov && hasUrl ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform .42s ease',
          }} />

        {/* Overlay hover con enlace */}
        {hasUrl && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(0,148,253,0.82), rgba(0,191,191,0.82))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 8,
            opacity: hov ? 1 : 0, transition: 'opacity .28s ease',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
              color: '#fff', letterSpacing: '.05em',
            }}>
              {lang === 'es' ? 'Ver sitio en vivo' : 'View live site'}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{
          display: 'inline-block', width: 'fit-content',
          background: `${cat.color}14`,
          border: `1px solid ${cat.color}30`,
          borderRadius: 999, padding: '3px 10px',
          fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600,
          color: cat.color, letterSpacing: '.08em', textTransform: 'uppercase',
        }}>
          {lang === 'es' ? cat.es : cat.en}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 700,
          color: hov && hasUrl ? 'var(--tc-blue)' : 'var(--tc-text)',
          transition: 'color .2s', lineHeight: 1.3,
        }}>
          {item.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.55,
          color: 'var(--tc-muted)', flex: 1,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {item.description}
        </p>

        {item.price && (
          <span style={{
            display: 'inline-block', width: 'fit-content', marginTop: 4,
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
            color: 'var(--tc-blue)', letterSpacing: '.02em',
          }}>
            {item.price}
          </span>
        )}
      </div>
    </article>
  )
}
