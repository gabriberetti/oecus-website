import React, { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  external = false
}: ButtonProps) {
  const baseStyles = "rounded-md px-6 py-3 text-base font-semibold shadow-sm transition-all duration-200 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
  
  const variantStyles = {
    primary: "bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
  }
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`
  
  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
    
    return (
      <Link href={href} {...linkProps} className={styles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  )
} 