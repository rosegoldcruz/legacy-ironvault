import Image from 'next/image'

export default function RoyaltiesHero() {
  return (
    <section style={{ background: '#000', padding: '40px 20px 0' }}>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#D4AF37', textAlign: 'center', paddingBottom: 24, fontStyle: 'italic' }}>
        Earn Royalties with the Iron Vault Token
      </div>
      <div style={{ maxWidth: 660, margin: '0 auto', paddingBottom: 40 }}>
        <Image
          src="/11.webp"
          alt="Earn Royalties From Transaction Fees — vault with gold coins, 1% 2% 3% labels — MAKE MONEY FROM EVERY TRANSACTION"
          width={660}
          height={480}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
          priority
        />
      </div>
    </section>
  )
}
