import Image from 'next/image'

export default function VisionSection() {
  return (
    <section style={{ background: '#fff', padding: '60px 40px', borderTop: '1px solid #eee' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 900, color: '#000', marginBottom: 16, textAlign: 'center' }}>
            The Vision
          </div>
          <p style={{ fontSize: 13, color: '#333', lineHeight: 1.7, marginBottom: 12, textAlign: 'center' }}>
            Common Wealth Ventures believes the next evolution of finance will combine.
          </p>
          <p style={{ fontSize: 13, color: '#333', lineHeight: 1.7, marginBottom: 12, textAlign: 'center' }}>
            The Common Wealth Token is designed to be the first step toward building a platform where:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'center', marginBottom: 20 }}>
            {[
              'Digital markets fund real assets',
              'Real assets support digital currencies',
              'And participants can engage with a transparent, technology-driven financial ecosystem.',
            ].map((item) => (
              <li key={item} style={{ fontSize: 13, color: '#333' }}>{item}</li>
            ))}
          </ul>
          <a
            href="/optin"
            style={{
              display: 'block', background: '#000', color: '#fff',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
              fontSize: 14, padding: '16px 24px', borderRadius: 4,
              textAlign: 'center', textDecoration: 'none', marginTop: 16,
            }}
          >
            Opt in to recieve info on getting your tokens today!
          </a>
        </div>
        <div style={{ border: '2px solid #00AA44', borderRadius: 8, overflow: 'hidden' }}>
          <Image
            src="/8.webp"
            alt="Tokenized Property Investments — Earn from Trading Volume Royalties"
            width={500}
            height={400}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
