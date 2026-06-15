import { useEffect, useRef, useState } from 'react'
import type { Lang } from '../types'
import { services } from '../data/services'

interface ServicesSectionProps {
  lang: Lang
}

const copy = {
  es: {
    eyebrow: 'Lo que hacemos',
    statement: ['Soluciones digitales', 'que hacen crecer tu negocio.'],
    sub: 'Cada servicio está diseñado para que tu marca sea más visible, más profesional y más rentable.',
    pillars: [
      { num: '01', title: 'Web',      desc: 'Sitios rápidos, modernos y optimizados que convierten visitas en clientes.' },
      { num: '02', title: 'Branding', desc: 'Identidad visual que genera confianza y te diferencia de la competencia.' },
      { num: '03', title: 'Redes',    desc: 'Contenido constante y estratégico que construye comunidad y ventas.' },
      { num: '04', title: 'Catálogos', desc: 'Presentación profesional de productos para WhatsApp y redes.' },
    ],
    cta: 'Agendar una llamada gratuita',
  },
  en: {
    eyebrow: 'What we do',
    statement: ['Digital solutions', 'that grow your business.'],
    sub: 'Each service is designed to make your brand more visible, more professional and more profitable.',
    pillars: [
      { num: '01', title: 'Web',      desc: 'Fast, modern and optimized websites that convert visitors into clients.' },
      { num: '02', title: 'Branding', desc: 'Visual identity that builds trust and sets you apart from competitors.' },
      { num: '03', title: 'Social',   desc: 'Consistent, strategic content that builds community and drives sales.' },
      { num: '04', title: 'Catalogs', desc: 'Professional product presentation for WhatsApp and social media.' },
    ],
    cta: 'Book a free call',
  },
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const t = copy[lang]
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="servicios" style={{ background: 'var(--tc-bg)', position: 'relative', overflow: 'hidden' }}>

      {/* Línea separadora top */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--tc-cyan-dark), transparent)' }} />

      {/* Fondo decorativo */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(0,148,253,0.05) 0%, transparent 65%)',
      }} />

      {/* Statement central */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '80px 48px 64px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        position: 'relative',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tc-cyan-dark)',
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32,
          opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease',
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--tc-cyan-dark)', opacity: 0.5 }} />
          {t.eyebrow}
          <span style={{ width: 32, height: 1, background: 'var(--tc-cyan-dark)', opacity: 0.5 }} />
        </span>

        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 800,
          fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1.05, letterSpacing: '-0.02em',
          margin: '0 0 20px', color: 'var(--tc-text)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}>
          {t.statement.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i === 1
                ? <em style={{ fontStyle: 'italic', color: 'var(--tc-cyan-dark)' }}>{line}</em>
                : line}
            </span>
          ))}
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.5vw,17px)',
          color: 'var(--tc-muted)', maxWidth: 480, lineHeight: 1.7, margin: 0,
          opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.25s',
        }}>
          {t.sub}
        </p>
      </div>

      {/* Separador ornamental */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ flex: 1, height: 1, background: 'var(--tc-border)' }} />
        <span style={{ color: 'var(--tc-cyan-dark)', fontSize: 14, opacity: 0.4, letterSpacing: 6 }}>✦ ✦ ✦</span>
        <div style={{ flex: 1, height: 1, background: 'var(--tc-border)' }} />
      </div>

      {/* Grid de 4 servicios */}
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '56px 48px 80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        background: 'var(--tc-border)',
      }}
        className="srv-grid"
      >
        {t.pillars.map((p, i) => {
          const svc = services[i]
          return (
            <div key={i} style={{
              background: 'var(--tc-white)',
              padding: '36px 32px',
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
            }}>
              {/* Número decorativo de fondo */}
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 800, lineHeight: 1,
                color: 'var(--tc-cyan)', opacity: 0.1,
                position: 'absolute', top: 20, right: 24, letterSpacing: '-0.04em',
                userSelect: 'none',
              }}>
                {p.num}
              </div>

              {/* Número activo */}
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.12em', color: 'var(--tc-cyan-dark)',
                display: 'block', marginBottom: 16,
              }}>
                {p.num}
              </span>

              {/* Línea de acento */}
              <div style={{ width: 28, height: 2, background: 'var(--tc-cyan-dark)', marginBottom: 16, opacity: 0.7, borderRadius: 1 }} />

              {/* Ícono */}
              <span style={{ fontSize: 28, display: 'block', marginBottom: 14 }}>{svc.icon}</span>

              {/* Título */}
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700,
                color: 'var(--tc-text)', margin: '0 0 10px', letterSpacing: '-0.01em',
              }}>
                {p.title}
              </h3>

              {/* Descripción */}
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.7,
                color: 'var(--tc-muted)', margin: '0 0 18px',
              }}>
                {p.desc}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 22 }}>
                {svc.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 7,
                    fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--tc-text)' }}>
                    <span style={{ color: 'var(--tc-cyan-dark)', fontWeight: 700, fontSize: 14 }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <a href={`https://wa.me/56965174454?text=${encodeURIComponent(svc.waMessage)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '10px 16px', borderRadius: 6,
                  border: '1.5px solid var(--tc-cyan-dark)',
                  color: 'var(--tc-cyan-dark)',
                  fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '.04em',
                  transition: 'background .2s, color .2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--tc-cyan-dark)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--tc-cyan-dark)'
                }}>
                {lang === 'es' ? 'Más información' : 'More info'}
              </a>
            </div>
          )
        })}
      </div>

      {/* Línea separadora bottom */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--tc-cyan-dark), transparent)' }} />

      <style>{`
        @media (max-width: 900px) { .srv-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .srv-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
