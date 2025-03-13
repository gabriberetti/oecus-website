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

export default function MasteringPage() {
  return (
    <SharedLayout>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Professional Mastering
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Take your music to the next level with our professional mastering services, tailored specifically for electronic music producers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-20 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
          className="mt-20 flex justify-center"
        >
          <Link
            href="mailto:mastering@oecus.com"
            className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 min-h-[44px] min-w-[44px] inline-flex items-center"
          >
            Request Mastering
          </Link>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 