"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Code2, Server, Database, Globe, Sparkles, GitBranch, Layers, Cpu } from "lucide-react";

const skills = [
    { icon: Server, name: "Backend", level: 95, hint: "PHP · Laravel · Node.js · Python / Django" },
    { icon: Code2, name: "Frontend", level: 92, hint: "React · Vue.js · TypeScript · jQuery" },
    { icon: Database, name: "Databases", level: 88, hint: "MySQL · query optimisation · schema design" },
    { icon: Globe, name: "APIs & Integrations", level: 92, hint: "REST APIs · Permata VA · 3rd-party services" },
    { icon: Sparkles, name: "AI / ML", level: 80, hint: "Google Gemini · LLM integration" },
    { icon: Cpu, name: "Blockchain", level: 72, hint: "Solidity · Hardhat · Truffle · Ganache" },
    { icon: GitBranch, name: "DevOps & Tooling", level: 85, hint: "Git · GitLab · Nginx · Ubuntu · cPanel" },
    { icon: Layers, name: "CMS & E-commerce", level: 90, hint: "WordPress · WooCommerce · Elementor" },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-32 md:py-40">
            <div className="container mx-auto px-4">
                <SectionHeader
                    eyebrow="02 / Capabilities"
                    title={<><span>A toolkit forged across </span><span className="italic text-muted-foreground">fintech, edtech &amp; commerce</span><span>.</span></>}
                    description="Deep in PHP/Laravel and modern JavaScript, broad across databases, integrations, AI, and even smart contracts. Tools are means — here are the ones I reach for most."
                />

                <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                            whileHover={{ y: -4 }}
                            data-cursor="hover"
                            className="group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-secondary/40"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                                    <s.icon className="h-5 w-5" />
                                </div>
                                <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl tracking-tight">{s.name}</h3>
                                <p className="mt-1 text-xs text-muted-foreground">{s.hint}</p>
                            </div>
                            <div className="mt-auto h-px w-full overflow-hidden bg-border">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.2 + (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full bg-foreground"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
