'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Podcasts', href: '/podcasts' },
  { name: 'Premieres', href: '/premieres' },
  { name: 'Mastering', href: '/mastering' },
  { name: 'Releases', href: '/releases' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to change navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav 
        className={`flex items-center justify-between p-4 sm:p-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-black/40 backdrop-blur-sm'
        }`} 
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center min-h-[44px] min-w-[44px]">
            <Image
              src="/images/OECUS Logo White.png"
              alt="OECUS Logo"
              width={240}
              height={80}
              priority
              className="w-auto h-[80px]"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 active:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 hover:text-gray-300 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center min-h-[44px] min-w-[44px]" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/OECUS Logo White.png"
                alt="OECUS Logo"
                width={180}
                height={60}
                className="w-auto h-[60px]"
              />
            </Link>
            <button
              type="button"
              className="rounded-full min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 text-white bg-white/5 hover:bg-white/10 active:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-5 py-4 text-lg font-semibold leading-7 text-white bg-white/5 hover:bg-white/10 active:bg-white/15 transition-colors min-h-[54px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="mt-6 text-center text-sm text-gray-400">
                  © {new Date().getFullYear()} OECUS
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 