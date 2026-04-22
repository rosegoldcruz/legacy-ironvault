import Image from 'next/image'

export default function EcosystemSection() {
  return (
    <>
      <section style={{ background: '#000', padding: '20px 20px 32px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 800, color: '#D4AF37', lineHeight: 1.3, fontStyle: 'italic' }}>
          Building the Foundation → Creating Revenue →<br />Launching the Stablecoin Economy
        </div>
      </section>
      <section style={{ background: '#000', padding: '0 20px 40px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <Image
            src="/13.webp"
            alt="Iron Vault 3-Phase Ecosystem — Community Token Launch → $62.5M Revenue → Stablecoin Launch"
            width={660}
            height={480}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
          />
        </div>
      </section>
    </>
  )
}
