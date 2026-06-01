"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
    { value: "9+", label: "Years building production web apps" },
    { value: "4", label: "Companies across fintech, edtech & e-commerce" },
    { value: "20+", label: "Features & platforms shipped to production" },
    { value: "∞", label: "Bugs squashed (still counting)" },
];

export default function About() {
    return (
        <section id="about" className="relative py-32 md:py-40">
            <div className="container mx-auto px-4">
                <SectionHeader
                    eyebrow="01 / About"
                    title={<><span>An engineer who ships </span><span className="italic text-muted-foreground">across the stack</span><span>.</span></>}
                    description="I'm a full-stack software engineer based in Surabaya, Indonesia. For nearly a decade I've built production web applications across fintech (P2P lending), edtech (AI-powered learning), B2B commerce, and e-commerce — specialising in PHP / Laravel and JavaScript ecosystems (React, Vue, Node.js). I love the seam where clean backend architecture meets a responsive, considered interface."
                />

                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative flex flex-col gap-3 bg-background p-8 transition-colors hover:bg-secondary/40"
                        >
                            <div className="font-serif text-5xl font-normal tracking-tight text-foreground sm:text-6xl">{s.value}</div>
                            <div className="text-sm text-muted-foreground">{s.label}</div>
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 grid gap-12 md:grid-cols-3">
                    {[
                        { t: "End-to-end ownership", d: "I move fluidly between API design, database modelling and frontend interfaces — no handoff friction, no waiting on someone else to finish the other half." },
                        { t: "Production-grade craft", d: "Clean, testable, maintainable code. I sweat performance, security, and the small details that turn a working app into a reliable product." },
                        { t: "Practical with AI", d: "At Studyhouse I integrated Google Gemini into a personalised learning platform. I love using AI/ML where it genuinely improves the experience." },
                    ].map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                        >
                            <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">0{i + 1}</div>
                            <h3 className="mb-3 font-serif text-2xl tracking-tight">{c.t}</h3>
                            <p className="text-muted-foreground">{c.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
