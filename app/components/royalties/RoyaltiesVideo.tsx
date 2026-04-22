export default function RoyaltiesVideo() {
  return (
    <section style={{ background: '#000', padding: '0 20px 40px' }}>
      <div style={{ maxWidth: 660, margin: '0 auto' }}>
        <video controls playsInline width="100%" style={{ borderRadius: 8, display: 'block' }}>
          <source src="/12.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
