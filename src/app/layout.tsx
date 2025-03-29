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
  title: 'OECUS | Electronic Music Collective',
  description: 'OECUS is an electronic music collective based in the UK.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover',
  themeColor: '#000000',
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Force page to top immediately
            if (window.location.hash) {
              window.location.hash = '';
            }
            window.scrollTo(0, 0);
            
            // Disable existing scroll behaviors temporarily
            const originalScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = 'auto';
            
            // Force to top again after content loads
            document.addEventListener('DOMContentLoaded', function() {
              window.scrollTo(0, 0);
              
              // Restore scroll behavior after a delay
              setTimeout(() => {
                document.documentElement.style.scrollBehavior = originalScrollBehavior;
              }, 1000);
            });
          `
        }} />
      </head>
      <body className={`${ppMori.className}`}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 