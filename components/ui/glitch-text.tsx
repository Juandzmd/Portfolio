"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
    text: string
    className?: string
    trigger?: any // Optional, kept for backward compatibility but ignored
}

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isGlitching, setIsGlitching] = useState(false)
    const prevText = useRef(text)

    useEffect(() => {
        // Trigger glitch when text changes
        if (text !== prevText.current) {
            prevText.current = text
            setIsGlitching(true)

            const originalText = text
            const glitchDuration = 450 // Slightly longer
            const iterations = 18 // More frames
            const frameDelay = glitchDuration / iterations

            let currentIteration = 0

            const glitchInterval = setInterval(() => {
                if (currentIteration < iterations) {
                    const progress = currentIteration / iterations

                    const glitched = originalText
                        .split('')
                        .map((char, index) => {
                            if (char === ' ') return ' '

                            // Reveal logic
                            if (Math.random() < progress) {
                                return originalText[index]
                            }
                            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                        })
                        .join('')

                    setDisplayText(glitched)
                    currentIteration++
                } else {
                    setDisplayText(originalText)
                    setIsGlitching(false)
                    clearInterval(glitchInterval)
                }
            }, frameDelay)

            return () => clearInterval(glitchInterval)
        }
    }, [text])

    // Ensure displayText is in sync on mount or if no glitch occurred (fallback)
    useEffect(() => {
        if (!isGlitching && displayText !== text) {
            setDisplayText(text)
        }
    }, [text, isGlitching, displayText])

    return (
        <motion.span
            className={`inline-block ${className}`} // inline-block helps with transforms
            animate={{
                opacity: isGlitching ? [1, 0.8, 1, 0.9, 1] : 1,
                filter: isGlitching ? ["blur(0px)", "blur(1px)", "blur(0px)"] : "blur(0px)",
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
