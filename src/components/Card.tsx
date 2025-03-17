import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  href?: string
  className?: string
  icon?: React.ElementType
  title?: string
  delay?: number
}

export default function Card({
  children,
  href,
  className = '',
  icon: Icon,
  title,
  delay = 0
}: CardProps) {
  const content = (
    <div className={`rounded-2xl border border-white/10 p-6 sm:p-8 backdrop-blur bg-white/5 transition-colors group-hover:bg-white/10 shadow-lg h-full flex flex-col ${className}`}>
      {(Icon || title) && (
        <div className="flex items-start gap-x-4 mb-4 sm:mb-6">
          {Icon && <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white/80 flex-shrink-0" aria-hidden="true" />}
          {title && <h3 className="text-lg sm:text-2xl font-semibold tracking-wide">{title}</h3>}
        </div>
      )}
      {children}
      {href && !href.startsWith('mailto:') && (
        <div className="mt-6 sm:mt-8 flex items-center text-sm sm:text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
          Learn more
          <svg
            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group h-full"
    >
      {href ? (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  )
} 