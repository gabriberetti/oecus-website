'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  SpeakerWaveIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import ImageCarousel from '@/components/ImageCarousel'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/oecus/',
    label: '@oecus'
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/oecusmusic',
    label: '@oecusmusic'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@oecusmusic',
    label: '@oecusmusic'
  },
  {
    name: 'Bandcamp',
    href: 'https://oecus.bandcamp.com/',
    label: '@oecus'
  },
  {
    name: 'Resident Advisor',
    href: 'https://ra.co/promoters/59465',
    label: '@oecus'
  }
]

const features = [
  {
    name: 'Podcast Series',
    description: 'Weekly curated mixes featuring the finest in underground electronic music.',
    href: '/podcasts',
    icon: SpeakerWaveIcon,
  },
  {
    name: 'Premiere Service',
    description: 'Showcase your unreleased tracks to our dedicated audience of electronic music enthusiasts.',
    href: '/premieres',
    icon: BoltIcon,
  },
  {
    name: 'Mastering Service',
    description: 'Professional mastering services tailored specifically for electronic music producers.',
    href: '/mastering',
    icon: AdjustmentsHorizontalIcon,
  },
]

const carouselImages = [
  {
    src: '/images/stamp.jpg',
    alt: 'OECUS Stamp'
  },
  {
    src: '/images/hug.jpg',
    alt: 'HUG - OECUS Event'
  },
  {
    src: '/images/oecus-kiss.jpg',
    alt: 'KISS - OECUS Event'
  },
  {
    src: '/images/oecus,lvh.jpg',
    alt: 'LVH - OECUS Event'
  },
  {
    src: '/images/oecus-asec.jpg',
    alt: 'ASEC - OECUS Event'
  },
  {
    src: '/images/pipe.jpg',
    alt: 'PIPE - OECUS Event'
  }
]

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute h-full w-full object-cover"
          style={{ position: 'fixed' }}
        >
          <source src="/website_background.mov" type="video/mp4" />
          <source src="/website_background.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Background gradient - reduced opacity for video overlay */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1a1a1a] to-[#333333] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-44 sm:pt-48 md:pt-52">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="sr-only">
              OECUS - A collective of electronic music enthusiasts, curating and promoting underground sounds through podcasts, premieres, and events.
            </h1>
          </motion.div>
        </div>

        {/* Featured Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-7xl pb-24 sm:pb-28 md:pb-32"
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group h-full"
              >
                <Link href={feature.href} className="block h-full">
                  <div className="rounded-2xl border border-white/10 p-6 sm:p-8 backdrop-blur bg-white/5 transition-colors group-hover:bg-white/10 shadow-lg h-full flex flex-col">
                    <div className="flex items-start gap-x-4 mb-4 sm:mb-6">
                      <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white/80 flex-shrink-0" aria-hidden="true" />
                      <h2 className="text-lg sm:text-2xl font-semibold tracking-wide">{feature.name}</h2>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-7 tracking-wide flex-grow">{feature.description}</p>
                    <div className="mt-6 sm:mt-8 flex items-center text-sm sm:text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
                      Learn more
                      <svg
                        className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Section with Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-7xl py-12 sm:py-20 bg-black/80 backdrop-blur-sm rounded-2xl border border-white/10 mb-12 sm:mb-20"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
                A pioneering force in underground electronic music since 2015, dedicated to discovering and promoting innovative and talented artists.
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl mb-10 sm:mb-16">
              <ImageCarousel images={carouselImages} />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
                  Founded in 2015, OECUS began as a collective, quickly establishing itself as a significant force in the underground electronic music scene.
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
                  From 2018 to 2022, OECUS expanded its influence with an artist management and booking agency, representing talented artists who are now established players in the scene.
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
                  For more than 10 years, OECUS has been hosting its own event in various clubs locally and internationally, continuing to create memorable experiences and pushing talents for its growing community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer with social links */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-7xl"
        >
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-3"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
} 