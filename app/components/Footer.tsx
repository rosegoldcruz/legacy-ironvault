export default function Footer() {
  return (
    <footer style={{ background: '#000', padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, borderTop: '1px solid #1A1A1A' }}>
      <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 12, color: '#555' }}>
        Copyright Common Wealth Ventures LLC 2026. All rights reserved
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {[
          { icon: '📘', label: 'Facebook' },
          { icon: '📸', label: 'Instagram' },
          { icon: '🐦', label: 'X' },
          { icon: '▶️', label: 'Youtube' },
        ].map((s) => (
          <a
            key={s.label}
            href="#"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textDecoration: 'none', color: '#888', fontSize: 11, fontFamily: 'Montserrat, sans-serif' }}
          >
            <span style={{ fontSize: 22 }}>{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
