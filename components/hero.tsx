"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Terminal, Linkedin, Mail, Code2, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { GlitchText } from "@/components/ui/glitch-text"

export function Hero() {
    const { t, language } = useLanguage()
    const [text, setText] = useState("")
    const [showContent, setShowContent] = useState(false)
    const [isInitialLoad, setIsInitialLoad] = useState(true)

    // Reset animation when language changes - but only on initial load
    useEffect(() => {
        if (isInitialLoad) {
            setText("")
            setShowContent(false)
        }
    }, [language, isInitialLoad])

    useEffect(() => {
        if (text.length < t.hero.prompt.length) {
            const timeout = setTimeout(() => {
                setText(t.hero.prompt.slice(0, text.length + 1))
            }, 15) // 3x faster (was 50ms)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setShowContent(true)
                setIsInitialLoad(false) // Mark initial load as complete
            }, 200) // Reduced from 500ms
            return () => clearTimeout(timeout)
        }
    }, [text, t.hero.prompt])

    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="z-10 w-full max-w-4xl space-y-8">
                {/* Prompt Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-secondary/50 backdrop-blur-md border border-primary/20 rounded-lg p-4 flex items-center gap-3 shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                >
                    <Terminal className="w-5 h-5 text-primary animate-pulse" />
                    <div className="font-mono text-sm md:text-base text-muted-foreground flex-1">
                        <span className="text-primary mr-2">➜</span>
                        {text}
                        <span className="animate-pulse">_</span>
                    </div>
                </motion.div>

                {/* Main Content */}
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 text-center md:text-left"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-4">
                                    <GlitchText text={t.hero.available} trigger={language} />
                                </Badge>
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
                                <span className="text-primary">Juan Díaz</span>
                            </h1>

                            <h2 className="text-xl md:text-3xl text-muted-foreground font-mono max-w-2xl">
                                <GlitchText text={t.hero.role} trigger={language} />
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                            <GlitchText text={t.hero.description} trigger={language} />
                        </p>

                        {/* Broadened Skills Display - Reordered */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <Badge variant="secondary" className="px-3 py-1 gap-2 text-sm">
                                <Code2 className="w-4 h-4 text-primary" /> Full Stack Dev
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1 gap-2 text-sm">
                                <Database className="w-4 h-4 text-primary" /> AI Architecture
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1 gap-2 text-sm">
                                <Cloud className="w-4 h-4 text-primary" /> Salesforce/Agentforce
                            </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
                            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 text-lg">
                                <GlitchText text={t.hero.cta_projects} trigger={language} /> <ArrowRight className="w-5 h-5" />
                            </Button>

                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                    <a href="https://linkedin.com/in/juandzmd" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="icon" className="h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                    <a href="mailto:juandzmd@gmail.com">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
