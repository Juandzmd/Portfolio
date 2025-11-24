"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Terminal, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
    const [text, setText] = useState("")
    const fullText = "Generating portfolio for Juan Salvador..."
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        if (text.length < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1))
            }, 50)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setShowContent(true)
            }, 500)
            return () => clearTimeout(timeout)
        }
    }, [text])

    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="z-10 w-full max-w-3xl space-y-8">
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
                        className="space-y-6 text-center md:text-left"
                    >
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-4">
                                    Available for new projects
                                </Badge>
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                Juan Salvador <br className="hidden md:block" />
                                <span className="text-primary">Díaz Modinger</span>
                            </h1>

                            <h2 className="text-xl md:text-2xl text-muted-foreground font-mono">
                                Desarrollador & AI Prompt Manager
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                            Desarrollador con +4 años fusionando arquitectura de software e Inteligencia Artificial.
                            Especialista en crear puentes entre requisitos funcionales y soluciones automatizadas con
                            <span className="text-primary font-semibold"> Agentforce</span> y ecosistemas modernos.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6">
                                Ver Proyectos <ArrowRight className="w-4 h-4" />
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
