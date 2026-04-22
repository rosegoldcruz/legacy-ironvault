import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const montserrat = Montserrat({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-opensans',
})

export const metadata: Metadata = {
  title: 'Iron Vault Token | Real Estate & Crypto | Powered by Solana',
  description: 'Iron Vault Token — Real Estate & Crypto powered by Solana',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
