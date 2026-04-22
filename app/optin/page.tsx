import Navbar from '../components/Navbar'
import Image from 'next/image'

export const metadata = {
  title: 'Get Your Tokens | Iron Vault Token',
}

export default function OptinPage() {
  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #DDD',
    borderRadius: 4,
    padding: '12px 14px',
    fontSize: 14,
    color: '#333',
    outline: 'none',
    fontFamily: 'Open Sans, sans-serif',
    background: '#fff',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    color: '#333',
    marginBottom: 6,
  }

  return (
    <>
      <Navbar />

      {/* Page title */}
      <div style={{ background: '#000', padding: '40px 20px 32px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, color: '#D4AF37', fontStyle: 'italic' }}>
          Opt In to Receive Info on Getting Your Tokens Today!
        </h1>
      </div>

      {/* Form */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>

          {/* CW Logo */}
          <div style={{ textAlign: 'center', marginBottom: 32, padding: 24, background: '#f9f9f9', borderRadius: 8 }}>
            <Image
              src="/cwlogo.jpg"
              alt="Commonwealth Ventures LLC"
              width={300}
              height={100}
              style={{ maxWidth: '100%', height: 'auto', margin: '0 auto', display: 'block' }}
            />
          </div>

          {/* First Name */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>First Name</label>
            <input type="text" placeholder="First Name" style={inputStyle} />
          </div>

          {/* Last Name */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Last Name</label>
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Phone <span style={{ color: 'red' }}>*</span></label>
            <input type="tel" placeholder="Phone" style={inputStyle} />
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Email <span style={{ color: 'red' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#AAA' }}>✉</span>
              <input type="email" placeholder="Email" style={{ ...inputStyle, paddingLeft: 36 }} />
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
            Submit
          </button>

          {/* Links */}
          <div style={{ textAlign: 'center', fontSize: 12 }}>
            <a href="#" style={{ color: '#3B82F6', textDecoration: 'none' }}>Privacy Policy</a>
            <span style={{ color: '#999', margin: '0 6px' }}>|</span>
            <a href="#" style={{ color: '#3B82F6', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section style={{ background: '#f9f9f9', padding: '60px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 900, color: '#000', marginBottom: 20 }}>Privacy Policy</h2>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            Common Wealth Ventures LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our services.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Information We Collect:</strong> We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when you opt in to our communications.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>How We Use Your Information:</strong> We use the information we collect to communicate with you about Iron Vault Token, Commonwealth Ventures LLC services, promotions, and updates. We may contact you via phone, email, or text message based on your consent.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Text Messaging:</strong> By opting in, you consent to receive text messages from Common Wealth Ventures LLC. Message and data rates may apply. Message frequency varies. Reply STOP to opt out at any time. Reply HELP for assistance.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Information Sharing:</strong> We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8 }}>
            <strong>Contact:</strong> For questions about this Privacy Policy, contact us at 888-368-2502 or 16165 N. 83rd Avenue, Peoria, AZ 85382.
          </p>
        </div>
      </section>

      {/* Terms of Service */}
      <section style={{ background: '#fff', padding: '60px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 900, color: '#000', marginBottom: 20 }}>Terms of Service</h2>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            By submitting this form and opting in to communications from Common Wealth Ventures LLC, you agree to the following terms.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Investment Risk:</strong> Iron Vault Token (IVT) is a utility token in its presale phase. Cryptocurrency investments involve significant risk. Past performance of any cryptocurrency is not indicative of future results. You should only invest what you can afford to lose.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>No Guarantees:</strong> Common Wealth Ventures LLC makes no guarantees regarding the future value of Iron Vault Token, returns on investment, or the timeline for any exchange listings or stablecoin launch.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Communications Consent:</strong> By opting in you consent to be contacted by Common Wealth Ventures LLC via phone, email, and/or text message regarding Iron Vault Token presale opportunities, royalty programs, and related services. You may opt out at any time by replying STOP to text messages or contacting us directly.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Accepted Payments:</strong> Common Wealth Ventures LLC only accepts payment via Cash App, Venmo, Zelle, Cryptocurrency, or Cashier&apos;s Check. We will never ask for payment through any other method.
          </p>
          <p style={{ fontSize: 13, color: '#444', lineHeight: 1.8 }}>
            <strong>Governing Law:</strong> These terms are governed by the laws of the State of Arizona. Any disputes shall be resolved in Maricopa County, Arizona.
          </p>
        </div>
      </section>
    </>
  )
}
