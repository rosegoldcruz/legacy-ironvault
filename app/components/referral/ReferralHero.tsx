import Image from 'next/image'

export default function ReferralHero() {
  return (
    <>
      <div style={{ background: '#000', padding: '40px 20px 32px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 32, fontWeight: 900, color: '#D4AF37' }}>
          CWV Referral Program
        </h1>
      </div>
      <section style={{ background: '#000', padding: '0 20px 32px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <Image
            src="/15.webp"
            alt="Earn 10% Commission On All Referral Purchases — Commonwealth Ventures + Iron Vault Token"
            width={660}
            height={500}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
            priority
          />
        </div>
      </section>
    </>
  )
}
