"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { GlitchText } from "@/components/ui/glitch-text"

export function ExperienceTimeline() {
    const { t, language } = useLanguage()

    // Define skills for each item manually since they are not in the translation object yet
    // Ideally, these should also be in the translation object if they need translation
    const skillsMap = [
        ["Agentforce", "Salesforce", "AI"],
        ["Next.js", "React", "Firebase", "Tailwind", "Webpay"],
        ["Quality Control", "Process Optimization"]
    ]

    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Briefcase className="text-primary" />
                    <GlitchText text={t.experience.title} trigger={language} />
                </h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
                {t.experience.items.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                    >
                        {/* Timeline Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(124,58,237,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>

                        {/* Content Card */}
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-lg font-bold text-primary">
                                        <GlitchText text={exp.role} trigger={language} />
                                    </CardTitle>
                                    <Badge variant="secondary" className="text-xs font-mono">
                                        {exp.period}
                                    </Badge>
                                </div>
                                <h3 className="text-base font-semibold text-muted-foreground">
                                    <GlitchText text={exp.company} trigger={language} />
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    <GlitchText text={exp.description} trigger={language} />
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {skillsMap[index].map((skill, i) => (
                                        <Badge key={i} variant="outline" className="border-primary/20 text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
