'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SlotMachineTextProps { 
  text: string
  onComplete?: () => void 
}

const SlotMachineText = ({ text, onComplete }: SlotMachineTextProps) => {
  const [displayedText, setDisplayedText] = useState(Array(text.length).fill(" "))
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const [animationComplete, setAnimationComplete] = useState(false)
  
  useEffect(() => {
    if (animationComplete) return
    
    // Calculate the total animation duration
    const lastLetterIndex = text.length - 1
    const lastLetterCycles = 10 + lastLetterIndex * 3
    const totalAnimationDuration = 400 + lastLetterIndex * 120 + (lastLetterCycles * 50)
    
    // For each letter, cycle through random letters before settling on the final one
    text.split('').forEach((targetLetter, index) => {
      // How many random letters to cycle through
      const cycles = 10 + index * 3
      
      // Initial delay to ensure all letters are visible before animation starts
      setTimeout(() => {
        // Change each letter multiple times before settling on the final
        for (let i = 0; i < cycles; i++) {
          setTimeout(() => {
            setDisplayedText(prev => {
              const newText = [...prev]
              // If it's the last cycle, use the target letter, otherwise use a random one
              if (i === cycles - 1) {
                newText[index] = targetLetter
              } else {
                newText[index] = alphabets[Math.floor(Math.random() * alphabets.length)]
              }
              return newText
            })
          }, 50 * i)
        }
      }, 300 + index * 120)
    })
    
    // Call onComplete after the animation finishes
    if (onComplete) {
      setTimeout(() => {
        setAnimationComplete(true)
        onComplete()
      }, totalAnimationDuration + 200) // Add a bit of extra time to ensure all animations are done
    }
  }, [text, onComplete, animationComplete])
  
  return (
    <div className="grid grid-cols-5 w-full max-w-[100%] gap-[0.15em]">
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
  )
}

export default SlotMachineText 