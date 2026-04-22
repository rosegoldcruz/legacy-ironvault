import Image from 'next/image'

export default function StablecoinSection() {
  return (
    <section style={{ background: '#000', padding: '40px 20px' }}>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 800, color: '#D4AF37', marginBottom: 24, fontStyle: 'italic', textAlign: 'center' }}>
        Check out what you could make from Stablecoin
      </div>
      <div style={{ maxWidth: 720, margin: '0 auto 28px', fontSize: 13, color: '#CCC', lineHeight: 1.8, textAlign: 'center' }}>
        5 year maximum timeline to achieve the stable coin launch. Upon Launch whatever participation level you have done with the Iron Vault Token you will get automatically with our stable coin launch. This Coin will be backed by all commercial assets and be valued at $1.00. So even if you only participated $250.00 were talking about a return within 5 years at that point of $250,000 for a $250.00 investment! There is no way you can lose if you are willing to hold for the 5 years.
        <br /><br />
        The greatest wealth transfer in history will belong to the people who had the courage to get in early.
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontStyle: 'italic', color: '#fff', textAlign: 'center', marginTop: 12 }}>
          &ldquo;All overnight success takes about 10 years.&rdquo;
          <cite style={{ display: 'block', fontSize: 12, color: '#D4AF37', marginTop: 4, fontStyle: 'normal' }}>Quote by Jeff Bezos</cite>
        </div>
      </div>
      <div style={{ maxWidth: 660, margin: '0 auto' }}>
        <Image
          src="/14.webp"
          alt="Royalty Payout Example — $1B/day stablecoin — 2% Position $10,000/day — 1% Position $2,000/day — Earn Passive Income"
          width={660}
          height={480}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
