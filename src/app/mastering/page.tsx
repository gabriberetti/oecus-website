'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
    <div className="min-h-screen py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Professional Mastering Services</h1>
          <p className="mt-6 text-base leading-8 text-gray-300">
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
                <dt className="text-lg font-semibold leading-7">{feature.name}</dt>
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
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-[44px] min-w-[44px] inline-flex items-center"
          >
            Request Mastering
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 