"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "es" : "en")
    }

    return (
        <div className="fixed top-4 right-4 z-50">
            <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary/10 transition-all duration-300 rounded-full px-4 gap-2"
            >
                <Globe className="w-4 h-4 text-primary" />
                <div className="relative w-6 h-5 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={language}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center font-mono font-bold text-xs"
                        >
                            {language.toUpperCase()}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </Button>
        </div>
    )
}
