import type { Lang } from '../types'

interface FooterProps {
  lang: Lang
}

export function Footer({ lang }: FooterProps) {
  const linkBase: React.CSSProperties = {
    color: 'var(--tc-muted)', textDecoration: 'none',
    transition: 'color .2s', display: 'flex', alignItems: 'center', gap: 6,
    fontFamily: 'var(--font-body)', fontSize: 13,
  }

  return (
    <footer style={{
      background: 'var(--tc-white)',
      borderTop: '1px solid var(--tc-border)',
      padding: '48px 0 40px',
      marginTop: 0,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 28px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <img src="/images/logo-techne-creativ.svg" alt="Techne Creativ"
          style={{ height: 140, width: 'auto', marginBottom: 4 }} />

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 15, fontStyle: 'italic',
          color: 'var(--tc-cyan-dark)', opacity: .85,
        }}>
          {lang === 'es' ? 'Hacemos crecer tu negocio digital' : 'We grow your digital business'}
        </p>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--tc-muted)' }}>
          Rancagua, Chile · Barquisimeto, Venezuela
        </p>

        {/* Contactos */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* WhatsApp Chile */}
          <a href="https://wa.me/56965174454" target="_blank" rel="noopener noreferrer"
            style={linkBase}
            onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--tc-muted)')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a7.33 7.33 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.848L.17 23.527l5.835-1.53A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.956a9.948 9.948 0 01-5.067-1.384l-.364-.216-3.768.99 1.008-3.674-.237-.378A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            +56 9 6517 4454 (Chile)
          </a>

          {/* WhatsApp Venezuela */}
          <a href="https://wa.me/584246515707" target="_blank" rel="noopener noreferrer"
            style={linkBase}
            onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--tc-muted)')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a7.33 7.33 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.848L.17 23.527l5.835-1.53A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.956a9.948 9.948 0 01-5.067-1.384l-.364-.216-3.768.99 1.008-3.674-.237-.378A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            +58 424 651 5707 (Venezuela)
          </a>

          {/* Email */}
          <a href="mailto:ventas@technecreativ.com" style={linkBase}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--tc-blue)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--tc-muted)')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            ventas@technecreativ.com
          </a>
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(107,114,128,.45)', marginTop: 10 }}>
          © 2026 Techne Creativ · Desarrollado por{' '}
          <a href="https://technecreativ.com" target="_blank" rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}>
            Techne Creativ
          </a>
        </p>
      </div>
    </footer>
  )
}
