'use client';

import { PhantomProvider, darkTheme } from '@phantom/react-sdk';
import { AddressType } from '@phantom/browser-sdk';

export function PhantomProviders({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PHANTOM_APP_ID;

  if (!appId) return <>{children}</>;

  const redirectUrl = typeof window === 'undefined'
    ? undefined
    : `${window.location.origin}/auth/callback`;

  return (
    <PhantomProvider
      config={{
        providers: ['google', 'apple', 'injected'],
        appId,
        addressTypes: [AddressType.solana],
        ...(redirectUrl ? { authOptions: { redirectUrl } } : {}),
      }}
      theme={darkTheme}
      appName="Iron Vault"
    >
      {children}
    </PhantomProvider>
  );
}
