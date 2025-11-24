"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

type Translations = {
    hero: {
        prompt: string
        role: string
        description: string
        cta_projects: string
        cta_contact: string
        available: string
    }
    experience: {
        title: string
        items: {
            role: string
            company: string
            period: string
            description: string
        }[]
    }
    skills: {
        title: string
        categories: {
            title: string
        }[]
    }
    certifications: {
        title: string
    }
    contact: {
        title: string
        subtitle: string
        name_label: string
        name_placeholder: string
        email_label: string
        email_placeholder: string
        message_label: string
        message_placeholder: string
        submit_button: string
        sending: string
        success_title: string
        success_message: string
        send_another: string
    }
    footer: {
        rights: string
        built_with: string
    }
}

const translations: Record<Language, Translations> = {
    en: {
        hero: {
            prompt: "Generating portfolio for Juan Salvador...",
            role: "Full Stack Developer & Salesforce Consultant",
            description: "Bridging the gap between Complex Software Architecture and AI Agents. I specialize in building intelligent automation ecosystems using Agentforce, Next.js, and Python.",
            cta_projects: "View Projects",
            cta_contact: "Contact Me",
            available: "Available for new projects"
        },
        experience: {
            title: "Experience",
            items: [
                {
                    role: "Functional Consultant",
                    company: "VASS LATAM",
                    period: "Aug 2025 - Oct 2025",
                    description: "Designing solutions with Agentforce (Salesforce) and automating intelligent conversational flows."
                },
                {
                    role: "Project Manager & Full Stack Dev",
                    company: "Personal Project: Marketplace",
                    period: "Mar 2025 - Jul 2025",
                    description: "Scalable B2C/C2C architecture with custom dashboards using Next.js, React, and Firebase."
                },
                {
                    role: "Graphic Worker",
                    company: "Ksepco",
                    period: "Jan 2017 - Jul 2019",
                    description: "Quality control and precision in production processes."
                }
            ]
        },
        skills: {
            title: "Tech Stack",
            categories: [
                { title: "Core Development" },
                { title: "AI & Cloud" },
                { title: "Tools & Methodologies" }
            ]
        },
        certifications: {
            title: "Certifications"
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Have a project in mind? Let's build something intelligent.",
            name_label: "Name",
            name_placeholder: "John Doe",
            email_label: "Email",
            email_placeholder: "john@example.com",
            message_label: "Message",
            message_placeholder: "Tell me about your project...",
            submit_button: "Send Message",
            sending: "Sending...",
            success_title: "Message Sent!",
            success_message: "I'll get back to you as soon as possible.",
            send_another: "Send another message"
        },
        footer: {
            rights: "All rights reserved.",
            built_with: "Built with Next.js, Tailwind & AI."
        }
    },
    es: {
        hero: {
            prompt: "Generando portafolio para Juan Salvador...",
            role: "Desarrollador Full Stack & Consultor Salesforce",
            description: "Uniendo la Arquitectura de Software Compleja con Agentes de IA. Me especializo en construir ecosistemas de automatización inteligente usando Agentforce, Next.js y Python.",
            cta_projects: "Ver Proyectos",
            cta_contact: "Contactar",
            available: "Disponible para nuevos proyectos"
        },
        experience: {
            title: "Experiencia",
            items: [
                {
                    role: "Consultor Funcional",
                    company: "VASS LATAM",
                    period: "Ago 2025 - Oct 2025",
                    description: "Diseño de soluciones con Agentforce (Salesforce) y automatización de flujos conversacionales inteligentes."
                },
                {
                    role: "Jefe de Proyecto & Full Stack",
                    company: "Proyecto Personal: Marketplace",
                    period: "Mar 2025 - Jul 2025",
                    description: "Arquitectura escalable B2C/C2C con dashboards personalizados usando Next.js, React y Firebase."
                },
                {
                    role: "Trabajador Gráfico",
                    company: "Ksepco",
                    period: "Ene 2017 - Jul 2019",
                    description: "Control de calidad y precisión en procesos de producción."
                }
            ]
        },
        skills: {
            title: "Stack Tecnológico",
            categories: [
                { title: "Desarrollo Core" },
                { title: "IA & Cloud" },
                { title: "Herramientas y Metodologías" }
            ]
        },
        certifications: {
            title: "Certificaciones"
        },
        contact: {
            title: "Contáctame",
            subtitle: "¿Tienes un proyecto en mente? Construyamos algo inteligente.",
            name_label: "Nombre",
            name_placeholder: "Juan Pérez",
            email_label: "Correo",
            email_placeholder: "juan@ejemplo.com",
            message_label: "Mensaje",
            message_placeholder: "Cuéntame sobre tu proyecto...",
            submit_button: "Enviar Mensaje",
            sending: "Enviando...",
            success_title: "¡Mensaje Enviado!",
            success_message: "Te responderé lo antes posible.",
            send_another: "Enviar otro mensaje"
        },
        footer: {
            rights: "Todos los derechos reservados.",
            built_with: "Construido con Next.js, Tailwind & IA."
        }
    }
}

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
