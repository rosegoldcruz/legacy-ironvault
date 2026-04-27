'use client'

import { useRef, useState } from 'react'

export default function VipVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  function handlePause() {
    setPlaying(false)
  }

  return (
    <section style={{ background: '#000', padding: '0 20px 32px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          onPause={handlePause}
          onPlay={() => setPlaying(true)}
          width="100%"
          style={{ display: 'block' }}
        >
          <source src="/20.mp4" type="video/mp4" />
        </video>
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label="Play video"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#F5C518',
              border: 'none',
              borderRadius: '50%',
              width: 72,
              height: 72,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#000">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
