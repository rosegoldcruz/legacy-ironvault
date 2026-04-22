'use client'
import { useRef, useState } from 'react'

export default function VideoPlayer({ src, style }: { src: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    ref.current?.play()
    setPlaying(true)
  }

  return (
    <div style={{ position: 'relative', ...style }}>
      <video
        ref={ref}
        controls
        playsInline
        width="100%"
        style={{ display: 'block', width: '100%' }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing && (
        <div
          onClick={handlePlay}
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.35)',
          }}
        >
          <div style={{
            width: 80, height: 80,
            background: 'rgba(212,175,55,0.92)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 30px rgba(212,175,55,0.6)',
            transition: 'transform 0.15s',
          }}>
            {/* Triangle play icon */}
            <div style={{
              width: 0, height: 0,
              borderTop: '18px solid transparent',
              borderBottom: '18px solid transparent',
              borderLeft: '30px solid #000',
              marginLeft: 6,
            }} />
          </div>
        </div>
      )}
    </div>
  )
}
