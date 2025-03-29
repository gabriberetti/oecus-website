import Image from 'next/image'

interface SharedLayoutProps {
  children: React.ReactNode
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="/images/avabackground.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-32">
        {children}
      </div>
    </div>
  )
} 