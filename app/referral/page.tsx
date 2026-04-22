import Navbar from '../components/Navbar'
import StickyBar from '../components/StickyBar'
import ReferralHero from '../components/referral/ReferralHero'
import ReferralCommissions from '../components/referral/ReferralCommissions'
import ReferralReward from '../components/referral/ReferralReward'
import ReferralTemplate from '../components/referral/ReferralTemplate'
import ReferralForm from '../components/referral/ReferralForm'
import ReferralBottomCopy from '../components/referral/ReferralBottomCopy'

export const metadata = {
  title: 'Referral Program | Iron Vault Token',
}

export default function ReferralPage() {
  return (
    <>
      <Navbar />
      <ReferralHero />
      <ReferralCommissions />
      <ReferralReward />
      <section style={{ background: '#000', padding: '40px 20px' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 800, color: '#D4AF37', textAlign: 'center', fontStyle: 'italic', marginBottom: 24 }}>
          Template for sharing Iron Vault Token with others!
        </div>
        <ReferralTemplate />
        <ReferralForm />
      </section>
      <ReferralBottomCopy />
      <div className="sticky-spacer" />
      <StickyBar />
    </>
  )
}
