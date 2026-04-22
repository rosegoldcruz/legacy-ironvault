'use client'

export default function Navbar() {
  return (
    <nav
      id="home"
      style={{
        background: '#F5C518',
        padding: '12px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 999,
        borderBottom: '2px solid #B8860B',
      }}
    >
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 16, color: '#000', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⚡</div>
        The Iron Vault Token
      </div>
      <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none' }}>
        {[
          { label: 'Home', href: '#home' },
          { label: 'Royalties', href: '#royalties' },
          { label: 'Contact', href: '#contact' },
          { label: 'Referral Program', href: '#referral' },
        ].map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
                color: '#000', textDecoration: 'none', padding: '6px 14px',
                borderRadius: 3, transition: 'all 0.2s',
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-dropdown" style={{ position: 'relative' }}>
          <a href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#000', textDecoration: 'none', padding: '6px 14px', borderRadius: 3 }}>
            VIP/Partner Pump ▾
          </a>
          <div
            className="nav-dropdown-menu"
            style={{
              position: 'absolute', top: '100%', right: 0,
              background: '#fff', border: '1px solid #ddd',
              borderRadius: 4, minWidth: 160,
              display: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <a href="#privacy" style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: '#000', textDecoration: 'none' }}>
              Privacy Policy/ Terms
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
