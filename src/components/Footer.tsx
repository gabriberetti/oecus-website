'use client'

import React from 'react'

interface SocialLink {
  name: string
  href: string
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}

const socialLinks: SocialLink[] = []

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300 min-h-[44px] min-w-[44px] inline-flex items-center" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} OECUS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 