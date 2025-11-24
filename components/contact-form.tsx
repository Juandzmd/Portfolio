"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="max-w-md mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-primary/20 shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
                            <CardDescription>
                                Have a project in mind? Let's build something intelligent.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center py-8 space-y-4"
                                >
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Message Sent!</h3>
                                    <p className="text-muted-foreground">
                                        I'll get back to you as soon as possible.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-4"
                                    >
                                        Send another message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="John Doe" required className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell me about your project..."
                                            className="min-h-[120px] bg-background/50"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Send Message <Send className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
