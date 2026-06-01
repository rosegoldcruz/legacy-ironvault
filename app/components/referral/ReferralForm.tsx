import Script from 'next/script'

export default function ReferralForm() {
  return (
    <>
      <div className="referral-form-embed-wrap">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/u6LiVLmeXwCEVdOTgMH2"
          className="referral-form-embed"
          id="inline-u6LiVLmeXwCEVdOTgMH2"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Referral-Form"
          data-height="718"
          data-layout-iframe-id="inline-u6LiVLmeXwCEVdOTgMH2"
          data-form-id="u6LiVLmeXwCEVdOTgMH2"
          title="Referral-Form"
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  )
}
