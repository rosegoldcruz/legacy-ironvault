import Navbar from '../components/Navbar'
import RoyaltiesHero from '../components/royalties/RoyaltiesHero'
import RoyaltiesVideo from '../components/royalties/RoyaltiesVideo'
import ThreePhaseCards from '../components/royalties/ThreePhaseCards'
import EcosystemSection from '../components/royalties/EcosystemSection'
import StablecoinSection from '../components/royalties/StablecoinSection'
import RoyaltiesPayment from '../components/royalties/RoyaltiesPayment'
import RoyaltiesForm from '../components/royalties/RoyaltiesForm'

export const metadata = {
  title: 'Royalties | Iron Vault Token',
}

export default function RoyaltiesPage() {
  return (
    <>
      <Navbar />
      <RoyaltiesHero />
      <RoyaltiesVideo />
      <ThreePhaseCards />
      <EcosystemSection />
      <StablecoinSection />
      <RoyaltiesPayment />
      <RoyaltiesForm />
    </>
  )
}
