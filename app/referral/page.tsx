import Navbar from '../components/Navbar'
import ReferralHero from '../components/referral/ReferralHero'
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
      <section className="referral-template-section">
        <div className="referral-template-heading">
          Template for sharing Iron Vault Token with others!
        </div>
        <ReferralTemplate />
        <ReferralForm />
      </section>
      <ReferralBottomCopy />
    </>
  )
}
