"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Cloud, Code2, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const skillCategories = [
    {
        icon: <Code2 className="w-6 h-6 text-primary" />,
        skills: ["React", "Next.js", "Node.js", "Python", "TypeScript", "SQL"]
    },
    {
        icon: <Cloud className="w-6 h-6 text-primary" />,
        skills: ["Agentforce", "Prompt Engineering", "Google Cloud", "Firebase"]
    },
    {
        icon: <Wrench className="w-6 h-6 text-primary" />,
        skills: ["Salesforce", "Tailwind CSS", "Git", "Scrum", "Design Thinking"]
    }
]

export function TechStack() {
    const { t } = useLanguage()

    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                        <Cpu className="text-primary" />
                        {t.skills.title}
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.skills.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card/50 backdrop-blur border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    {skillCategories[index].icon}
                                </div>
                                <h3 className="font-bold text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillCategories[index].skills.map((skill, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="hover:bg-primary hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
