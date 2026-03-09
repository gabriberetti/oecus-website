import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'

const ppMori = localFont({
  src: '../../public/fonts/PPMori-Regular.woff',
  variable: '--font-ppmori',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'OECUS Berlin 2026 | Electronic Music Collective & Record Label',
  description: 'OECUS is an innovative electronic music collective and record label based in Berlin, Germany, specializing in techno, ambient and experimental electronic music. Professional mastering services, premieres, and curated releases from the heart of Berlin\'s underground scene.',
  metadataBase: new URL('https://oecus-music.com'),
  keywords: 'OECUS Berlin, electronic music Berlin, techno Berlin, music collective Berlin, record label Berlin, audio mastering Berlin, underground music Berlin, Berlin techno scene, electronic music Germany, techno mastering service, electronic music premiere, track premiere Berlin, techno record label',
  openGraph: {
    title: 'OECUS Berlin 2026 | Electronic Music Collective & Record Label',
    description: 'Innovative electronic music collective and record label from Berlin\'s underground techno scene. Professional mastering, curated releases, and exclusive premieres.',
    url: 'https://oecus-music.com',
    siteName: 'OECUS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/OECUS Logo White.png',
        width: 500,
        height: 500,
        alt: 'OECUS Electronic Music Collective Berlin',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OECUS Berlin 2026 | Electronic Music Collective & Record Label',
    description: 'Berlin-based electronic music collective specializing in techno, ambient and experimental music. Professional mastering services and curated releases.',
    images: ['/images/OECUS Logo White.png'],
  },
  alternates: {
    canonical: 'https://oecus-music.com',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="BQ2JK9e4CWSLuN9PPdE6HsXh6pwhY4z3lH2rnb5IL08" />
        {/* Schema.org structured data - Multiple schemas for comprehensive SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "MusicGroup",
                "name": "OECUS",
                "url": "https://oecus-music.com",
                "logo": "https://oecus-music.com/images/OECUS Logo White.png",
                "description": "OECUS is an innovative electronic music collective and record label based in Berlin, specializing in techno, ambient and experimental electronic music.",
                "genre": ["Electronic", "Techno", "Experimental", "Ambient"],
                "foundingDate": "2015",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Berlin",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Berlin",
                    "addressCountry": "DE"
                  }
                },
                "sameAs": [
                  "https://www.instagram.com/oecus/",
                  "https://soundcloud.com/oecusmusic",
                  "https://www.youtube.com/@oecusmusic",
                  "https://oecus.bandcamp.com/",
                  "https://ra.co/promoters/59465"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://oecus-music.com/#localbusiness",
                "name": "OECUS",
                "description": "Electronic music collective and record label specializing in techno, ambient and experimental electronic music",
                "url": "https://oecus-music.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Berlin",
                  "addressCountry": "DE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 52.5200,
                  "longitude": 13.4050
                },
                "areaServed": [
                  { "@type": "Place", "name": "Berlin" },
                  { "@type": "Place", "name": "Worldwide" }
                ],
                "serviceType": ["Music Production", "Audio Mastering", "Record Label Services", "Track Premiere"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "oecus.info@gmail.com",
                  "contactType": "customer support"
                },
                "sameAs": [
                  "https://www.instagram.com/oecus/",
                  "https://soundcloud.com/oecusmusic",
                  "https://www.youtube.com/@oecusmusic",
                  "https://oecus.bandcamp.com/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://oecus-music.com/#website",
                "url": "https://oecus-music.com",
                "name": "OECUS",
                "description": "Official website of OECUS electronic music collective",
                "publisher": {
                  "@id": "https://oecus-music.com/#organization"
                },
                "inLanguage": "en-US"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://oecus-music.com/#organization",
                "name": "OECUS",
                "url": "https://oecus-music.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://oecus-music.com/images/OECUS Logo White.png",
                  "width": 500,
                  "height": 500
                },
                "foundingDate": "2015",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Berlin, Germany"
                },
                "description": "Innovative electronic music collective and record label founded in 2015 in Berlin",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "oecus.info@gmail.com",
                  "contactType": "customer support"
                },
                "sameAs": [
                  "https://www.instagram.com/oecus/",
                  "https://soundcloud.com/oecusmusic",
                  "https://www.youtube.com/@oecusmusic",
                  "https://oecus.bandcamp.com/",
                  "https://ra.co/promoters/59465"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://oecus-music.com/#mastering",
                "name": "Audio Mastering Service",
                "description": "Professional audio mastering for electronic music using analog and digital tools. Specialized in techno, ambient and experimental styles. Standard 48-72 hour turnaround. Discounts for EPs and albums.",
                "provider": { "@id": "https://oecus-music.com/#organization" },
                "serviceType": "Audio Mastering",
                "areaServed": { "@type": "Place", "name": "Worldwide" },
                "url": "https://oecus-music.com/#mastering",
                "offers": {
                  "@type": "Offer",
                  "description": "Professional mastering for electronic music tracks, EPs and albums",
                  "seller": { "@id": "https://oecus-music.com/#organization" }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://oecus-music.com/#premiere",
                "name": "Electronic Music Premiere Service",
                "description": "Professional premiere service for unreleased electronic music. Includes SoundCloud premiere on curated playlist, YouTube premiere on official channel, and Instagram story feature with artist tags. Over 1 million plays annually.",
                "provider": { "@id": "https://oecus-music.com/#organization" },
                "serviceType": "Music Promotion",
                "areaServed": { "@type": "Place", "name": "Worldwide" },
                "url": "https://oecus-music.com/#premieres",
                "offers": {
                  "@type": "Offer",
                  "description": "SoundCloud + YouTube + Instagram premiere package for electronic music artists",
                  "seller": { "@id": "https://oecus-music.com/#organization" }
                }
              }
            ])
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