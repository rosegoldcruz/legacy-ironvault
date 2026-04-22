'use client'
import { useEffect, useState } from 'react'

function pad(n: number, len = 2) {
  return String(n).padStart(len, '0')
}

export default function CountdownSection() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    function update() {
      const target = new Date('2026-11-01T00:00:00')
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) { setTime({ d: 0, h: 0, m: 0, s: 0 }); return }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { val: pad(time.d, 3), label: 'days' },
    { val: pad(time.h), label: 'hours' },
    { val: pad(time.m), label: 'minutes' },
    { val: pad(time.s), label: 'seconds' },
  ]

  return (
    <section style={{ background: '#000', padding: '50px 16px', textAlign: 'center' }}>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 6 }}>
        Launch date on multiple exchanges November 1st 2026!
      </div>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        Get your private presale tokens today!
      </div>
      <div className="countdown-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', width: '100%' }}>
        {units.map((u, i) => (
          <>
            <div key={u.label} style={{ textAlign: 'center', minWidth: 60, maxWidth: 90, flex: '0 0 auto' }}>
              <div className="countdown-number" style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px, 10vw, 72px)', color: '#fff', lineHeight: 1, textShadow: '0 0 20px rgba(212,175,55,0.3)' }}>
                {u.val}
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: 2, color: '#D4AF37', textTransform: 'uppercase' }}>
                {u.label}
              </div>
            </div>
            {i < units.length - 1 && (
              <div key={`sep-${i}`} className="countdown-sep" style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(32px, 8vw, 60px)', color: '#D4AF37', opacity: 0.4, lineHeight: 1, paddingBottom: 20, flex: '0 0 auto' }}>:</div>
            )}
          </>
        ))}
      </div>
    </section>
  )
}
