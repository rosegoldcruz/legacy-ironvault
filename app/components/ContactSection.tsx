export default function ContactSection() {
  return (
    <section id="contact" style={{ background: '#fff', padding: '60px 40px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 900, color: '#000', marginBottom: 8 }}>
            Give us a call today!
          </div>
          <a href="tel:8883682502" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 700, color: '#000', textDecoration: 'none', display: 'block', marginBottom: 24 }}>
            888-368-2502
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <div style={{ fontSize: 52 }}>🏛️</div>
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 800, color: '#1B3A6B', lineHeight: 1 }}>COMMONWEALTH</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 600, color: '#B8860B' }}>VENTURES LLC</div>
            </div>
          </div>
          <div style={{ marginTop: 16, fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#555' }}>
            16165 N. 83rd Avenue, Peoria, AZ 85382
          </div>
        </div>
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #ddd' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.5!2d-112.2374!3d33.6445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b67b4b4b4b4b4%3A0x0!2s16165+N+83rd+Ave%2C+Peoria%2C+AZ+85382!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="220"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
