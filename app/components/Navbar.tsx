'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isRoyalties = pathname === '/royalties'
  const isReferral = pathname === '/referral'
  const isContact = pathname === '/contact'
  const isVip = pathname === '/vip'
  const [open, setOpen] = useState(false)

  function linkStyle(active: boolean): React.CSSProperties {
    return {
      fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
      textDecoration: 'none', padding: '6px 14px', borderRadius: 3,
      background: active ? '#000' : 'transparent',
      color: active ? '#F5C518' : '#000',
      whiteSpace: 'nowrap',
    }
  }

  const mobileLinks = [
    { href: '/', label: 'Home', active: isHome },
    { href: '/royalties', label: 'Royalties', active: isRoyalties },
    { href: '/contact', label: 'Contact', active: isContact },
    { href: '/referral', label: 'Referral Program', active: isReferral },
    { href: '/vip', label: 'VIP/Partner Pump', active: isVip },
  ]

  return (
    <>
      <nav style={{
        background: '#F5C518',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        borderBottom: '2px solid #B8860B',
        gap: 12,
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}>
        {/* Brand */}
        <a href="/" style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 16,
          color: '#000', display: 'flex', alignItems: 'center', gap: 10,
          flexShrink: 0, textDecoration: 'none', minHeight: 44,
        }}>
          <Image src="/ivt-logo.png" alt="Iron Vault Token" width={52} height={52}
            style={{ borderRadius: '50%', flexShrink: 0 }} />
          <span className="nav-brand-text">The Iron Vault Token</span>
        </a>

        {/* Desktop nav links */}
        <ul className="nav-links-desktop" style={{
          display: 'flex', alignItems: 'center', gap: 2,
          listStyle: 'none', flexWrap: 'wrap',
        }}>
          <li><a href="/" style={linkStyle(isHome)}>Home</a></li>
          <li><a href="/royalties" style={linkStyle(isRoyalties)}>Royalties</a></li>
          <li><a href="/contact" style={linkStyle(isContact)}>Contact</a></li>
          <li><a href="/referral" style={linkStyle(isReferral)}>Referral Program</a></li>
          <li><a href="/vip" style={linkStyle(isVip)}>VIP/Partner Pump</a></li>
        </ul>

        {/* Desktop Call Now */}
        <a
          href="tel:8883682502"
          className="nav-call-btn"
          style={{
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
            background: '#000', color: '#F5C518',
            fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 13,
            padding: '8px 16px', borderRadius: 4, textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          📞 888-368-2502
        </a>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            padding: 0, flexShrink: 0, width: 44, height: 44,
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 28, color: '#000', lineHeight: 1 }}>{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* Mobile dropdown — full viewport width, fixed position */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 74,
          left: 0,
          width: '100vw',
          zIndex: 9999,
          background: '#F5C518',
          borderBottom: '3px solid #B8860B',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {mobileLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15,
                color: link.active ? '#F5C518' : '#000',
                background: link.active ? '#000' : 'transparent',
                textDecoration: 'none',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                width: '100%',
                display: 'flex', alignItems: 'center', minHeight: 48,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8883682502"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 15,
              color: '#F5C518', background: '#000', textDecoration: 'none',
              padding: '16px 20px', width: '100%',
              display: 'flex', alignItems: 'center', gap: 8, minHeight: 48,
            }}
          >
            📞 888-368-2502
          </a>
        </div>
      )}
    </>
  )
}
