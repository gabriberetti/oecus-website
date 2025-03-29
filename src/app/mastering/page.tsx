'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/SharedLayout'

const features = [
  {
    name: 'Professional Equipment',
    description: 'State-of-the-art analog and digital tools for pristine audio quality.',
  },
  {
    name: 'Genre Expertise',
    description: 'Specialized in electronic music genres, understanding the unique requirements of each style.',
  },
  {
    name: 'Quick Turnaround',
    description: 'Fast delivery without compromising on quality, typically within 48-72 hours.',
  },
]

// Define the button classes consistent with the rest of the site
const buttonClasses = "rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-opacity-80 hover:text-black focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] min-w-[44px] inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

export default function MasteringPage() {
  return (
    <SharedLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center pt-8 sm:pt-12 pb-12 sm:pb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Mastering Service
          </h1>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            Take your music to the next level with our professional mastering services, tailored specifically for electronic music producers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="text-lg font-semibold leading-7 text-white">{feature.name}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-20 flex justify-center"
        >
          <a
            href="mailto:oecus.info@gmail.com"
            className={buttonClasses}
            aria-label="Contact us to request mastering services"
          >
            Request Mastering
          </a>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 