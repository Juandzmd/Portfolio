"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle2 } from "lucide-react"

const certifications = [
    {
        title: "Scrum Master Professional Certification (SMPC®)",
        issuer: "CertiProf",
        date: "Nov 2025",
        id: "SMPC"
    },
    {
        title: "Design Thinking Professional Certification (DTPC®)",
        issuer: "CertiProf",
        date: "Nov 2025",
        id: "DTPC"
    }
]

export function Certifications() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                        <Award className="text-primary" />
                        Certifications
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-20 group-hover:opacity-100 blur transition duration-500" />
                            <Card className="relative bg-card border-primary/10 h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-start justify-between gap-4">
                                        <span className="text-lg font-bold leading-tight">
                                            {cert.title}
                                        </span>
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                                        <span className="font-semibold text-primary">{cert.issuer}</span>
                                        <span>{cert.date}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
