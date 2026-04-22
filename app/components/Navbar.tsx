'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isRoyalties = pathname === '/royalties'
  const isReferral = pathname === '/referral'
  const isContact = pathname === '/contact'

  function linkStyle(active: boolean): React.CSSProperties {
    return {
      fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
      textDecoration: 'none', padding: '6px 14px', borderRadius: 3,
      background: active ? '#000' : 'transparent',
      color: active ? '#F5C518' : '#000',
      whiteSpace: 'nowrap',
    }
  }

  return (
    <nav style={{ background: '#F5C518', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 999, borderBottom: '2px solid #B8860B', gap: 12, flexWrap: 'wrap' }}>
      {/* Brand */}
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 16, color: '#000', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <Image src="/ivt-logo.png" alt="Iron Vault Token" width={32} height={32} style={{ borderRadius: '50%' }} />
        The Iron Vault Token
      </div>

      {/* Nav links */}
      <ul style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none', flexWrap: 'wrap' }}>
        <li><a href="/" style={linkStyle(isHome)}>Home</a></li>
        <li><a href="/royalties" style={linkStyle(isRoyalties)}>Royalties</a></li>
        <li><a href="/contact" style={linkStyle(isContact)}>Contact</a></li>
        <li><a href="/referral" style={linkStyle(isReferral)}>Referral Program</a></li>
        <li className="nav-dropdown" style={{ position: 'relative' }}>
          <a href="#" style={linkStyle(false)}>VIP/Partner Pump ▾</a>
          <div className="nav-dropdown-menu" style={{ position: 'absolute', top: '100%', right: 0, background: '#fff', border: '1px solid #ddd', borderRadius: 4, minWidth: 160, display: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <a href="#" style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: '#000', textDecoration: 'none' }}>Privacy Policy/ Terms</a>
          </div>
        </li>
      </ul>

      {/* Call Now */}
      <a
        href="tel:8883682502"
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
    </nav>
  )
}
