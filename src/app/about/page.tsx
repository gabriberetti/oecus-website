'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from '@/components/ImageCarousel'
import SharedLayout from '@/components/SharedLayout'

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

export default function AboutPage() {
  return (
    <SharedLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center pt-8 sm:pt-12 pb-12 sm:pb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            About
          </h1>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4">
            A pioneering force in underground electronic music since 2015, dedicated to discovering and promoting innovative and talented artists.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Our Story</h2>
              <p className="text-base leading-7 sm:leading-8 text-gray-300">
                Founded in 2015, OECUS began as a collective, quickly establishing itself as a significant force in the underground electronic music scene. Known for its innovative approach to music, the collective gained recognition through its successful podcasts, releases, and events.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Artist Management</h2>
              <p className="text-base leading-7 sm:leading-8 text-gray-300">
                From 2018 to 2022, OECUS expanded its influence with an artist management and booking agency, representing talented artists who are now established players in the scene. During this time, OECUS solidified its role as both a curator of cutting-edge music and a key promoter of emerging talent.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Events & Community</h2>
              <p className="text-base leading-7 sm:leading-8 text-gray-300">
                For more than 10 years, OECUS has been hosting its own events in various clubs locally and internationally, continuing to create memorable experiences and pushing talents for its growing community.
              </p>
            </div>

            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <ImageCarousel images={carouselImages} />
            </motion.div>

            {/* Contact Section */}
            <div className="pt-6 sm:pt-8 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3 sm:mb-4">Get in Touch</h2>
              <p className="text-base text-gray-300 mb-4 sm:mb-6">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>
              <a
                href="mailto:oecus.info@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 sm:px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SharedLayout>
  )
} 