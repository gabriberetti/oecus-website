'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface SubmissionFormData {
  artistName: string
  trackTitle: string
  releaseDate: string
  label: string
  email: string
  message: string
}

export default function PremieresPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmissionFormData>()

  const onSubmit = async (data: SubmissionFormData) => {
    // Handle form submission here
    console.log(data)
  }

  return (
    <div className="min-h-screen py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Premieres</h1>
          <p className="text-lg leading-8 text-gray-300">
            Showcasing the finest unreleased electronic music. Submit your track for premiere consideration.
          </p>
        </motion.div>

        {/* Premiere Series */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Premiere Series</h2>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1128431950&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="hover:opacity-95 transition-opacity"
            ></iframe>
            <div className="text-base text-gray-400 mt-3 font-light" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              <a href="https://soundcloud.com/oecusmusic" title="OECUS" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">OECUS</a> · <a href="https://soundcloud.com/oecusmusic/sets/premiere-series" title="Premiere Series" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">Premiere Series</a>
            </div>
          </div>
        </div>

        {/* Service Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 mx-auto max-w-2xl"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-8 text-gray-300 mb-12">
              We offer a professional premiere service designed to maximize exposure for your release. With over 1 million plays annually, our platform connects your music with a dedicated audience in the electronic music scene.
            </p>

            <div className="mb-12">
              <h3 className="text-xl font-bold tracking-tight mb-6">Premiere Package</h3>
              <ul className="list-none space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                  <span className="text-base">SoundCloud Premiere – Featured on our curated Premiere Playlist</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                  <span className="text-base">YouTube Premiere – Published on our official channel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                  <span className="text-base">Instagram Promotion – Story feature with artist & label tags + reshares</span>
                </li>
              </ul>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="artistName" className="block text-base font-medium mb-2">
                  Artist Name
                </label>
                <input
                  type="text"
                  id="artistName"
                  {...register('artistName', { required: true })}
                  className="min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="trackTitle" className="block text-base font-medium mb-2">
                  Track Title
                </label>
                <input
                  type="text"
                  id="trackTitle"
                  {...register('trackTitle', { required: true })}
                  className="min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="releaseDate" className="block text-base font-medium mb-2">
                  Release Date
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  {...register('releaseDate', { required: true })}
                  className="min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="label" className="block text-base font-medium mb-2">
                  Label
                </label>
                <input
                  type="text"
                  id="label"
                  {...register('label', { required: true })}
                  className="min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
                  className="min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="min-h-[44px]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-[44px] min-w-[44px] inline-flex items-center"
                >
                  Submit Track
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 