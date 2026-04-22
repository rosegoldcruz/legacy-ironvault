import VideoPlayer from '../VideoPlayer'

export default function RoyaltiesVideo() {
  return (
    <section style={{ background: '#000', padding: '0 20px 40px' }}>
      <div style={{ maxWidth: 660, margin: '0 auto', borderRadius: 8, overflow: 'hidden' }}>
        <VideoPlayer src="/12.mp4" />
      </div>
    </section>
  )
}
