'use client';

import { ConnectBox } from '@phantom/react-sdk';

export default function PhantomAuthCallback() {
  const enabled = Boolean(process.env.NEXT_PUBLIC_PHANTOM_APP_ID);

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#070707', color: '#fff', padding: 24 }}>
      <section style={{ width: 'min(520px, 100%)', textAlign: 'center' }}>
        <p style={{ color: '#b89246', letterSpacing: '.12em', fontWeight: 700, fontSize: 12 }}>IRON VAULT × PHANTOM</p>
        <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 48, margin: '8px 0 18px' }}>Secure wallet connection</h1>
        {enabled ? (
          <ConnectBox maxWidth="520px" appName="Iron Vault" />
        ) : (
          <p style={{ color: '#a3a3a3', lineHeight: 1.7 }}>Phantom social login is not active until the production Phantom Portal App ID is configured for this deployment. Direct extension connection remains available from the docs.</p>
        )}
      </section>
    </main>
  );
}
