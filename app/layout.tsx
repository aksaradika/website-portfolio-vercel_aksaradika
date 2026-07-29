import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Radika Afwa Bimalaksa | Cybersecurity Researcher & Bug Hunter',
  description: 'Researcher & Bug Hunter at HackerOne. Cybersecurity specialist with expertise in CTF, Bug Bounty Programs, and pentesting. Indonesian delegate for BRICS 2026.',
  generator: 'v0.app',
  keywords: [
    'Cybersecurity',
    'Bug Bounty',
    'CTF',
    'Penetration Testing',
    'HackerOne',
    'Security Researcher',
    'Web Development',
  ],
  openGraph: {
    title: 'Muhammad Radika Afwa Bimalaksa | Cybersecurity Researcher',
    description: 'Researcher & Bug Hunter at HackerOne. Cybersecurity specialist with expertise in CTF and Bug Bounty Programs.',
    type: 'website',
    url: 'https://radika.dev',
    siteName: 'Radika Portfolio',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
