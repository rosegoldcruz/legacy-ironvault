export default function YellowCTASection() {
  return (
    <section id="royalties" style={{ background: '#F5C518', padding: '60px 20px' }}>
      <div className="presale-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr 1fr 1fr', gap: 30, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 900, color: '#000', marginBottom: 16, lineHeight: 1.2 }}>
            Getting your pre sale tokens is simple
          </div>
          <a href="/optin" style={{ display: 'block', background: '#000', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14, padding: 20, borderRadius: 4, textAlign: 'center', lineHeight: 1.4, textDecoration: 'none' }}>
            Opt in to recieve info on getting your tokens today!
          </a>
        </div>
        {[
          {
            icon: '🖥️',
            title: 'opt in now to get a call',
            desc: 'Speak with one of our reps today and secure your 250,000 Iron Vault Tokens through our presale today!',
          },
          {
            icon: '💰',
            title: 'Learn about our royalties',
            desc: 'Our token offers our community members the chance to opt in and get paid 24/7 forever on every transaction with the Iron Vault Token forever!',
          },
          {
            icon: '📈',
            title: 'Start Receiving passive income from trading volume at launch!',
            desc: 'This will create life changing income for you and generational income for your loved ones forever!',
          },
        ].map((f) => (
          <div key={f.title} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 28, color: '#000' }}>{f.icon}</div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 800, color: '#000' }}>{f.title}</div>
            <div style={{ fontSize: 13, color: '#000', opacity: 0.7, lineHeight: 1.5 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
