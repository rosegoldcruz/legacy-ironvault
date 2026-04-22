'use client'

export default function StickyBar() {
  return (
    <div
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000,
        background: '#F5C518',
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 8,
        borderTop: '2px solid #B8860B',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 13, color: '#000' }}>
        <span>⚡</span> Iron Vault Token 888-368-2502
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
        {[
          { label: 'Home', href: '#home' },
          { label: 'Royalties', href: '#royalties' },
          { label: 'Contact', href: '#contact' },
          { label: 'Referral Program', href: '#referral', active: true },
          { label: 'Privacy Policy/ Terms', href: '#privacy' },
          { label: 'Vip/Partner Pump', href: '#vip' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600,
              color: link.active ? '#F5C518' : '#000',
              textDecoration: 'none',
              padding: link.active ? '4px 10px' : '4px 8px',
              background: link.active ? '#000' : 'transparent',
              borderRadius: link.active ? 3 : 0,
              transition: 'opacity 0.2s',
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
