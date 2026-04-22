import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PaymentSection from './components/PaymentSection'
import CountdownSection from './components/CountdownSection'
import PresaleSection from './components/PresaleSection'
import RagsToRiches from './components/RagsToRiches'
import FundingSection from './components/FundingSection'
import IVTSection from './components/IVTSection'
import YellowCTASection from './components/YellowCTASection'
import RWASection from './components/RWASection'
import VisionSection from './components/VisionSection'
import SolanaSection from './components/SolanaSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PaymentSection />
      <CountdownSection />

      {/* Asset 3 — promo video */}
      <section style={{ background: '#000', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', borderRadius: 8, overflow: 'hidden' }}>
          <video controls playsInline width="100%">
            <source src="/3.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <PresaleSection />
      <RagsToRiches />
      <FundingSection />
      <IVTSection />
      <YellowCTASection />
      <RWASection />
      <VisionSection />
      <SolanaSection />
      <ContactSection />
      <Footer />
      <div className="sticky-spacer" />
      <StickyBar />
    </>
  )
}
