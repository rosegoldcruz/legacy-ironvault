'use client';

import { useEffect, useMemo, useState } from 'react';
import { docs, navGroups, token, type DocStatus } from './data';
import { PhantomWalletButton } from '../components/PhantomWalletButton';

const statusLabel: Record<DocStatus, string> = {
  LIVE: 'Live',
  PROPOSED: 'Proposed',
  DEVELOPMENT: 'In development',
  FUTURE: 'Future',
};

function CopyValue({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button className="ivdocs-copy" onClick={copy} title={`Copy ${label ?? 'value'}`}>
      <code>{value}</code>
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export default function DocsClient() {
  const [query, setQuery] = useState('');
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('welcome');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return docs
      .filter((d) => [d.title, d.summary, ...d.body, ...(d.bullets ?? [])].join(' ').toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        document.querySelector<HTMLInputElement>('.ivdocs-search-wrap input')?.focus();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: '-20% 0px -68% 0px', threshold: [0, 0.1, 0.5, 1] });

    docs.forEach((d) => {
      const node = document.getElementById(d.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  function jump(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    setQuery('');
    setMenu(false);
  }

  return (
    <div className="ivdocs-app">
      <header className="ivdocs-topbar">
        <a href="/" className="ivdocs-brand" aria-label="Iron Vault home">
          <span className="ivdocs-brand-mark">IV</span>
          <span>
            <strong>IRON VAULT</strong>
            <small>DOCUMENTATION</small>
          </span>
        </a>

        <div className="ivdocs-search-wrap">
          <span className="ivdocs-search-icon">⌕</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search documentation…" aria-label="Search documentation" />
          <kbd>⌘ K</kbd>
          {searchResults.length > 0 && (
            <div className="ivdocs-search-results">
              {searchResults.map((result) => (
                <button key={result.id} onClick={() => jump(result.id)}>
                  <span>{result.label}</span>
                  <strong>{result.title}</strong>
                  <small>{result.summary}</small>
                </button>
              ))}
            </div>
          )}
        </div>

        <nav className="ivdocs-actions">
          <a href="https://ironvaulttoken.com" target="_blank" rel="noreferrer">Website ↗</a>
          <PhantomWalletButton />
          <button className="ivdocs-menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle documentation navigation">☰</button>
        </nav>
      </header>

      <aside className={`ivdocs-sidebar ${menu ? 'open' : ''}`}>
        <div className="ivdocs-sidebar-scroll">
          {navGroups.map((group) => (
            <section key={group.label} className="ivdocs-nav-group">
              <h3>{group.label}</h3>
              {group.items.map((item) => (
                <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => jump(item.id)}>
                  <span>{item.title}</span>
                  {item.status && item.status !== 'LIVE' ? <i>{statusLabel[item.status]}</i> : null}
                </button>
              ))}
            </section>
          ))}
        </div>
      </aside>

      <main className="ivdocs-main">
        <section className="ivdocs-hero">
          <div>
            <p className="ivdocs-overline">IRON VAULT / ECOSYSTEM DOCUMENTATION</p>
            <h1>Documentation built for verification, not hype.</h1>
            <p className="ivdocs-lead">Understand Vaulted Academy, verify IV-SOL, inspect the token mechanics, connect a wallet, and separate what is live from what is proposed.</p>
            <div className="ivdocs-hero-actions">
              <button onClick={() => jump('token-overview')}>Verify IV-SOL</button>
              <button className="secondary" onClick={() => jump('phantom-connect')}>Phantom integration</button>
            </div>
          </div>

          <div className="ivdocs-token-card">
            <span className="ivdocs-live-dot"><i /> ON-CHAIN TOKEN</span>
            <h2>{token.symbol}</h2>
            <dl>
              <div><dt>Network</dt><dd>{token.chain}</dd></div>
              <div><dt>Standard</dt><dd>{token.standard}</dd></div>
              <div><dt>Supply</dt><dd>250B</dd></div>
              <div><dt>Decimals</dt><dd>{token.decimals}</dd></div>
            </dl>
            <small>Official mint</small>
            <CopyValue value={token.mint} label="mint address" />
          </div>
        </section>

        <div className="ivdocs-fast-path">
          <button onClick={() => jump('academy')}>
            <span>01</span><strong>Vaulted Academy</strong><small>Education, roles, progress and eligibility</small>
          </button>
          <button onClick={() => jump('token-overview')}>
            <span>02</span><strong>IV-SOL</strong><small>Supply, tokenomics, fees and controls</small>
          </button>
          <button onClick={() => jump('phantom-connect')}>
            <span>03</span><strong>Wallet Connection</strong><small>Phantom Connect and non-custodial access</small>
          </button>
        </div>

        <div className="ivdocs-content">
          {docs.map((doc) => (
            <article id={doc.id} key={doc.id} className="ivdocs-article">
              <div className="ivdocs-article-head">
                <span className="ivdocs-section-label">{doc.label}</span>
                {doc.status ? <span className={`ivdocs-status ${doc.status.toLowerCase()}`}>{statusLabel[doc.status]}</span> : null}
              </div>
              <h2>{doc.title}</h2>
              <p className="ivdocs-summary">{doc.summary}</p>
              {doc.body.map((p) => <p key={p}>{p}</p>)}

              {doc.bullets ? (
                <ul>{doc.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              ) : null}

              {doc.table ? (
                <div className="ivdocs-table-wrap">
                  <table>
                    <thead><tr>{doc.table.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                      {doc.table.rows.map((row, idx) => (
                        <tr key={idx}>{row.map((cell, cidx) => <td key={cidx}>{cell === token.mint ? <CopyValue value={cell} label="mint address" /> : cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {doc.callout ? (
                <div className={`ivdocs-callout ${doc.callout.kind}`}>
                  <strong>{doc.callout.title}</strong>
                  <p>{doc.callout.text}</p>
                </div>
              ) : null}

              {doc.id === 'phantom-connect' ? (
                <div className="ivdocs-phantom-panel">
                  <div>
                    <span className="ivdocs-phantom-mark large">P</span>
                    <div>
                      <strong>Connect without handing us your keys.</strong>
                      <p>Use Phantom to connect a Solana wallet. The production Portal integration adds Google and Apple embedded wallets after the Iron Vault domain is verified with Phantom.</p>
                    </div>
                  </div>
                  <PhantomWalletButton />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </main>

      <aside className="ivdocs-toc">
        <strong>ON THIS PAGE</strong>
        {docs.slice(0, 8).map((d) => (
          <button key={d.id} className={active === d.id ? 'active' : ''} onClick={() => jump(d.id)}>{d.title}</button>
        ))}
        <div className="ivdocs-toc-divider" />
        <a href={`https://solscan.io/token/${token.mint}`} target="_blank" rel="noreferrer">View on Solscan ↗</a>
        <a href="https://member.ironvaulttoken.com" target="_blank" rel="noreferrer">Open Academy ↗</a>
      </aside>
    </div>
  );
}
