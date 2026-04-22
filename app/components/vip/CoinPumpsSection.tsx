import Image from 'next/image'

export default function CoinPumpsSection() {
  return (
    <section style={{ background: '#000', padding: '0 20px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Image
          src="/22.webp"
          alt="Check Out What Some Others Are Making With Coin Pumps Right Now!"
          width={760}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
