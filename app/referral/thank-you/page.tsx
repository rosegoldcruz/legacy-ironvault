import Link from 'next/link'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'Thank You | Referral Program | Iron Vault Token',
}

export default function ReferralThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="referral-thankyou-section">
        <div className="referral-thankyou-card">
          <p className="referral-thankyou-eyebrow">Referral Received</p>
          <h1 className="referral-thankyou-title">Thank You</h1>
          <p className="referral-thankyou-copy">
            Your referral was submitted successfully. Our team will review the details and follow up as needed.
          </p>
          <div className="referral-thankyou-actions">
            <Link href="/referral" className="referral-thankyou-button referral-thankyou-button-primary">
              Submit Another Referral
            </Link>
            <Link href="/" className="referral-thankyou-button referral-thankyou-button-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}