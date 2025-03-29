'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SharedLayout from '@/components/SharedLayout'

interface SubmissionFormData {
  artistName: string
  label: string
  catalogCode: string
  downloadLink: string
  email: string
  additionalInfo?: string
}

const buttonClasses = "rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-opacity-80 hover:text-black focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] min-w-[44px] inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

export default function PremieresPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SubmissionFormData>()

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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
    <SharedLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center pt-8 sm:pt-12 pb-12 sm:pb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Premieres
          </h1>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            Showcasing the finest unreleased electronic music. Submit your track for premiere consideration.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-16">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1128431950&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              className="hover:opacity-95 transition-opacity sm:h-[450px] h-[300px]"
            ></iframe>
            <div className="text-base text-gray-400 mt-3 font-light" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              <a href="https://soundcloud.com/oecusmusic" title="OECUS" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">OECUS</a> · <a href="https://soundcloud.com/oecusmusic/sets/premiere-series" title="Premiere Series" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center px-3">Premiere Series</a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 sm:mt-16 mx-auto max-w-2xl"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 mb-8 sm:mb-12">
              We offer a professional premiere service designed to maximize exposure for your release. With over 1 million plays annually, our platform connects your music with a dedicated audience in the electronic music scene.
            </p>

            <div className="mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-4 sm:mb-6">Premiere Package</h3>
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

              <div>
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
                <div className="rounded-md bg-green-500/10 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-400">Track submitted successfully!</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-md bg-red-500/10 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-400">{errorMessage || 'Failed to submit track. Please try again.'}</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 