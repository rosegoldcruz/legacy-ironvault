import Image from 'next/image'

export default function FundingSection() {
  return (
    <section style={{ background: '#000', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Image
          src="/5.webp"
          alt="Funding Options May Be Available — O.A.C."
          width={720}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
