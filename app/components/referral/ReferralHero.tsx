import Image from 'next/image'
import VideoPlayer from '../VideoPlayer'

const referralCards = [
  {
    src: '/16.webp',
    alt: 'Iron Vault Token Referral Commissions — Friends $5,500, Clients $8,200, Associates $3,750, Partners $6,400, Family $2,150',
  },
  {
    src: '/17.webp',
    alt: 'Helping Others Is Financially Rewarding and Mentally Rewarding — Iron Vault Token',
  },
  {
    src: '/15.webp',
    alt: 'IVT MEDIA GROUP and Iron Vault Token — Earn 10% Commission On All Referral Purchases',
  },
]

export default function ReferralHero() {
  return (
    <section className="referral-hero-section">
      <h1 className="referral-hero-title">
        IVT MEDIA GROUP Referral Program
      </h1>
      <div className="referral-hero-grid">
        <div className="referral-video-wrap">
          <VideoPlayer src="/referral.mp4" />
        </div>
        <div className="referral-card-stack">
          {referralCards.map((card, index) => (
            <Image
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={660}
              height={500}
              priority={index === 0}
              className="referral-card-image"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
