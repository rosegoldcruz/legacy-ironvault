import Image from 'next/image'

export default function SolanaSection() {
  return (
    <section style={{ background: '#0A0A0A', padding: '60px 20px' }}>
      {/* Header infographic image */}
      <div style={{ maxWidth: 720, margin: '0 auto 40px' }}>
        <Image
          src="/9.webp"
          alt="Powering the Iron Vault Token — Solana infographic"
          width={720}
          height={400}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>

      {/* Full infographic */}
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Image
          src="/10.webp"
          alt="Why Iron Vault Token Uses Solana — full infographic"
          width={720}
          height={900}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
