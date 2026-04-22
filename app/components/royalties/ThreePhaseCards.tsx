export default function ThreePhaseCards() {
  return (
    <section style={{ background: '#000', padding: '0 20px 40px' }}>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#D4AF37', textAlign: 'center', paddingBottom: 24, fontStyle: 'italic' }}>
        Three step process to unlock Stabe Coin
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
        className="three-phases-grid">

        {/* Phase 1 */}
        <div style={{ background: '#0D0D0D', border: '1px solid #B8860B', borderRadius: 8, padding: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 48, color: 'rgba(212,175,55,0.12)', lineHeight: 1, position: 'absolute', top: 16, right: 20 }}>1</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 3, color: '#D4AF37', textTransform: 'uppercase', marginBottom: 8 }}>Phase 1</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>Community Token Launch</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, color: '#D4AF37', marginBottom: 10, lineHeight: 1.5 }}>Goal: Build the founding community and distribute the initial Iron Vault Tokens.</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: 1 }}>Key Points</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
            {[
              <span key="1">Presale token price: <strong style={{ color: '#fff' }}>$0.001</strong></span>,
              <span key="2">Community target: <strong style={{ color: '#fff' }}>10,000 early members</strong></span>,
              'Tokens distributed to founding holders',
              'Establish liquidity and market presence',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 12, color: '#AAA', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#D4AF37', flexShrink: 0 }}>•</span>{item}
              </li>
            ))}
          </ul>
          <div style={{ height: 1, background: 'rgba(212,175,55,0.2)', margin: '14px 0' }} />
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 6, letterSpacing: 1 }}>Purpose</div>
          <div style={{ fontSize: 12, color: '#D4AF37', lineHeight: 1.5, fontStyle: 'italic' }}>Build the foundation of the Iron Vault ecosystem through early adoption and community ownership.</div>
        </div>

        {/* Phase 2 */}
        <div style={{ background: '#0D0D0D', border: '1px solid #B8860B', borderRadius: 8, padding: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 48, color: 'rgba(212,175,55,0.12)', lineHeight: 1, position: 'absolute', top: 16, right: 20 }}>2</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 3, color: '#D4AF37', textTransform: 'uppercase', marginBottom: 8 }}>Phase 2</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>Royalty Ecosystem + Asset Acquisition</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, color: '#D4AF37', marginBottom: 10, lineHeight: 1.5 }}>Goal: Create revenue through token activity and acquire commercial assets.</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: 1 }}>Key Points</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 8 }}>
            {[
              'Transaction activity generates ecosystem revenue',
              'Optional royalty positions allow participation in transaction fees',
              'Funds used to acquire commercial real estate assets',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 12, color: '#AAA', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#D4AF37', flexShrink: 0 }}>•</span>{item}
              </li>
            ))}
          </ul>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: 1, marginTop: 6 }}>Examples of assets may include:</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14, marginLeft: 12 }}>
            {['Shopping centers', 'Gas stations', 'Franchise locations', 'Commercial properties'].map((item) => (
              <li key={item} style={{ fontSize: 12, color: '#AAA', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#B8860B', flexShrink: 0 }}>◦</span>{item}
              </li>
            ))}
          </ul>
          <div style={{ height: 1, background: 'rgba(212,175,55,0.2)', margin: '14px 0' }} />
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 6, letterSpacing: 1 }}>Purpose</div>
          <div style={{ fontSize: 12, color: '#D4AF37', lineHeight: 1.5, fontStyle: 'italic' }}>Create real-world asset backing and long-term ecosystem strength.</div>
        </div>

        {/* Phase 3 */}
        <div style={{ background: '#0D0D0D', border: '1px solid #B8860B', borderRadius: 8, padding: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 48, color: 'rgba(212,175,55,0.12)', lineHeight: 1, position: 'absolute', top: 16, right: 20 }}>3</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 3, color: '#D4AF37', textTransform: 'uppercase', marginBottom: 8 }}>Phase 3</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>Stablecoin Launch</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, color: '#D4AF37', marginBottom: 10, lineHeight: 1.5 }}>Goal: Launch a stablecoin backed by commercial real estate assets.</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: 1 }}>Key Points</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
            {[
              'Stablecoin supported by acquired assets',
              'Early Iron Vault participants maintain ecosystem participation',
              'Royalty participants maintain equivalent participation level',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 12, color: '#AAA', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#D4AF37', flexShrink: 0 }}>•</span>{item}
              </li>
            ))}
          </ul>
          <div style={{ height: 1, background: 'rgba(212,175,55,0.2)', margin: '14px 0' }} />
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 6, letterSpacing: 1 }}>Purpose</div>
          <div style={{ fontSize: 12, color: '#D4AF37', lineHeight: 1.5, fontStyle: 'italic' }}>
            Create a <strong style={{ color: '#fff' }}>high-volume digital currency ecosystem</strong> capable of generating ongoing transaction activity.
          </div>
        </div>

      </div>
    </section>
  )
}
