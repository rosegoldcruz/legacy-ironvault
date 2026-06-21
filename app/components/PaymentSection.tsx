import Image from 'next/image'

export default function PaymentSection() {
  return (
    <section className="payment-section">
      <div className="payment-showcase">
        <div className="payment-side payment-side-left">
          <Image
            src="/ZELLE.jpg"
            alt="Zelle payment details"
            width={420}
            height={420}
            className="payment-side-image"
          />
        </div>

        <div className="payment-main">
          <Image
            src="/2.webp"
            alt="Iron Vault Token — Accepted Payment Methods"
            width={720}
            height={500}
            className="payment-main-image"
            priority
          />
        </div>

        <div className="payment-side payment-side-right">
          <Image
            src="/CASH.jpg"
            alt="Cash App payment details"
            width={420}
            height={420}
            className="payment-side-image"
          />
        </div>
      </div>
    </section>
  )
}
