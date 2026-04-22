import Image from 'next/image'

export default function TotalSupplySection() {
  return (
    <section style={{ background: '#000', padding: '0 20px 48px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Image
          src="/24.webp"
          alt="Total Supply At Launch: 1,000,000,000 — 1% $250,000 | 2% $400,000 | 3% $500,000"
          width={760}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
