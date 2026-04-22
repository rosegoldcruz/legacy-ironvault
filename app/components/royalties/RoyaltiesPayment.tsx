import Image from 'next/image'

export default function RoyaltiesPayment() {
  return (
    <>
      <section style={{ background: '#000', padding: '20px 20px 40px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <Image
            src="/2.webp"
            alt="Iron Vault Token — Accepted Payment Methods — Cash App, Venmo, Zelle, Crypto, Cashier's Check"
            width={660}
            height={480}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
          />
        </div>
      </section>
      <section style={{ background: '#000', padding: '0 20px 40px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <Image
            src="/5.webp"
            alt="Funding Options May Be Available O.A.C. — Iron Vault Token shield"
            width={660}
            height={480}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
          />
        </div>
      </section>
    </>
  )
}
