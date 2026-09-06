import type { Metadata } from 'next';
import DocsClient from './DocsClient';
import './docs.css';

export const metadata: Metadata = {
  title: 'Iron Vault Documentation | IV-SOL & Vaulted Academy',
  description: 'Official Iron Vault documentation for Vaulted Academy, IV-SOL token mechanics, security, Phantom wallet connection, roadmap and ecosystem policies.',
};

export default function DocsPage() {
  return <DocsClient />;
}
