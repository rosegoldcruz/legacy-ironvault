import VideoPlayer from './VideoPlayer'

export default function RagsToRiches() {
  return (
    <section style={{ background: '#000', padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 32, fontWeight: 900, color: '#D4AF37', marginBottom: 24 }}>
        Rags to riches crypto Success Story
      </h2>
      <div style={{ maxWidth: 800, margin: '0 auto', border: '3px solid #B8860B', borderRadius: 8, overflow: 'hidden', background: '#0A0A0A' }}>
        <VideoPlayer src="/4.mp4" />
      </div>
    </section>
  )
}
