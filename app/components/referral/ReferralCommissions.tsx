import Image from 'next/image'

export default function ReferralCommissions() {
  return (
    <section style={{ background: '#000', padding: '0 20px 32px' }}>
      <div style={{ maxWidth: 660, margin: '0 auto' }}>
        <Image
          src="/16.webp"
          alt="Iron Vault Token Referral Commissions — Friends $5,500 | Clients $8,200 | Associates $3,750 | Partners $6,400 | Family $2,150"
          width={660}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        />
      </div>
    </section>
  )
}
