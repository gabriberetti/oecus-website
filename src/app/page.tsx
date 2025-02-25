'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RadioIcon, SparklesIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'

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
    icon: RadioIcon,
  },
  {
    name: 'Premiere Service',
    description: 'Showcase your unreleased tracks to our dedicated audience of electronic music enthusiasts.',
    href: '/premieres',
    icon: SparklesIcon,
  },
  {
    name: 'Mastering',
    description: 'Professional mastering services tailored specifically for electronic music producers.',
    href: '/mastering',
    icon: MusicalNoteIcon,
  },
]

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1a1a1a] to-[#333333] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-8">
              OECUS
            </h1>
            <p className="text-base leading-8 text-gray-300 mb-12 tracking-wide max-w-xl mx-auto">
              A collective of electronic music enthusiasts, curating and promoting underground sounds through podcasts, premieres, and events.
            </p>
          </motion.div>
        </div>

        {/* Featured Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-7xl pb-32"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <Link href={feature.href} className="block min-h-[44px]">
                  <div className="rounded-2xl border border-white/10 p-8 backdrop-blur bg-white/5 transition-colors group-hover:bg-white/10 shadow-lg">
                    <div className="flex items-center gap-x-4 mb-6">
                      <feature.icon className="h-8 w-8 text-white/80" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold tracking-wide">{feature.name}</h2>
                    </div>
                    <p className="text-base text-gray-400 leading-7 tracking-wide min-h-[3em]">{feature.description}</p>
                    <div className="mt-8 flex items-center text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
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

        {/* Footer with social links */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-7xl pb-12"
        >
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-400 hover:text-white transition-colors inline-flex items-center min-h-[44px] px-3"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1a1a1a] to-[#333333] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
} 