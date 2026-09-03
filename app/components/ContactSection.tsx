import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: '#fff', padding: '60px 20px' }}>
      <div className="contact-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 900, color: '#000', marginBottom: 8 }}>
            Give us a call today!
          </div>
          <a href="tel:8883682502" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 700, color: '#000', textDecoration: 'none', display: 'block', marginBottom: 24 }}>
            888-368-2502
          </a>
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <Image src="/IVT/ivt-black.png" alt="IVT MEDIA GROUP" width={300} height={100} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ marginTop: 16, fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#555', lineHeight: 1.6 }}>
            5830 East 2nd Street
            <br />
            7000
            <br />
            Casper, WY 82609
          </div>
        </div>
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #ddd', width: '100%' }}>
          <iframe
            src="https://www.google.com/maps?q=5830+East+2nd+Street+7000+Casper+WY+82609&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, display: 'block', width: '100%', maxWidth: '100%', height: 220 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
