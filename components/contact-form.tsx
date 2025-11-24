"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactForm() {
    const { t } = useLanguage()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Aurora Borealis Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[90px]" />
            </div>

            <div className="max-w-md mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-primary/20 shadow-[0_0_30px_rgba(124,58,237,0.1)] bg-card/50 backdrop-blur-xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <CardHeader className="text-center relative">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-4 right-4 text-primary/20"
                            >
                                <Sparkles className="w-8 h-8" />
                            </motion.div>
                            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                {t.contact.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                                {t.contact.subtitle}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex flex-col items-center text-center py-8 space-y-4"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center relative">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            >
                                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                                            </motion.div>
                                            <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-500">{t.contact.success_title}</h3>
                                        <p className="text-muted-foreground">
                                            {t.contact.success_message}
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-6 border-primary/20 hover:bg-primary/10"
                                        >
                                            {t.contact.send_another}
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2 group">
                                            <Label htmlFor="name" className={`transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : ''}`}>
                                                {t.contact.name_label}
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="name"
                                                    placeholder={t.contact.name_placeholder}
                                                    required
                                                    className="bg-background/50 border-primary/10 focus:border-primary/50 transition-all duration-300"
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                />
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                                                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2 group">
                                            <Label htmlFor="email" className={`transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : ''}`}>
                                                {t.contact.email_label}
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder={t.contact.email_placeholder}
                                                    required
                                                    className="bg-background/50 border-primary/10 focus:border-primary/50 transition-all duration-300"
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                />
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                                                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2 group">
                                            <Label htmlFor="message" className={`transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : ''}`}>
                                                {t.contact.message_label}
                                            </Label>
                                            <div className="relative">
                                                <Textarea
                                                    id="message"
                                                    placeholder={t.contact.message_placeholder}
                                                    className="min-h-[120px] bg-background/50 border-primary/10 focus:border-primary/50 transition-all duration-300 resize-none"
                                                    required
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField(null)}
                                                />
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                                                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group"
                                            disabled={isSubmitting}
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <span className="relative flex items-center justify-center gap-2">
                                                {isSubmitting ? (
                                                    t.contact.sending
                                                ) : (
                                                    <>
                                                        {t.contact.submit_button} <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </Button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
