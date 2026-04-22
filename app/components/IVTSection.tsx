import Image from 'next/image'

export default function IVTSection() {
  return (
    <section style={{ background: '#fff', padding: '60px 20px' }}>
      <div className="two-col-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 24, fontWeight: 900, color: '#B8860B', textDecoration: 'underline', marginBottom: 8, fontStyle: 'italic' }}>
            Did you miss out on bitcoin?
          </div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 900, color: '#000', marginBottom: 16 }}>
            Get your Iron Vault tokens today!
          </div>
          <p style={{ fontSize: 14, color: '#333', lineHeight: 1.7, marginBottom: 8 }}>
            The <strong>Iron Vault Token (IVT)</strong> functions as the promotional and transactional utility layer of the ecosystem. It is designed to:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
            {[
              'Facilitate participation within the Common Wealth Ventures platform',
              'Support community growth and ecosystem adoption',
              'Enable royalty-based participation tied to platform trading activity',
              'Provide access to future ecosystem developments and digital financial products',
            ].map((item) => (
              <li key={item} style={{ fontSize: 14, color: '#333', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#B8860B' }}>•</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src="/6.webp"
            alt="IVT coin — Iron Vault Token $0.001 presale price"
            width={500}
            height={400}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  )
}
