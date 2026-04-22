import Image from 'next/image'

export default function RWASection() {
  return (
    <section style={{ background: '#fff', padding: '60px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center' }}>
        <div style={{ border: '2px solid #00AA44', borderRadius: 8, overflow: 'hidden' }}>
          <Image
            src="/7.webp"
            alt="Bridging Digital Assets & Real Estate — Building Wealth Through Innovation"
            width={500}
            height={400}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 900, color: '#000', marginBottom: 16, textAlign: 'center' }}>
            Building Toward Real-World Asset Backing
          </div>
          <p style={{ fontSize: 13, color: '#333', lineHeight: 1.7, marginBottom: 12, textAlign: 'center' }}>
            A core objective of the Common Wealth Ventures roadmap is the creation of a <strong>stable digital asset backed by real-world holdings</strong>. As commercial real estate assets are accumulated and stabilized, the project plans to launch a <strong>sister stablecoin</strong> designed to be supported by the underlying value of those commercial properties and other operational assets within the ecosystem.
          </p>
          <p style={{ fontSize: 13, color: '#333', lineHeight: 1.7, marginBottom: 12, textAlign: 'center' }}>
            This structure aims to combine:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'The liquidity and accessibility of blockchain technology With the stability of real-world income-producing assets',
              'The long-term vision is to create a digital currency supported by tangible holdings, allowing blockchain users to interact with a stable asset anchored in real economic activity.',
            ].map((item) => (
              <li key={item} style={{ fontSize: 13, color: '#333', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.5, textAlign: 'left' }}>
                <span style={{ color: '#B8860B', fontSize: 16, flexShrink: 0 }}>•</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
