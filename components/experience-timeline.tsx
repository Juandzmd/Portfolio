"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase } from "lucide-react"

const experiences = [
    {
        company: "VASS LATAM",
        role: "Consultor Funcional",
        period: "Ago 2025 - Oct 2025",
        description: "Diseño de soluciones con Agentforce (Salesforce) y automatización de flujos conversacionales inteligentes.",
        skills: ["Agentforce", "Salesforce", "AI"]
    },
    {
        company: "Proyecto Personal: Marketplace",
        role: "Jefe de Proyecto & Full Stack",
        period: "Mar 2025 - Jul 2025",
        description: "Arquitectura escalable B2C/C2C con dashboards personalizados.",
        skills: ["Next.js", "React", "Firebase", "Tailwind", "Webpay"]
    },
    {
        company: "Ksepco",
        role: "Trabajador Gráfico",
        period: "Ene 2017 - Jul 2019",
        description: "Control de calidad y precisión en procesos de producción.",
        skills: ["Quality Control", "Process Optimization"]
    }
]

export function ExperienceTimeline() {
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
                    Experiencia
                </h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
                {experiences.map((exp, index) => (
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
                                        {exp.role}
                                    </CardTitle>
                                    <Badge variant="secondary" className="text-xs font-mono">
                                        {exp.period}
                                    </Badge>
                                </div>
                                <h3 className="text-base font-semibold text-muted-foreground">
                                    {exp.company}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
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
