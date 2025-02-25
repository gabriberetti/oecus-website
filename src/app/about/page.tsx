'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">About OECUS</h1>
          <p className="text-base leading-8 text-gray-300">
            A pioneering force in underground electronic music since 2015, dedicated to discovering and promoting innovative and talented artists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-20 max-w-2xl"
        >
          <div className="space-y-8">
            <p className="text-base leading-8 text-gray-300">
              Founded in 2015, OECUS began as a collective, quickly establishing itself as a significant force in the underground electronic music scene. Known for its innovative approach to music, the collective gained recognition through its successful podcasts, releases, and events.
            </p>
            <p className="text-base leading-8 text-gray-300">
              From 2018 to 2022, OECUS expanded its influence with an artist management and booking agency, representing talented artists who are now established players in the scene. During this time, OECUS solidified its role as both a curator of cutting-edge music and a key promoter of emerging talent.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 max-w-2xl"
        >
          <p className="text-base leading-8 text-gray-300">
            Since 2024, OECUS has been hosting its own event, New Faces, at the renowned Tresor club, continuing to create memorable experiences and pushing talents for its growing community.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 