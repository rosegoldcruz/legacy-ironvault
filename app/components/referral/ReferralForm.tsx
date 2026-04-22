export default function ReferralForm() {
  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#1A1A1A',
    border: '1px solid #2A2A2A',
    borderRadius: 4,
    padding: '12px 14px',
    fontSize: 14,
    color: '#fff',
    outline: 'none',
    fontFamily: 'Open Sans, sans-serif',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 11,
    fontWeight: 600,
    color: '#888',
    marginBottom: 6,
    letterSpacing: 1,
    textTransform: 'uppercase',
  }

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', background: '#111', border: '1px solid #2A2A2A', borderRadius: 8, padding: 32 }}>
      <div style={{ fontSize: 13, color: '#D4AF37', fontStyle: 'italic', textAlign: 'center', marginBottom: 24, lineHeight: 1.6, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Submit your referral below to receive your 10% commissions on anything they spend!
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Your Name</label>
        <input type="text" placeholder="Your first and last name" style={inputStyle} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Your Email Address</label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#444' }}>✉</span>
          <input type="email" placeholder="your@email.com" style={{ ...inputStyle, paddingLeft: 36 }} />
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Referral Full Name</label>
        <input type="text" placeholder="Referral full name" style={inputStyle} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Referral Phone <span style={{ color: 'red' }}>*</span></label>
        <input type="tel" placeholder="Referral phone number" style={inputStyle} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Referral Email Address <span style={{ color: 'red' }}>*</span></label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#444' }}>✉</span>
          <input type="email" placeholder="Referral email address" style={{ ...inputStyle, paddingLeft: 36 }} />
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Referral Occupation (Company)</label>
        <input type="text" placeholder="Company" style={inputStyle} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Solution to Referral</label>
        <input type="text" placeholder="Solution to referral" style={inputStyle} />
      </div>

      <button type="button" style={{ width: '100%', background: '#22C55E', border: 'none', borderRadius: 4, padding: 16, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', cursor: 'pointer', marginTop: 8 }}>
        Submit
      </button>
    </div>
  )
}
