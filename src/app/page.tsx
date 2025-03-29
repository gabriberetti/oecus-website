'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ImageCarousel from '@/components/ImageCarousel'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

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

const masteringFeatures = [
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

const milestoneEpisodes = [
  {
    number: 400,
    title: "Podcast 400 // KR!Z",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1806071358&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 400 // KR!Z",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-400-krz",
    description: "A landmark episode featuring a special guest mix from KR!Z celebrating our journey through underground electronic music."
  },
  {
    number: 300,
    title: "Podcast 300 // NESS",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1311927616&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 300 // NESS",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-300-ness",
    description: "Three hundred episodes of cutting-edge electronic music, featuring a special mix by NESS."
  },
  {
    number: 200,
    title: "Podcast 200 // AMOTIK",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841058074&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 200 // AMOTIK",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-200-amotik",
    description: "A milestone episode that redefined our musical direction, featuring AMOTIK."
  },
  {
    number: 100,
    title: "Podcast 100 // EMMANUEL",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427581234&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    linkTitle: "Podcast 100 // EMMANUEL",
    linkUrl: "https://soundcloud.com/oecusmusic/oecus-podcast-100-emmanuel",
    description: "Where it all began to take shape - our first major milestone featuring EMMANUEL."
  },
]

interface SubmissionFormData {
  artistName: string
  label: string
  catalogCode: string
  downloadLink: string
  email: string
  additionalInfo?: string
}

interface Release {
  id: string
  title: string
  artist: string
  releaseDate: string
}

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

const BandcampEmbed = ({ release }: { release: Release }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm border border-white/10 h-full">
      <iframe
        style={{ border: 0, width: '100%', height: '600px' }}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${release.id}/size=large/bgcol=181818/linkcol=ffffff/artwork=large/tracklist=true/transparent=true/`}
        seamless
        loading="lazy"
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

const ClientOnlyBandcampEmbed = dynamic(() => Promise.resolve(BandcampEmbed), {
  ssr: false,
})

// Add this helper function before the Home component
const SlotMachineText = ({ text, onComplete }: { text: string, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState(Array(text.length).fill(" "));
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    if (animationComplete) return;
    
    // Calculate the total animation duration
    const lastLetterIndex = text.length - 1;
    const lastLetterCycles = 10 + lastLetterIndex * 3;
    const totalAnimationDuration = 400 + lastLetterIndex * 120 + (lastLetterCycles * 50);
    
    // For each letter, cycle through random letters before settling on the final one
    text.split('').forEach((targetLetter, index) => {
      // How many random letters to cycle through
      const cycles = 10 + index * 3;
      
      // Initial delay to ensure all letters are visible before animation starts
      setTimeout(() => {
        // Change each letter multiple times before settling on the final
        for (let i = 0; i < cycles; i++) {
          setTimeout(() => {
            setDisplayedText(prev => {
              const newText = [...prev];
              // If it's the last cycle, use the target letter, otherwise use a random one
              if (i === cycles - 1) {
                newText[index] = targetLetter;
              } else {
                newText[index] = alphabets[Math.floor(Math.random() * alphabets.length)];
              }
              return newText;
            });
          }, 50 * i);
        }
      }, 300 + index * 120);
    });
    
    // Call onComplete after the animation finishes
    if (onComplete) {
      setTimeout(() => {
        setAnimationComplete(true);
        onComplete();
      }, totalAnimationDuration + 200); // Add a bit of extra time to ensure all animations are done
    }
  }, [text, onComplete, animationComplete]);
  
  return (
    <div className="grid grid-cols-5 w-full max-w-[100%]" style={{ 
      gap: "0.15em"
    }}>
      {Array.from({ length: text.length }).map((_, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="flex items-center justify-center"
        >
          {displayedText[idx]}
        </motion.div>
      ))}
    </div>
  );
};

// Common button class - define once and reuse
const buttonClasses = "rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-opacity-80 hover:text-black focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] min-w-[44px] inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

// Common section class for styling and hover effects
const sectionClasses = "mx-auto max-w-7xl py-16 sm:py-24 bg-black/80 backdrop-blur-sm rounded-2xl border border-white/10 mb-16 sm:mb-24 relative overflow-hidden transition-all duration-300 group hover:bg-black/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SubmissionFormData>()

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [displayedReleases, setDisplayedReleases] = useState<Release[]>([])
  const [visibleReleasesCount, setVisibleReleasesCount] = useState(6)
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Handle video loaded event
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleCanPlay = () => {
        setTimeout(() => {
          setVideoLoaded(true);
        }, 300);
      };
      
      videoElement.addEventListener('canplay', handleCanPlay);
      
      // If video is already loaded when this effect runs
      if (videoElement.readyState >= 3) {
        setTimeout(() => {
          setVideoLoaded(true);
        }, 300);
      }
      
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);
  
  // Initialize with releases on component mount
  React.useEffect(() => {
    setDisplayedReleases(releases)
  }, [])

  const handleLoadMore = () => {
    setVisibleReleasesCount(prev => Math.min(prev + 6, releases.length))
  }

  const onSubmit = async (data: SubmissionFormData) => {
    try {
      setSubmitStatus('idle')
      setErrorMessage('')

      const response = await fetch('/api/premiere-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send submission')
      }

      setSubmitStatus('success')
      reset() // Clear form
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send submission')
    }
  }

  return (
    <div className="relative isolate">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            className="absolute h-full w-full object-cover"
            style={{ position: 'fixed' }}
          >
            <source src="/videoback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
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

      {/* Main Content Container */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-20 w-full" id="home">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto px-4 w-full"
          >
            {/* Animated background element */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.15, 
                scale: 1.1,
                rotate: 360
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-white/40"></div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.15, 
                scale: 1.1,
                rotate: -360
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-white/20"></div>
            </motion.div>
            
            <h1 className="text-[10rem] sm:text-[14rem] font-bold text-white tracking-[0.1em] relative z-10 mt-12 w-full mx-auto">
              <SlotMachineText 
                text="OECUS" 
                onComplete={() => setTitleAnimationComplete(true)}
              />
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: titleAnimationComplete ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="mt-8 text-xl sm:text-2xl text-white font-light tracking-widest uppercase relative z-10 letter-spacing-1"
            >
              ELECTRONIC MUSIC COLLECTIVE
            </motion.p>
            
            {/* Animated Scroll Down Arrow */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: titleAnimationComplete ? 1 : 0, y: [0, 10, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1 },
                y: { 
                  delay: 1,
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }
              }}
              className="mt-16 flex justify-center cursor-pointer min-h-[44px] min-w-[44px] items-center z-20 w-full"
              onClick={() => {
                document.querySelector('#podcasts')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg 
                width="44" 
                height="44" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                aria-label="Scroll down"
              >
                <path 
                  d="M19 9l-7 7-7-7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Podcasts Section */}
        <div className={sectionClasses} id="podcasts">
          {/* Moving light effect */}
          <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 ease-in-out" 
               style={{ 
                 transform: 'translateX(-100%)', 
                 animation: 'lightMove 3s ease-in-out infinite alternate',
               }}>
          </div>
          
          <div className="px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center pt-4 sm:pt-6 pb-6 sm:pb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                Podcast Series
              </h2>
              <p className="text-base leading-6 text-gray-200 max-w-2xl mx-auto">
                Exploring the depths of electronic music through carefully curated mixes from artists around the globe.
              </p>
              <div className="w-16 h-0.5 bg-white/50 mx-auto mt-3"></div>
            </motion.div>

            {/* Full Playlist */}
            <div className="mt-6 sm:mt-16 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold tracking-tight mb-6 sm:mb-8">Full Playlist</h3>
              <div className="w-full">
                <iframe 
                  width="100%" 
                  height="450" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/358065966&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </div>
            </div>

            {/* Milestone Episodes */}
            <div className="mx-auto mt-10 sm:mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
              {milestoneEpisodes.map((episode) => (
                <motion.article
                  key={episode.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                  className="flex flex-col h-full bg-black/30 rounded-lg overflow-hidden border border-white/10"
                >
                  <div className="p-6 pb-4 flex flex-col h-full">
                    <h3 className="text-xl font-semibold leading-6 text-white">
                      {episode.title}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-gray-200 mb-4 flex-grow">
                      {episode.description}
                    </p>
                    <div className="w-full rounded-md overflow-hidden">
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={episode.embedUrl.replace("%23ff5500", "%23111111")}
                      ></iframe>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Premieres Section */}
        <div className={sectionClasses} id="premieres">
          {/* Moving light effect */}
          <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 ease-in-out" 
               style={{ 
                 transform: 'translateX(-100%)', 
                 animation: 'lightMove 3s ease-in-out infinite alternate',
               }}>
          </div>
          
          <div className="px-4 sm:px-6 lg:px-8 relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center pt-4 sm:pt-6 pb-6 sm:pb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                Premieres
              </h2>
              <p className="text-base leading-6 text-gray-200 max-w-2xl mx-auto">
                Showcasing the finest unreleased electronic music. Submit your track for premiere consideration.
              </p>
              <div className="w-16 h-0.5 bg-white/50 mx-auto mt-3"></div>
            </motion.div>

            <div className="mt-6 sm:mt-14 max-w-5xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-8 text-center">Premiere Series</h3>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1128431950&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="hover:opacity-95 transition-opacity"
                ></iframe>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-8 text-center">Submit Your Track</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-0 sm:mt-6 mx-auto max-w-5xl"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-200 mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
                  We offer a professional premiere service designed to maximize exposure for your release. With over 1 million plays annually, our platform connects your music with a dedicated audience in the electronic music scene.
                </p>

                <div className="mb-10 sm:mb-14 max-w-2xl mx-auto">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-6 sm:mb-8 text-center">Premiere Package</h3>
                  <ul className="list-none space-y-5 text-gray-200 bg-black/30 p-6 sm:p-8 rounded-lg border border-white/10">
                    <li className="flex items-center space-x-4">
                      <span className="h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
                      <span className="text-base">SoundCloud Premiere – Featured on our curated Premiere Playlist</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <span className="h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
                      <span className="text-base">YouTube Premiere – Published on our official channel</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <span className="h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
                      <span className="text-base">Instagram Promotion – Story feature with artist & label tags + reshares</span>
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto bg-black/30 p-8 sm:p-10 rounded-lg border border-white/10">
                  <div>
                    <label htmlFor="artistName" className="block text-sm font-medium text-gray-300">
                      Artist Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="artistName"
                        {...register('artistName', { required: 'Artist name is required' })}
                        className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
                        placeholder="Artist name"
                      />
                      {errors.artistName && (
                        <p className="mt-1 text-sm text-red-400">{errors.artistName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="label" className="block text-sm font-medium text-gray-300">
                      Label
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="label"
                        {...register('label', { required: 'Label name is required' })}
                        className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
                        placeholder="Label name"
                      />
                      {errors.label && (
                        <p className="mt-1 text-sm text-red-400">{errors.label.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="catalogCode" className="block text-sm font-medium text-gray-300">
                      Catalog Code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="catalogCode"
                        {...register('catalogCode', { required: 'Catalog code is required' })}
                        className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
                        placeholder="e.g., ABC123"
                      />
                      {errors.catalogCode && (
                        <p className="mt-1 text-sm text-red-400">{errors.catalogCode.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="downloadLink" className="block text-sm font-medium text-gray-300">
                      Download Link
                    </label>
                    <div className="mt-1">
                      <input
                        type="url"
                        id="downloadLink"
                        {...register('downloadLink', { 
                          required: 'Download link is required',
                          pattern: {
                            value: /^https?:\/\/.+/i,
                            message: 'Please enter a valid URL'
                          }
                        })}
                        className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
                        placeholder="https://..."
                      />
                      {errors.downloadLink && (
                        <p className="mt-1 text-sm text-red-400">{errors.downloadLink.message}</p>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
                      Please provide a permanent download link containing all assets (music, artwork, details)
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300">
                      Additional Information
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="additionalInfo"
                        rows={4}
                        {...register('additionalInfo')}
                        className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
                        placeholder="Any additional information about your release"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={buttonClasses + " w-full"}
                      aria-label="Submit premiere request"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Track'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="rounded-md bg-green-500/10 p-4 mt-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-400">
                            Submission successful! We'll be in touch soon.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="rounded-md bg-red-500/10 p-4 mt-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-400">
                            {errorMessage || 'An error occurred. Please try again.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mastering Section */}
        <div className={sectionClasses} id="mastering">
          {/* Moving light effect */}
          <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 ease-in-out" 
               style={{ 
                 transform: 'translateX(-100%)', 
                 animation: 'lightMove 3s ease-in-out infinite alternate',
               }}>
          </div>
          
          <div className="px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center pt-4 sm:pt-6 pb-6 sm:pb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                Mastering
              </h2>
              <p className="text-base leading-6 text-gray-200 max-w-2xl mx-auto">
                Professional audio mastering tailored for electronic music production
              </p>
              <div className="w-16 h-0.5 bg-white/50 mx-auto mt-3"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-3xl"
            >
              <div className="bg-black/30 p-8 sm:p-10 rounded-lg border border-white/10 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="w-full md:w-3/4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Elevate Your Sound</h3>
                    <ul className="space-y-3">
                      {masteringFeatures.map((feature) => (
                        <li key={feature.name} className="flex items-start">
                          <span className="h-2 w-2 rounded-full bg-white flex-shrink-0 mt-2 mr-3"></span>
                          <span><span className="font-medium text-white">{feature.name}:</span> {feature.description}</span>
                        </li>
                      ))}
                      <li className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-white flex-shrink-0 mt-2 mr-3"></span>
                        <span><span className="font-medium text-white">Competitive Rates:</span> Fair pricing with discounts for EPs and albums</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="w-full md:w-1/4 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M4 21V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 10V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 21v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 10V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 21V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 12V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a
                    href="mailto:oecus.info@gmail.com?subject=Mastering%20Inquiry"
                    className={buttonClasses}
                    aria-label="Request mastering service via email"
                  >
                    Request Mastering
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Releases Section */}
        <div className={sectionClasses} id="releases">
          {/* Moving light effect */}
          <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 ease-in-out" 
               style={{ 
                 transform: 'translateX(-100%)', 
                 animation: 'lightMove 3s ease-in-out infinite alternate',
               }}>
          </div>
          
          <div className="px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center pt-4 sm:pt-6 pb-6 sm:pb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                Releases
              </h2>
              <p className="text-base leading-6 text-gray-200 max-w-2xl mx-auto">
                Our curated collection of electronic music releases, showcasing emerging and established artists.
              </p>
              <div className="w-16 h-0.5 bg-white/50 mx-auto mt-3"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {displayedReleases.slice(0, visibleReleasesCount).map((release, index) => (
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

            {visibleReleasesCount < releases.length && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <button
                  onClick={handleLoadMore}
                  className={buttonClasses}
                  aria-label="Load more releases"
                >
                  Load More
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* About Section with Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={sectionClasses}
          id="about"
        >
          {/* Moving light effect */}
          <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 ease-in-out" 
               style={{ 
                 transform: 'translateX(-100%)', 
                 animation: 'lightMove 3s ease-in-out infinite alternate',
               }}>
          </div>
          
          <div className="px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                About
              </h2>
              <p className="text-base leading-6 text-gray-200 max-w-2xl mx-auto">
                A pioneering force in underground electronic music since 2015, dedicated to discovering and promoting innovative and talented artists.
              </p>
              <div className="w-16 h-0.5 bg-white/50 mx-auto mt-3"></div>
            </div>
            
            <div className="mx-auto max-w-6xl mb-12 sm:mb-16 overflow-hidden rounded-xl shadow-2xl">
              <ImageCarousel images={carouselImages} />
            </div>

            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
              >
                <div className="bg-black/30 p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">Our Story</h2>
                  <p className="text-base leading-7 sm:leading-8 text-gray-200">
                    Founded in 2015, OECUS began as a collective, quickly establishing itself as a significant force in the underground electronic music scene. Known for its innovative approach to music, the collective gained recognition through its successful podcasts, releases, and events.
                  </p>
                </div>

                <div className="bg-black/30 p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">Artist Management</h2>
                  <p className="text-base leading-7 sm:leading-8 text-gray-200">
                    From 2018 to 2022, OECUS expanded its influence with an artist management and booking agency, representing talented artists who are now established players in the scene. During this time, OECUS solidified its role as both a curator of cutting-edge music and a key promoter of emerging talent.
                </p>
              </div>

                <div className="bg-black/30 p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">Events & Community</h2>
                  <p className="text-base leading-7 sm:leading-8 text-gray-200">
                    For more than 10 years, OECUS has been hosting its own events in various clubs locally and internationally, continuing to create memorable experiences and pushing talents for its growing community.
                </p>
              </div>
              </motion.div>

              {/* Contact Section */}
              <div className="pt-14 sm:pt-20 text-center mx-auto">
                <div className="bg-black/30 p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg max-w-md mx-auto">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">Get in Touch</h2>
                  <p className="text-base text-gray-200 mb-6">
                    Have a question or want to collaborate? We'd love to hear from you.
                  </p>
                  <a
                    href="mailto:oecus.info@gmail.com"
                    className={buttonClasses}
                    aria-label="Contact us via email"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer with social links */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-7xl mb-8 sm:mb-12"
        >
          <div className="border-t border-white/10 py-8">
            <div className="flex items-center justify-center gap-x-4 sm:gap-x-6 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2"
                >
                  {link.name}
                </a>
              ))}
              <span className="text-sm text-gray-400 min-h-[44px] flex items-center">
                © {new Date().getFullYear()} OECUS
              </span>
            </div>
          </div>
        </motion.footer>
      </div>
      
      {/* Add CSS animation for the light effect */}
      <style jsx global>{`
        @keyframes lightMove {
          0% {
            transform: translateX(-100%) rotate(10deg);
          }
          100% {
            transform: translateX(100%) rotate(-10deg);
          }
        }
        
        @keyframes textFlash {
          0%, 100% {
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          50% {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3), 0 0 12px rgba(255, 255, 255, 0.2);
          }
        }
        
        h1 > div > div {
          animation: textFlash 7s ease-in-out 3s infinite alternate;
        }
        
        .letter-spacing-1 {
          animation: textFlash 7s ease-in-out 4.2s infinite alternate;
        }
      `}</style>
    </div>
  )
} 