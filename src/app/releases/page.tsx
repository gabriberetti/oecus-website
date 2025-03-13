'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SharedLayout from '@/components/SharedLayout'
import dynamic from 'next/dynamic'

// Define the Release type
interface Release {
  id: string
  title: string
  artist: string
  releaseDate: string
}

// Component for client-side only rendering of Bandcamp embeds
const BandcampEmbed = ({ release }: { release: Release }) => {
  const [isLoading, setIsLoading] = useState(true)

  // Set a timeout to force-show the iframe even if onLoad doesn't fire
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds max loading time
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm border border-white/10 h-full">
      {isLoading && (
        <div className="flex items-center justify-center h-[600px] bg-black/30 absolute top-0 left-0 w-full z-10">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-16 w-16 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading release...</p>
          </div>
        </div>
      )}
      <iframe
        style={{ border: 0, width: '100%', height: '600px' }}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${release.id}/size=large/bgcol=181818/linkcol=ffffff/artwork=large/tracklist=true/transparent=true/`}
        seamless
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        title={`${release.title} by ${release.artist}`}
        allow="autoplay"
      >
        <a href={`https://oecus.bandcamp.com/album/${release.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}>
          {release.title} by {release.artist}
        </a>
      </iframe>
    </div>
  )
}

// Client-side only version of the component
const ClientOnlyBandcampEmbed = dynamic(() => Promise.resolve(BandcampEmbed), {
  ssr: false,
})

// Releases from https://oecus.bandcamp.com/
const releases: Release[] = [
  {
    id: "1768721969",
    title: "OCSDGTL018 | VA",
    artist: "Conntex, Kabay, Mara Menace, Avant.OCS, ASEC, Thimo Konings, Tapefeed, Machine Movement",
    releaseDate: "2024"
  },
  {
    id: "1502061307",
    title: "OCSDGTL017 | VA",
    artist: "Toru Ikemoto, Sira, Takt, Jonas Xenon, Avant.OCS, ASEC, Rorschack, Marthial",
    releaseDate: "2024"
  },
  {
    id: "3258072447",
    title: "Adjustment",
    artist: "FVKS",
    releaseDate: "2023"
  },
  {
    id: "3843317206",
    title: "OCS002 | VA",
    artist: "Avant.OCS, Red Rooms, Maōh, Uväll",
    releaseDate: "2023"
  },
  {
    id: "3341855707",
    title: "Prototype IV",
    artist: "Avant.OCS",
    releaseDate: "2023"
  },
  {
    id: "1045077700",
    title: "Losing Ground",
    artist: "Avant.OCS, Red Rooms",
    releaseDate: "2023"
  },
  {
    id: "1180106033",
    title: "Reconnaissance",
    artist: "ASEC, Delano Legito",
    releaseDate: "2023"
  },
  {
    id: "2661352010",
    title: "Prototype II",
    artist: "Avant.OCS",
    releaseDate: "2023"
  },
  {
    id: "3129754616",
    title: "Sudden Squall",
    artist: "Avant.OCS x Uväll",
    releaseDate: "2023"
  },
  {
    id: "1542127728",
    title: "Prototype",
    artist: "Avant.OCS",
    releaseDate: "2023"
  },
  {
    id: "3243617427",
    title: "OCSDGTL009 | VA",
    artist: "Augusto Taito, dc11, Avant.OCS, Marsch, Rony Group, JSPRV35, Beau Didier, Coyu",
    releaseDate: "2022"
  },
  {
    id: "1771762710",
    title: "Falco",
    artist: "USAW",
    releaseDate: "2022"
  },
  {
    id: "157069412",
    title: "OCSDGTL007 | VA",
    artist: "ANNĒ, Maōh, Monovsn, Red Rooms, Tensic, USAW, Uväll",
    releaseDate: "2022"
  },
  {
    id: "4113753170",
    title: "Distanza",
    artist: "USAW",
    releaseDate: "2022"
  },
  {
    id: "2347960438",
    title: "OCSDGTL005 | VA",
    artist: "Egotot, LKY, Arthur Robert, Monovsn, SLV, Jacobworld, Dinamite, Alarico, Franz Jäger, Lobster",
    releaseDate: "2021"
  },
  {
    id: "4068545539",
    title: "Bad Encounters",
    artist: "Monovsn",
    releaseDate: "2021"
  },
  {
    id: "2402408545",
    title: "OCSDGTL003 | VA",
    artist: "Anthony Tring, Kameliia, Monovsn, ASEC, Oxygeno",
    releaseDate: "2021"
  },
  {
    id: "2371288105",
    title: "OCSDGTL002 | VA",
    artist: "Alderaan, SLV, Monovsn, Öspiel, Felicie",
    releaseDate: "2021"
  },
  {
    id: "1814709249",
    title: "OCSDGTL001 | VA",
    artist: "Monovsn, Killawatt, Lawrence Kurt, Giordano, ASEC",
    releaseDate: "2020"
  },
  {
    id: "2967632602",
    title: "Chainsaw Massacre [OCS001]",
    artist: "Lawrence Kurt & Monovsn",
    releaseDate: "2019"
  }
]

export default function ReleasesPage() {
  // No need for showAll state anymore
  const [displayedReleases, setDisplayedReleases] = useState<Release[]>([])
  
  // Initialize with all releases on component mount
  useEffect(() => {
    setDisplayedReleases(releases)
  }, [])

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
            Releases
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Our curated collection of electronic music releases, showcasing emerging and established artists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedReleases.map((release, index) => (
              <motion.div
                key={release.id + release.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                className="relative h-full"
              >
                <ClientOnlyBandcampEmbed release={release} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 