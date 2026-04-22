export default function VipVideo() {
  return (
    <section style={{ background: '#000', padding: '0 20px 32px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', borderRadius: 8, overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline width="100%" style={{ display: 'block' }}>
          <source src="/20.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
