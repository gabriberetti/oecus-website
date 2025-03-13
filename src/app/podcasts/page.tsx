'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SharedLayout from '@/components/SharedLayout'

const milestoneEpisodes = [
  {
    number: 400,
    title: "Podcast 400 // KR!Z",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1806071358&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 400 // KR!Z",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-400-krz",
    description: "A landmark episode featuring a special guest mix from KR!Z celebrating our journey through underground electronic music."
  },
  {
    number: 300,
    title: "Podcast 300 // NESS",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1311927616&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 300 // NESS",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-300-ness",
    description: "Three hundred episodes of cutting-edge electronic music, featuring a special mix by NESS."
  },
  {
    number: 200,
    title: "Podcast 200 // AMOTIK",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841058074&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 200 // AMOTIK",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-200-amotik",
    description: "A milestone episode that redefined our musical direction, featuring AMOTIK."
  },
  {
    number: 100,
    title: "Podcast 100 // EMMANUEL",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427581234&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 100 // EMMANUEL",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-100-emmanuel",
    description: "Where it all began to take shape - our first major milestone featuring EMMANUEL."
  },
]

export default function PodcastsPage() {
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
            Podcast Series
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Exploring the depths of electronic music through carefully curated mixes from artists around the globe.
          </p>
        </motion.div>

        {/* Full Playlist */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Full Playlist</h2>
          <div className="w-full">
            <iframe 
              width="100%" 
              height="450" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/358065966&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div className="text-base text-gray-400 mt-2 font-light" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              <a href="https://soundcloud.com/oecusmusic" title="OECUS" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">OECUS</a> · <a href="https://soundcloud.com/oecusmusic/sets/podcast-series" title="Podcast Series" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">Podcast Series</a>
            </div>
          </div>
        </div>

        {/* Milestone Episodes */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {milestoneEpisodes.map((episode) => (
            <motion.article
              key={episode.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="w-full">
                <h3 className="mt-3 text-xl font-semibold leading-6">
                  {episode.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  {episode.description}
                </p>
                <div className="mt-4 w-full">
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={episode.embedUrl}
                  ></iframe>
                  <div className="text-base text-gray-400 mt-2 font-light" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    <a href="https://soundcloud.com/oecusmusic" title="OECUS" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">OECUS</a> · <a href={episode.linkUrl} title={episode.linkTitle} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">{episode.linkTitle}</a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SharedLayout>
  )
} 