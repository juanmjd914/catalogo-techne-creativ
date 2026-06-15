import { useEffect, useRef, useState } from 'react'
import type { Lang } from '../types'

interface AboutSectionProps {
  lang: Lang
}

const copy = {
  es: {
    tag: 'Nuestra historia',
    title: 'Techne Creativ',
    subtitle: 'Hacemos crecer negocios en el mundo digital',
    p1: 'Somos una agencia de marketing digital fundada en Chile con presencia en Venezuela. Nació de la convicción de que cada negocio — sin importar su tamaño — merece una presencia digital profesional, estratégica y atractiva.',
    p2: 'Diseñamos webs, creamos marcas y gestionamos redes sociales con un objetivo claro: que nuestros clientes vendan más, sean más reconocidos y crezcan con confianza.',
    stats: [
      { num: '+30', label: 'Proyectos entregados' },
      { num: '2',   label: 'Países operando' },
      { num: '100%', label: 'Comprometidos' },
      { num: '∞',   label: 'Creatividad' },
    ],
    quote: '"Una marca bien construida no gasta en publicidad — la publicidad trabaja para ella."',
    author: '— Techne Creativ',
    cta: 'Agendar una llamada',
  },
  en: {
    tag: 'Our story',
    title: 'Techne Creativ',
    subtitle: 'We grow businesses in the digital world',
    p1: 'We are a digital marketing agency founded in Chile with presence in Venezuela. Born from the conviction that every business — regardless of size — deserves a professional, strategic and attractive digital presence.',
    p2: 'We design websites, create brands and manage social media with a clear goal: our clients sell more, are better recognized and grow with confidence.',
    stats: [
      { num: '30+',  label: 'Projects delivered' },
      { num: '2',    label: 'Countries operating' },
      { num: '100%', label: 'Committed' },
      { num: '∞',    label: 'Creativity' },
    ],
    quote: '"A well-built brand doesn\'t spend on advertising — advertising works for it."',
    author: '— Techne Creativ',
    cta: 'Book a call',
  },
}

const IMAGES = [
  '/images/tomalis-food.webp',
  '/images/buycell.webp',
  '/images/concesionario-montecarlo.webp',
]

export function AboutSection({ lang }: AboutSectionProps) {
  const t = copy[lang]
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => setImgIdx(i => (i + 1) % IMAGES.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={sectionRef} id="nosotros" style={{
      background: 'var(--tc-white)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(0,247,252,0.04) 0%, transparent 70%)',
      }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        minHeight: 560,
      }} className="about-grid">

        {/* Panel izquierdo — galería rotante */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 420 }}>
          {IMAGES.map((src, i) => (
            <div key={src} style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              transition: 'opacity 1.2s ease',
              opacity: i === imgIdx ? 1 : 0,
            }} />
          ))}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 55%, var(--tc-white) 100%)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.08)' }} />

          {/* Indicadores */}
          <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', gap: 6 }}>
            {IMAGES.map((_, i) => (
              <button key={i} onClick={() => setImgIdx(i)} style={{
                width: i === imgIdx ? 24 : 8, height: 8, borderRadius: 4,
                background: i === imgIdx ? 'var(--tc-cyan-dark)' : 'rgba(255,255,255,0.5)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        </div>

        {/* Panel derecho — contenido */}
        <div style={{
          padding: '72px 60px 72px 48px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(32px)',
          transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--tc-cyan-dark)', marginBottom: 16,
          }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--tc-cyan-dark)', opacity: 0.7 }} />
            {t.tag}
          </span>

          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px,4vw,50px)',
            fontWeight: 800, color: 'var(--tc-text)', lineHeight: 1.1,
            margin: '0 0 8px', letterSpacing: '-0.02em',
          }}>
            {t.title}
          </h2>
          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(14px,1.6vw,18px)',
            color: 'var(--tc-cyan-dark)', fontStyle: 'italic', margin: '0 0 28px',
          }}>
            {t.subtitle}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--tc-border)' }} />
            <span style={{ color: 'var(--tc-cyan-dark)', fontSize: 14, opacity: 0.5 }}>✦</span>
            <div style={{ flex: 1, height: 1, background: 'var(--tc-border)' }} />
          </div>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75,
            color: 'var(--tc-muted)', margin: '0 0 16px', maxWidth: 440,
          }}>
            {t.p1}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75,
            color: 'var(--tc-muted)', margin: '0 0 36px', maxWidth: 440,
          }}>
            {t.p2}
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 36,
          }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s`,
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px,2.5vw,26px)',
                  fontWeight: 800, color: 'var(--tc-cyan-dark)', lineHeight: 1, marginBottom: 6,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
                  color: 'var(--tc-muted)', letterSpacing: '0.04em', lineHeight: 1.3,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Cita */}
          <blockquote style={{
            margin: '0 0 36px', padding: '16px 20px',
            borderLeft: '2px solid var(--tc-cyan-dark)',
            background: 'rgba(0,191,191,0.04)', borderRadius: '0 6px 6px 0',
          }}>
            <p style={{
              fontFamily: 'var(--font-heading)', fontSize: 14, fontStyle: 'italic',
              color: 'var(--tc-text)', opacity: 0.8, margin: '0 0 6px', lineHeight: 1.6,
            }}>
              {t.quote}
            </p>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 11,
              color: 'var(--tc-cyan-dark)', letterSpacing: '0.04em',
            }}>
              {t.author}
            </span>
          </blockquote>

          {/* CTA */}
          <a href="https://wa.me/56965174454" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, width: 'fit-content',
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#fff', background: 'var(--tc-cyan-dark)',
              border: 'none', borderRadius: 6, padding: '13px 28px',
              cursor: 'pointer', textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = '1'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            }}>
            {t.cta}
            <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { min-height: 260px !important; }
          .about-grid > div:last-child { padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  )
}
