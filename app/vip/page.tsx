import Navbar from '../components/Navbar'
import VipHero from '../components/vip/VipHero'
import VipVideo from '../components/vip/VipVideo'
import PositionYourself from '../components/vip/PositionYourself'
import AmplifySection from '../components/vip/AmplifySection'
import PumpCardGrid from '../components/vip/PumpCardGrid'
import BottomLine from '../components/vip/BottomLine'
import CoinPumpsSection from '../components/vip/CoinPumpsSection'
import CommunitySection from '../components/vip/CommunitySection'
import TotalSupplySection from '../components/vip/TotalSupplySection'

export const metadata = {
  title: 'VIP/Partner Pump | Iron Vault Token',
}

export default function VipPage() {
  return (
    <>
      <Navbar />
      <VipHero />
      <VipVideo />
      <PositionYourself />
      <AmplifySection />
      <PumpCardGrid />
      <BottomLine />
      <CoinPumpsSection />
      <CommunitySection />
      <TotalSupplySection />
    </>
  )
}
