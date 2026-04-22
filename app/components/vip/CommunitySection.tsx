import Image from 'next/image'

export default function CommunitySection() {
  return (
    <>
      <section style={{ background: '#000', padding: '0 20px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Image
            src="/23.webp"
            alt="Powered By Community. Accelerated By Momentum. — Turn 1-3% of Supply Into $10M–$30M"
            width={760}
            height={500}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
          />
        </div>
      </section>
      <section style={{ background: '#000', padding: '0 20px 40px' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 32, fontWeight: 900, color: '#D4AF37', textAlign: 'center', paddingBottom: 24, lineHeight: 1.2 }}>
          Powered by Community. Accelerated by Momentum.
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto', fontSize: 14, color: '#CCC', lineHeight: 1.8, textAlign: 'center' }}>
          In today&apos;s crypto market, speed is everything—and that&apos;s where platforms like Pump.fun combined with strong, engaged communities create a powerful advantage.<br /><br />
          When a token launches into an active ecosystem—supported by coordinated exposure, social momentum, and real-time participation—it can gain traction far faster than traditional projects. Instead of waiting months for attention, the right setup can generate visibility, liquidity, and volume within hours.<br /><br />
          <strong style={{ color: '#fff' }}>This is where strategic positioning matters most.</strong><br />
          At <strong style={{ color: '#fff' }}>Iron Vault Token</strong>, we focus on aligning early-stage supply with high-impact launch environments. By leveraging community-driven demand and fast-moving platforms like Solana, even a small portion of total supply—such as <strong style={{ color: '#fff' }}>1–3% (10,000,000 to 30,000,000 tokens)</strong>—can become highly valuable when momentum builds and price discovery accelerates.<br />
          As price evolves into higher ranges—such as the <strong style={{ color: '#fff' }}>$1.00–$2.00 level</strong>—those early positions represent a completely different scale of opportunity.<br /><br />
          It&apos;s not just about launching a coin.<br />
          It&apos;s about <strong style={{ color: '#fff' }}>creating the conditions for rapid attention, participation, and growth.</strong><br />
          <strong style={{ color: '#fff' }}>Because in this market… momentum doesn&apos;t wait.</strong>
        </div>
      </section>
    </>
  )
}
