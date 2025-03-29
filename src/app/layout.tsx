import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'

const ppMori = localFont({
  src: '../../public/fonts/PPMori-Regular.woff',
  variable: '--font-ppmori',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OECUS',
  description: 'OECUS - Music Collective, Podcast Series, and Mastering Services',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-128-inverted.png', sizes: '128x128', type: 'image/png' },
      { url: '/icon-64-inverted.png', sizes: '64x64', type: 'image/png' }
    ],
    apple: [
      { url: '/icon-128-inverted.png', sizes: '128x128', type: 'image/png' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ppMori.className}`}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 