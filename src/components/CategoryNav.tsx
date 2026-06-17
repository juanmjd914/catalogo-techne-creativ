import { useEffect, useRef } from 'react'
import type { PortfolioCategory, Lang } from '../types'

interface CategoryNavProps {
  activeId: PortfolioCategory
  lang: Lang
  onSelect: (id: PortfolioCategory) => void
}

const CATEGORIES: { id: PortfolioCategory; es: string; en: string }[] = [
  { id: 'all',               es: 'Todos',              en: 'All' },
  { id: 'landing-basica',    es: 'Landing Básica',     en: 'Basic Landing' },
  { id: 'landing-premium',   es: 'Landing Premium',    en: 'Premium Landing' },
  { id: 'corporativo',       es: 'Corporativo',        en: 'Corporate' },
  { id: 'menu-basico',       es: 'Menú Básico',        en: 'Basic Menu' },
  { id: 'menu-premium',      es: 'Menú Premium',       en: 'Premium Menu' },
  { id: 'citas',             es: 'Citas Online',       en: 'Booking' },
  { id: 'ecommerce-basico',  es: 'E-comm Básico',      en: 'Basic E-comm' },
  { id: 'ecommerce-completo',es: 'E-comm Completo',    en: 'Full E-comm' },
]

export function CategoryNav({ activeId, lang, onSelect }: CategoryNavProps) {
  const railRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const btn = rail.querySelector<HTMLButtonElement>('[data-active="true"]')
    if (!btn) return
    const target = btn.offsetLeft - (rail.clientWidth - btn.offsetWidth) / 2
    rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
  }, [activeId])

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--tc-border)',
      boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
    }}>
      <div ref={railRef} className="tc-no-scroll tc-nav-rail"
        style={{
          display: 'flex', overflowX: 'auto', gap: 0,
          padding: '0 20px', maxWidth: 1280, margin: '0 auto',
          justifyContent: 'center',
        }}>
        <style>{`
          @media (max-width: 768px) {
            .tc-nav-rail { justify-content: flex-start !important; }
          }
        `}</style>
        {CATEGORIES.map(cat => {
          const on = cat.id === activeId
          return (
            <button key={cat.id} data-active={on ? 'true' : 'false'}
              onClick={() => onSelect(cat.id)}
              style={{
                padding: '15px 16px', border: 'none', background: 'none',
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: on ? 600 : 400,
                color: on ? 'var(--tc-cyan-dark)' : 'var(--tc-muted)',
                borderBottom: on ? '2px solid var(--tc-cyan-dark)' : '2px solid transparent',
                transition: 'color .2s, border-color .2s', marginBottom: -1,
                letterSpacing: '.01em',
              }}>
              {lang === 'es' ? cat.es : cat.en}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
