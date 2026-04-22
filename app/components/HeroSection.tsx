import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      style={{
        background: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 20px', minHeight: 500,
      }}
    >
      <div style={{ maxWidth: 660, width: '100%', borderRadius: 8, overflow: 'hidden', boxShadow: '0 0 60px rgba(212,175,55,0.3)' }}>
        <Image
          src="/1.webp"
          alt="Iron Vault Token — Real Estate & Crypto powered by Solana"
          width={660}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          priority
        />
      </div>
    </section>
  )
}
