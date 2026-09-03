'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function pad(n: number, len = 2) {
  return String(n).padStart(len, '0')
}

export default function CountdownSection() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const target = new Date('2026-10-01T00:00:00')

    function update() {
      const now = new Date()
      const rawDiff = target.getTime() - now.getTime()
      const diff = Math.abs(rawDiff)
      setIsLive(rawDiff <= 0)
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
    <section style={{ background: 'radial-gradient(circle at top, #151528 0%, #050509 45%, #000 100%)', padding: '56px 16px', textAlign: 'center' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(153,102,255,0.35)', borderRadius: 20, padding: '30px 20px', boxShadow: '0 0 50px rgba(140,82,255,0.18), inset 0 0 25px rgba(153,102,255,0.1)' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 700, letterSpacing: 1.2, color: '#B18CFF', textTransform: 'uppercase', marginBottom: 10 }}>
          {isLive ? 'Live Since October 1st, 2026' : 'Launch Countdown • October 1st, 2026'}
        </div>
        <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(34px, 6vw, 54px)', lineHeight: 1, color: '#fff', marginBottom: 8, textShadow: '0 0 22px rgba(20,241,149,0.35)' }}>
          {isLive ? 'Iron Vault Is Live' : 'Iron Vault Goes Live In'}
        </div>
        <div style={{ fontSize: 13, color: '#b9b9c8', marginBottom: 24 }}>
          {isLive ? 'Tracking time since launch on Solana.' : 'Get your private presale tokens before launch.'}
        </div>

        <div className="countdown-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', width: '100%', marginBottom: 26 }}>
          {units.map((u, i) => (
            <div key={u.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', minWidth: 72, maxWidth: 98, flex: '0 0 auto' }}>
                <div className="countdown-number" style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 10vw, 78px)', color: '#fff', lineHeight: 1, textShadow: '0 0 18px rgba(20,241,149,0.3), 0 0 28px rgba(153,102,255,0.22)' }}>
                  {u.val}
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: 2, color: '#14f195', textTransform: 'uppercase' }}>
                  {u.label}
                </div>
              </div>
              {i < units.length - 1 && (
                <div className="countdown-sep" style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(34px, 8vw, 62px)', color: '#9f7cff', opacity: 0.75, lineHeight: 1, paddingBottom: 20, flex: '0 0 auto' }}>:</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
          <Image src="/solana-logo.svg" alt="Solana logo" width={30} height={30} />
          <span style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, letterSpacing: 0.4 }}>Network: Solana</span>
        </div>
        <div style={{ color: '#d5d5e6', fontSize: 12, marginBottom: 8 }}>Contract Address</div>
        <div style={{ color: '#fff', fontFamily: 'monospace', fontSize: 'clamp(12px, 2.5vw, 15px)', wordBreak: 'break-all', marginBottom: 14 }}>
          DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV
        </div>
        <a
          href="https://solscan.io/account/DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: 'linear-gradient(90deg, #14f195 0%, #9945ff 100%)', color: '#050509', fontWeight: 700, fontSize: 13, padding: '10px 18px', borderRadius: 999, textDecoration: 'none', boxShadow: '0 8px 24px rgba(20,241,149,0.24)' }}
        >
          View on Solscan
        </a>
      </div>
    </section>
  )
}
