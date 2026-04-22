import Image from 'next/image'

export default function RoyaltiesForm() {
  return (
    <section style={{ background: '#fff', padding: '60px 20px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>

        {/* CW Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32, padding: 24, background: '#f9f9f9', borderRadius: 8 }}>
          <Image
            src="/cwlogo.webp"
            alt="Commonwealth Ventures LLC"
            width={240}
            height={80}
            style={{ maxWidth: '100%', height: 'auto', margin: '0 auto', display: 'block' }}
          />
        </div>

        {/* First Name */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color: '#333', marginBottom: 6 }}>First Name</label>
          <input type="text" placeholder="First Name" style={{ width: '100%', border: '1px solid #DDD', borderRadius: 4, padding: '12px 14px', fontSize: 14, color: '#333', outline: 'none', fontFamily: 'Open Sans, sans-serif' }} />
        </div>

        {/* Last Name */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color: '#333', marginBottom: 6 }}>Last Name</label>
          <input type="text" placeholder="Last Name" style={{ width: '100%', border: '1px solid #DDD', borderRadius: 4, padding: '12px 14px', fontSize: 14, color: '#333', outline: 'none', fontFamily: 'Open Sans, sans-serif' }} />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color: '#333', marginBottom: 6 }}>
            Phone <span style={{ color: 'red' }}>*</span>
          </label>
          <input type="tel" placeholder="Phone" style={{ width: '100%', border: '1px solid #DDD', borderRadius: 4, padding: '12px 14px', fontSize: 14, color: '#333', outline: 'none', fontFamily: 'Open Sans, sans-serif' }} />
        </div>

        {/* Email */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color: '#333', marginBottom: 6 }}>
            Email <span style={{ color: 'red' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#AAA' }}>✉</span>
            <input type="email" placeholder="Email" style={{ width: '100%', border: '1px solid #DDD', borderRadius: 4, padding: '12px 14px 12px 36px', fontSize: 14, color: '#333', outline: 'none', fontFamily: 'Open Sans, sans-serif' }} />
          </div>
        </div>

        {/* Checkbox 1 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
          <input type="checkbox" id="c1" style={{ marginTop: 3, flexShrink: 0, width: 16, height: 16, cursor: 'pointer' }} />
          <label htmlFor="c1" style={{ fontSize: 11, color: '#555', lineHeight: 1.6, cursor: 'pointer' }}>
            By checking this box, I consent to receive non-marketing text messages from <strong>[Common Wealth Ventures LLC]</strong> about <strong>all services and promotions offered by Common Wealth Ventures LLC</strong>. Message frequency varies; message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </label>
        </div>

        {/* Checkbox 2 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
          <input type="checkbox" id="c2" style={{ marginTop: 3, flexShrink: 0, width: 16, height: 16, cursor: 'pointer' }} />
          <label htmlFor="c2" style={{ fontSize: 11, color: '#555', lineHeight: 1.6, cursor: 'pointer' }}>
            By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others. From <strong>[Common Wealth Ventures LLC]</strong> at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </label>
        </div>

        {/* Submit */}
        <button type="button" style={{ width: '100%', background: '#22C55E', border: 'none', borderRadius: 4, padding: 16, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', cursor: 'pointer', marginTop: 4, marginBottom: 12 }}>
          Button
        </button>

        {/* Links */}
        <div style={{ textAlign: 'center', fontSize: 12 }}>
          <a href="#" style={{ color: '#3B82F6', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: '#999', margin: '0 6px' }}>|</span>
          <a href="#" style={{ color: '#3B82F6', textDecoration: 'none' }}>Terms of Service</a>
        </div>

      </div>
    </section>
  )
}
