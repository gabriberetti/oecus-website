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
  title: 'OECUS | Electronic Music Collective & Record Label',
  description: 'OECUS is an innovative electronic music collective and record label based in Berlin, specializing in techno, ambient and experimental electronic music. Explore our releases, podcasts, mastering services and premieres.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover',
  themeColor: '#000000',
  keywords: 'OECUS, electronic music, techno, music collective, record label, podcasts, music premieres, audio mastering, underground music',
  openGraph: {
    title: 'OECUS | Electronic Music Collective & Record Label',
    description: 'OECUS is an innovative electronic music collective and record label based in Berlin, specializing in techno and experimental electronic music.',
    url: 'https://oecus.com',
    siteName: 'OECUS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/oecus-social.jpg',
        width: 1200,
        height: 630,
        alt: 'OECUS Electronic Music Collective',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OECUS | Electronic Music Collective & Record Label',
    description: 'Innovative electronic music collective and record label based in Berlin, specializing in techno and experimental electronic music',
    images: ['/images/oecus-social.jpg'],
  },
  alternates: {
    canonical: 'https://oecus.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="BQ2JK9e4CWSLuN9PPdE6HsXh6pwhY4z3lH2rnb5IL08" />
        {/* Schema.org structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "OECUS",
              "url": "https://oecus.com",
              "logo": "https://oecus.com/images/logo.png",
              "description": "OECUS is an innovative electronic music collective and record label based in Berlin, specializing in techno, ambient and experimental electronic music.",
              "genre": ["Electronic", "Techno", "Experimental", "Ambient"],
              "sameAs": [
                "https://www.instagram.com/oecus/",
                "https://soundcloud.com/oecusmusic",
                "https://www.youtube.com/@oecusmusic",
                "https://oecus.bandcamp.com/",
                "https://ra.co/promoters/59465"
              ]
            })
          }}
        />
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