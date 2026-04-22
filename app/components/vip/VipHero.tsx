import Image from 'next/image'

export default function VipHero() {
  return (
    <section style={{ background: '#000', padding: '40px 20px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Image
          src="/19.webp"
          alt="Powerful Partnership For Massive Investment — New Token Set To Explode!"
          width={760}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
          priority
        />
      </div>
    </section>
  )
}
