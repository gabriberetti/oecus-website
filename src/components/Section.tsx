import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  delay?: number
  id?: string
}

export default function Section({ 
  children, 
  title, 
  subtitle, 
  className = "", 
  delay = 0,
  id
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`py-12 sm:py-16 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  )
} 