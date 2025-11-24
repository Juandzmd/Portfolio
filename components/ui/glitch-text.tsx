"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GlitchTextProps {
    text: string
    className?: string
    trigger?: any // When this changes, trigger the glitch
}

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"

export function GlitchText({ text, className = "", trigger }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isGlitching, setIsGlitching] = useState(false)
    const previousTrigger = useRef(trigger)

    useEffect(() => {
        // Only trigger if the trigger value actually changed
        if (trigger !== previousTrigger.current) {
            previousTrigger.current = trigger
            setIsGlitching(true)

            const originalText = text
            const glitchDuration = 400 // Total glitch duration in ms
            const iterations = 15 // Number of glitch frames
            const frameDelay = glitchDuration / iterations

            let currentIteration = 0

            const glitchInterval = setInterval(() => {
                if (currentIteration < iterations) {
                    // Calculate progress (0 to 1)
                    const progress = currentIteration / iterations

                    // Create glitched text
                    const glitched = originalText
                        .split('')
                        .map((char, index) => {
                            // Preserve spaces
                            if (char === ' ') return ' '

                            // Gradually reveal the correct character based on progress
                            const shouldReveal = Math.random() < progress

                            if (shouldReveal) {
                                return originalText[index]
                            } else {
                                // Random character
                                return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                            }
                        })
                        .join('')

                    setDisplayText(glitched)
                    currentIteration++
                } else {
                    // Final frame - show correct text
                    setDisplayText(originalText)
                    setIsGlitching(false)
                    clearInterval(glitchInterval)
                }
            }, frameDelay)

            return () => clearInterval(glitchInterval)
        } else {
            // If trigger didn't change, just update text normally
            setDisplayText(text)
        }
    }, [text, trigger])

    return (
        <motion.span
            className={className}
            animate={{
                opacity: isGlitching ? [1, 0.7, 1, 0.8, 1] : 1,
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut"
            }}
        >
            {displayText}
        </motion.span>
    )
}
