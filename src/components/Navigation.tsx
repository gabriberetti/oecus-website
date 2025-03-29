'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Podcasts', href: '#podcasts' },
  { name: 'Premieres', href: '#premieres' },
  { name: 'Mastering', href: '#mastering' },
  { name: 'Releases', href: '#releases' },
  { name: 'About', href: '#about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update the isScrolled state based on scroll position
      setIsScrolled(window.scrollY > 20);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
      
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: 'smooth' })
      
      // Update URL without page reload
      window.history.pushState({}, '', href)
    }
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5 flex items-center min-h-[48px] min-w-[48px]" 
            onClick={(e) => handleAnchorClick(e, '#home')}>
            <Image
              src="/images/OECUS Logo White.png"
              alt="OECUS Logo"
              width={240}
              height={80}
              priority
              className="w-auto h-[40px] sm:h-[45px] lg:h-[50px]"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-md p-3 text-white hover:bg-white/10 active:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-base font-semibold leading-6 hover:text-gray-300 transition-colors min-h-[48px] min-w-[48px] inline-flex items-center px-2 xl:px-3"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="h-[40px]"></div>
            <button
              type="button"
              className="rounded-full min-h-[48px] min-w-[48px] inline-flex items-center justify-center p-3 text-white bg-white/5 hover:bg-white/10 active:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 flex flex-col justify-between min-h-[calc(100vh-100px)]">
              <div className="space-y-3 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-5 py-4 text-base sm:text-lg font-semibold leading-7 text-white bg-white/5 hover:bg-white/10 active:bg-white/15 transition-colors min-h-[56px] flex items-center"
                    onClick={(e) => {
                      handleAnchorClick(e, item.href)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 mt-auto">
                <div className="flex flex-col items-center mb-6">
                  <Image
                    src="/images/OECUS Logo White.png"
                    alt="OECUS Logo"
                    width={240}
                    height={80}
                    className="w-auto h-[70px]"
                  />
                </div>
                <div className="text-center text-sm text-gray-400">
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