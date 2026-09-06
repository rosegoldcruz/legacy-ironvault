'use client';

import { useEffect, useMemo, useState } from 'react';
import { BrowserSDK, AddressType } from '@phantom/browser-sdk';
import { useAccounts, useDisconnect, useModal, usePhantom } from '@phantom/react-sdk';

function shortAddress(value: string) {
  return `${value.slice(0, 4)}…${value.slice(-4)}`;
}

function FullPhantomConnect() {
  const { open } = useModal();
  const { isConnected, isLoading } = usePhantom();
  const accounts = useAccounts();
  const { disconnect, isDisconnecting } = useDisconnect();
  const address = accounts?.find((a) => a.addressType === AddressType.solana)?.address;

  if (isConnected && address) {
    return (
      <button className="ivdocs-wallet ivdocs-wallet-connected" onClick={() => disconnect()} disabled={isDisconnecting} title={address}>
        <span className="ivdocs-wallet-dot" />
        {isDisconnecting ? 'Disconnecting…' : shortAddress(address)}
      </button>
    );
  }

  return (
    <button className="ivdocs-wallet" onClick={open} disabled={isLoading}>
      <span className="ivdocs-phantom-mark">P</span>
      {isLoading ? 'Loading wallet…' : 'Connect Phantom'}
    </button>
  );
}

function InjectedFallback() {
  const [address, setAddress] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sdk = useMemo(() => new BrowserSDK({
    providers: ['injected'],
    addressTypes: [AddressType.solana],
  }), []);

  useEffect(() => () => { try { void sdk.disconnect(); } catch {} }, [sdk]);

  async function connect() {
    setBusy(true);
    setError(null);
    try {
      const result = await sdk.connect({ provider: 'injected' });
      const solana = result.addresses.find((a) => a.addressType === AddressType.solana);
      setAddress(solana?.address ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Phantom connection failed');
    } finally {
      setBusy(false);
    }
  }

  async function disconnect() {
    await sdk.disconnect();
    setAddress(null);
  }

  if (address) {
    return (
      <button className="ivdocs-wallet ivdocs-wallet-connected" onClick={disconnect} title={address}>
        <span className="ivdocs-wallet-dot" /> {shortAddress(address)}
      </button>
    );
  }

  return (
    <div className="ivdocs-wallet-wrap">
      <button className="ivdocs-wallet" onClick={connect} disabled={busy} title="Direct Phantom extension connection">
        <span className="ivdocs-phantom-mark">P</span>
        {busy ? 'Connecting…' : 'Connect Phantom'}
      </button>
      {error ? <span className="ivdocs-wallet-error" role="status">{error}</span> : null}
    </div>
  );
}

export function PhantomWalletButton() {
  return process.env.NEXT_PUBLIC_PHANTOM_APP_ID ? <FullPhantomConnect /> : <InjectedFallback />;
}
