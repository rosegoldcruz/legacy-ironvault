import Image from 'next/image'

export default function ContactHero() {
  return (
    <>
      <div style={{ background: '#000', padding: '40px 20px 32px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, color: '#D4AF37', fontStyle: 'italic' }}>
          Contact us Today to get your Iron Vault Tokens
        </h1>
      </div>
      <section style={{ background: '#000', padding: '0 20px 40px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <Image
            src="/18.webp"
            alt="Get Connected With One Of Our Reps Now — Lock In Your Spot As Eligible Members Only"
            width={660}
            height={400}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
            priority
          />
        </div>
      </section>
    </>
  )
}
