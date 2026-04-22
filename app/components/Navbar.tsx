'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const isRoyalties = pathname === '/royalties'

  return (
    <nav
      style={{
        background: '#F5C518',
        padding: '12px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 999,
        borderBottom: '2px solid #B8860B',
      }}
    >
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 16, color: '#000', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Image src="/Iron Vault Token.png" alt="Iron Vault Token" width={32} height={32} style={{ borderRadius: '50%' }} />
        The Iron Vault Token
      </div>
      <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none' }}>
        <li>
          <a href="/" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#000', textDecoration: 'none', padding: '6px 14px', borderRadius: 3, background: !isRoyalties ? 'rgba(0,0,0,0.1)' : 'transparent' }}>
            Home
          </a>
        </li>
        <li>
          <a href="/royalties" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 14px', borderRadius: 3, background: isRoyalties ? '#000' : 'transparent', color: isRoyalties ? '#F5C518' : '#000' }}>
            Royalties
          </a>
        </li>
        <li>
          <a href="/#contact" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#000', textDecoration: 'none', padding: '6px 14px', borderRadius: 3 }}>
            Contact
          </a>
        </li>
        <li>
          <a href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#000', textDecoration: 'none', padding: '6px 14px', borderRadius: 3 }}>
            Referral Program
          </a>
        </li>
        <li className="nav-dropdown" style={{ position: 'relative' }}>
          <a href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#000', textDecoration: 'none', padding: '6px 14px', borderRadius: 3 }}>
            VIP/Partner Pump ▾
          </a>
          <div
            className="nav-dropdown-menu"
            style={{ position: 'absolute', top: '100%', right: 0, background: '#fff', border: '1px solid #ddd', borderRadius: 4, minWidth: 160, display: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
          >
            <a href="#" style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: '#000', textDecoration: 'none' }}>
              Privacy Policy/ Terms
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
