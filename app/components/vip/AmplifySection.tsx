import Image from 'next/image'

export default function AmplifySection() {
  return (
    <section style={{ background: '#000', padding: '0 20px 40px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Image
          src="/21.webp"
          alt="Amplify Your Token's Potential With Pump.fun — Powerful Partnership For Explosive Growth"
          width={760}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
