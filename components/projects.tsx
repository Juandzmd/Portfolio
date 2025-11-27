"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ShoppingBag, Coffee, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { GlitchText } from "@/components/ui/glitch-text"

export function Projects() {
    const { t, language } = useLanguage()

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent">
                        <GlitchText text={t.projects.title} trigger={language} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.projects.items.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 group overflow-hidden relative">
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                                            <Coffee className="w-6 h-6" />
                                        </div>
                                        <Badge variant="outline" className="border-primary/20 bg-primary/5">
                                            v1.0
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-base mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary transition-colors">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        className="w-full group/btn relative overflow-hidden"
                                        onClick={() => window.open('https://juandzmd.github.io/MYN', '_blank')}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center justify-center gap-2">
                                            {t.projects.view_project}
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
