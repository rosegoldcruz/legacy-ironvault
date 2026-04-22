'use client'
import { usePathname } from 'next/navigation'

export default function StickyBar() {
  const pathname = usePathname()
  const isRoyalties = pathname === '/royalties'

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Royalties', href: '/royalties' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Referral Program', href: '#referral' },
    { label: 'Privacy Policy/ Terms', href: '#privacy' },
    { label: 'Vip/Partner Pump', href: '#vip' },
  ]

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, background: '#F5C518', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, borderTop: '2px solid #B8860B' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 13, color: '#000' }}>
        <span>⚡</span> Iron Vault Token{' '}
        <a href="tel:8883682502" style={{ color: '#000', textDecoration: 'none' }}>888-368-2502</a>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
        {links.map((link) => {
          const active = (link.href === '/' && !isRoyalties) || (link.href === '/royalties' && isRoyalties)
          return (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600,
                color: active ? '#F5C518' : '#000',
                textDecoration: 'none',
                padding: active ? '4px 10px' : '4px 8px',
                background: active ? '#000' : 'transparent',
                borderRadius: active ? 3 : 0,
              }}
            >
              {link.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
