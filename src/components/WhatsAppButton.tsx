import { useState } from 'react'

export function WhatsAppButton() {
  const [hov, setHov] = useState(false)

  return (
    <a
      href="https://wa.me/56965174454"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        display: 'flex', alignItems: 'center', gap: 10,
        background: '#25D366',
        color: '#fff', textDecoration: 'none',
        borderRadius: hov ? 24 : '50%',
        padding: hov ? '12px 20px' : '14px',
        boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
        transition: 'border-radius .25s ease, padding .25s ease, box-shadow .25s ease',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
        whiteSpace: 'nowrap',
      }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a7.33 7.33 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.848L.17 23.527l5.835-1.53A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.956a9.948 9.948 0 01-5.067-1.384l-.364-.216-3.768.99 1.008-3.674-.237-.378A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      <span style={{
        maxWidth: hov ? 160 : 0, overflow: 'hidden',
        transition: 'max-width .25s ease',
        display: 'inline-block',
      }}>
        Contactar ahora
      </span>
    </a>
  )
}
