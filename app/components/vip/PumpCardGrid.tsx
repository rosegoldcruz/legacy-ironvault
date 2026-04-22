const cards = [
  {
    icon: '⚡',
    title: 'Instant Liquidity = Instant Movement',
    body: (
      <>
        Tokens launch with built-in liquidity curves (bonding curves).<br /><br />
        • <strong>No waiting</strong> for buyers and sellers<br />
        • Price <strong>automatically increases</strong> with each buy<br />
        • Early buys move price <em>fast</em>
      </>
    ),
    result: '👉 Even small buying pressure creates huge percentage jumps early',
    orange: false,
  },
  {
    icon: '🎰',
    title: 'Ultra-Low Entry Creates "Lottery Psychology"',
    body: (
      <>
        When people see $0.000000008 their brain thinks:<br />
        <em>&ldquo;If this hits $0.01… I&apos;m rich.&rdquo;</em><br /><br />
        That creates:<br />
        • Massive FOMO<br />
        • Fast, emotional decision-making<br />
        • Viral sharing
      </>
    ),
    result: '👉 People pile in quickly, driving rapid spikes',
    orange: false,
  },
  {
    icon: '🌊',
    title: 'Speed of Solana Removes Friction',
    body: (
      <>
        Pump.fun runs on Solana:<br /><br />
        • Transactions happen in <strong>seconds</strong><br />
        • Fees are <strong>extremely low</strong><br />
        • Anyone can buy <strong>instantly</strong>
      </>
    ),
    result: '👉 On Solana, momentum compounds rapidly. Slower chains kill momentum.',
    orange: false,
  },
  {
    icon: '⚖️',
    title: 'Fair Launch Energy (No Presale Advantage)',
    body: (
      <>
        Most Pump.fun tokens have:<br /><br />
        • No private rounds<br />
        • No VC allocations<br />
        • No early insider pricing<br />
        • Everyone buys in real time
      </>
    ),
    result: '👉 People feel it\'s a "fair shot" — more trust, more participation early',
    orange: false,
  },
  {
    icon: '📣',
    title: 'Viral + Social Momentum',
    body: (
      <>
        Tokens spread through Telegram, X (Twitter), and Discord.<br /><br />
        Once a coin moves:<br />
        • Screenshots get shared<br />
        • People brag about gains<br />
        • Influencers jump in
      </>
    ),
    result: '👉 Momentum feeds itself: price ↑ → attention ↑ → price ↑',
    orange: false,
  },
  {
    icon: '💥',
    title: 'Low Market Cap = Explosive Multiples',
    body: (
      <>
        Early-stage tokens start tiny:<br /><br />
        • $10K → $100K = <strong>10x</strong><br />
        • $100K → $1M = <strong>another 10x</strong><br /><br />
        These jumps are <strong>much easier</strong> than moving a billion-dollar project.
      </>
    ),
    result: '👉 Early runs can look insane (100x+ moves happen)',
    orange: false,
  },
  {
    icon: '🎓',
    title: 'Graduation Effect (Liquidity Expansion)',
    body: (
      <>
        Once a token hits certain milestones it &ldquo;graduates&rdquo; to broader markets like Raydium:<br /><br />
        • More buyers<br />
        • More visibility<br />
        • Larger capital inflows
      </>
    ),
    result: '👉 Another wave of price acceleration kicks in',
    orange: false,
  },
  {
    icon: '🔥',
    title: 'Narrative + Branding Drives Everything',
    body: (
      <>
        Coins don&apos;t pump because of code.<br />
        They pump because of <strong>story + belief + attention</strong>.<br /><br />
        If your project has:<br />
        • A strong narrative<br />
        • Aggressive marketing<br />
        • Community engagement
      </>
    ),
    result: '👉 It can outperform technically "better" projects',
    orange: false,
  },
  {
    icon: '⚠️',
    title: 'The Reality (Important)',
    body: (
      <>
        This environment is powerful — but it&apos;s also volatile:<br /><br />
        • Prices can move up <strong>fast</strong><br />
        • They can also drop just as fast<br />
        • <strong>Momentum is everything</strong>
      </>
    ),
    result: 'Never invest more than you can afford to lose.',
    orange: true,
  },
]

export default function PumpCardGrid() {
  return (
    <section style={{ background: '#000', padding: '0 20px' }}>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, color: '#FF6B00', textAlign: 'center', padding: '0 0 8px', lineHeight: 1.2 }}>
        Why tokens can go &ldquo;crazy&rdquo; on platforms like Pump.fun
      </div>

      <div style={{ background: '#000', padding: '16px 0 48px' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 700, color: '#D4AF37', textAlign: 'center', marginBottom: 36, textDecoration: 'underline', fontStyle: 'italic', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          Here&apos;s the real breakdown — this isn&apos;t magic, it&apos;s mechanics + psychology + speed.
        </div>

        <div className="pump-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: '#0D0D0D',
                border: `1px solid ${card.orange ? 'rgba(255,107,0,0.3)' : '#1E1E1E'}`,
                borderRadius: 8,
                padding: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: card.orange ? 'linear-gradient(90deg,transparent,#FF6B00,transparent)' : 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />
              <span style={{ fontSize: 32, marginBottom: 12, display: 'block' }}>{card.icon}</span>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 800, color: card.orange ? '#FF6B00' : '#D4AF37', marginBottom: 12, lineHeight: 1.3, textDecoration: 'underline' }}>
                {card.title}
              </div>
              <div style={{ fontSize: 12, color: '#888', lineHeight: 1.75 }}>
                {card.body}
                <span style={{ display: 'block', marginTop: 10, fontSize: 12, color: card.orange ? '#FF6B00' : '#D4AF37', fontWeight: 600, borderTop: '1px solid #1E1E1E', paddingTop: 10 }}>
                  {card.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
