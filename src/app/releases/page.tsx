'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ReleasesPage() {
  return (
    <div className="min-h-screen py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Releases</h1>
          <p className="text-base leading-8 text-gray-300">
            Our curated collection of electronic music releases, showcasing emerging and established artists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="450" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1130094649&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="hover:opacity-95 transition-opacity"
            ></iframe>
            <div className="text-base text-gray-400 mt-3 font-light" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              <a href="https://soundcloud.com/oecusmusic" title="OECUS" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">OECUS</a> · <a href="https://soundcloud.com/oecusmusic/sets/oecus-release-series" title="Release Series" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">Release Series</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 