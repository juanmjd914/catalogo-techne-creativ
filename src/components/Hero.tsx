import type { Lang } from '../types'

interface HeroProps {
  lang: Lang
  onToggleLang: () => void
  onScrollDown: () => void
}

export function Hero({ lang, onToggleLang, onScrollDown }: HeroProps) {
  return (
    <section style={{
      position: 'relative', height: '100svh', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #0094FD 0%, #00BFBF 40%, #00F7FC 70%, #0094FD 100%)',
      width: '100%', maxWidth: '100%',
    }}>

      {/* Video hero */}
      <video autoPlay muted loop playsInline preload="none"
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0,
        }}>
        <source src="/hero-catalogo.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(0,0,0,0.52)',
      }} />


      {/* Toggle idioma */}
      <button onClick={onToggleLang}
        style={{
          position: 'absolute', top: 26, right: 30, zIndex: 10,
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.35)', borderRadius: 999,
          padding: '7px 18px', cursor: 'pointer',
          fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
          letterSpacing: '.12em', color: '#fff',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}>
        <span style={{ opacity: lang === 'es' ? 1 : .45, transition: 'opacity .3s' }}>ES</span>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>│</span>
        <span style={{ opacity: lang === 'en' ? 1 : .45, transition: 'opacity .3s' }}>EN</span>
      </button>

      {/* Botones centrados abajo */}
      <div className="hero-btns" style={{
        position: 'absolute', bottom: 100, left: 0, right: 0, zIndex: 2,
        display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
        padding: '0 24px',
        animation: 'tcFadeIn .9s ease both',
      }}>
        <button onClick={onScrollDown}
          className="hero-btn-primary"
          style={{
            padding: '14px 32px', borderRadius: 8, border: 'none',
            background: '#fff', color: 'var(--tc-blue)',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700,
            cursor: 'pointer', letterSpacing: '.04em',
            transition: 'transform .2s, box-shadow .2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
          }}>
          {lang === 'es' ? 'Ver nuestros trabajos' : 'See our work'}
        </button>

        <a href="https://wa.me/56965174454" target="_blank" rel="noopener noreferrer"
          className="hero-btn-wa"
          style={{
            padding: '14px 32px', borderRadius: 8,
            border: '2px solid rgba(255,255,255,0.7)',
            background: 'transparent', color: '#fff',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', letterSpacing: '.04em', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'transform .2s, background .2s, border-color .2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)'
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#fff'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.7)'
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a7.33 7.33 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.848L.17 23.527l5.835-1.53A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.956a9.948 9.948 0 01-5.067-1.384l-.364-.216-3.768.99 1.008-3.674-.237-.378A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          {lang === 'es' ? 'Agendar una llamada' : 'Schedule a call'}
        </a>
      </div>

      {/* Logo + Título centrado */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '0 24px', maxWidth: 680,
        animation: 'tcFadeIn .9s ease both',
        marginBottom: 120,
      }}>
        <img src="/images/logo-techne-creativ.svg" alt="Techne Creativ"
          className="hero-logo"
          style={{ height: 80, width: 'auto', marginBottom: 28 }} />
        <h1 className="hero-title" style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px,5vw,56px)',
          fontWeight: 800, color: '#fff', lineHeight: 1.1,
          letterSpacing: '-0.02em', marginBottom: 14,
          textShadow: '0 2px 24px rgba(0,0,0,0.45)',
        }}>
          Tu negocio merece una presencia digital de alto nivel.
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(11px,1.8vw,15px)',
          color: 'rgba(255,255,255,0.72)', letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          Diseño · Branding · Marketing
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-logo { height: 56px !important; margin-bottom: 20px !important; }
          .hero-title { font-size: 22px !important; }
          .hero-btns { bottom: 32px !important; gap: 10px !important; }
          .hero-btn-primary, .hero-btn-wa {
            padding: 12px 20px !important;
            font-size: 13px !important;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Scroll indicator */}
      <div onClick={onScrollDown} style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)', zIndex: 2, cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
        animation: 'tcBounce 2.2s ease-in-out infinite',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 500,
          letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
        }}>
          {lang === 'es' ? 'ver trabajos' : 'see work'}
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="rgba(255,255,255,0.8)" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
