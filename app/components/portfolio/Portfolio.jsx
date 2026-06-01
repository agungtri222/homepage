"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    ArrowUpRight, X, Terminal, Database, Code2, Cpu, Globe,
    Sparkles, Server, ShoppingCart, Search, Compass, Shield,
    Laptop, GitPullRequest, Layers, Network, CreditCard
} from "lucide-react";

const getTechIcon = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes("laravel")) return <Server className="h-3.5 w-3.5 text-red-500" />;
    if (t.includes("php")) return <Code2 className="h-3.5 w-3.5 text-purple-500" />;
    if (t.includes("react")) return <Cpu className="h-3.5 w-3.5 text-sky-400 animate-[spin_8s_linear_infinite]" />;
    if (t.includes("typescript")) return <Shield className="h-3.5 w-3.5 text-blue-500" />;
    if (t.includes("mysql")) return <Database className="h-3.5 w-3.5 text-orange-500" />;
    if (t.includes("gemini")) return <Sparkles className="h-3.5 w-3.5 text-indigo-400" />;
    if (t.includes("vue")) return <Layers className="h-3.5 w-3.5 text-emerald-500" />;
    if (t.includes("jquery")) return <Compass className="h-3.5 w-3.5 text-blue-400" />;
    if (t.includes("wordpress")) return <Globe className="h-3.5 w-3.5 text-sky-600" />;
    if (t.includes("woocommerce")) return <ShoppingCart className="h-3.5 w-3.5 text-purple-600" />;
    if (t.includes("elementor")) return <Laptop className="h-3.5 w-3.5 text-pink-500" />;
    if (t.includes("seo")) return <Search className="h-3.5 w-3.5 text-yellow-500" />;
    if (t.includes("html") || t.includes("css")) return <Terminal className="h-3.5 w-3.5 text-orange-600" />;
    if (t.includes("gitlab")) return <GitPullRequest className="h-3.5 w-3.5 text-orange-400" />;
    if (t.includes("nginx")) return <Network className="h-3.5 w-3.5 text-emerald-600" />;
    if (t.includes("api")) return <Globe className="h-3.5 w-3.5 text-indigo-500" />;
    if (t.includes("permata") || t.includes("va")) return <CreditCard className="h-3.5 w-3.5 text-blue-600" />;
    return <Terminal className="h-3.5 w-3.5 text-muted-foreground" />;
};
import SectionHeader from "./SectionHeader";

const projects = [
    {
        title: "Studyhouse — AI Learning Platform",
        tag: "EdTech · SaaS",
        year: "2024–25",
        cover: "/img/ai-learning.png",
        description: "An AI-powered e-learning platform built end-to-end. I integrated Google Gemini for personalised learning experiences and content recommendations, and designed a custom accounting & journal system for tracking transactions, payments, and financial reports. Built both the Laravel APIs and the React + TypeScript frontend.",
        role: "Full-Stack Software Engineer",
        stack: ["Laravel", "PHP", "React", "TypeScript", "MySQL", "Google Gemini"],
    },
    {
        title: "Caplize — Financial Asset Platform",
        tag: "FinTech · Platform",
        year: "2024",
        cover: "/img/caplize.png",
        description: "Served as Full-Stack Engineer leading the development of a comprehensive financial and asset management platform. Covered transaction flows, dashboards, and reporting features from API layer to UI.",
        role: "Lead Full-Stack Engineer",
        stack: ["Node.js", "Express", "React", "PostgreSQL"],
    },
    {
        title: "Assetkita — P2P Lending",
        tag: "FinTech · Web Platform",
        year: "2019–20",
        cover: "/img/assetkita.png",
        description: "A Peer-to-Peer lending platform built with Laravel + Vue.js. I integrated Permata Bank Virtual Accounts for secure payment processing, implemented loan application flows, investor dashboards, borrower interfaces, and real-time transaction tracking.",
        role: "Full-Stack Web Developer",
        stack: ["Laravel", "Vue.js", "jQuery", "MySQL", "Permata VA"],
    },
    {
        title: "CRM Wika Overseas",
        tag: "Enterprise · CRM",
        year: "2023",
        cover: "/img/crm-wika.png",
        description: "A CRM tailored to the business processes of Wika's overseas marketing bureau. Built with Laravel + JavaScript on a Linux/Nginx stack, applying clean design patterns for long-term maintainability.",
        role: "Full-Stack Engineer",
        stack: ["Laravel", "PHP", "JavaScript", "MySQL", "Nginx", "GitLab", "Vue.js"],
    },
    {
        title: "Mazda — Vehicle Catalogue",
        tag: "E-commerce · Web",
        year: "2023",
        cover: "/img/mazda.png",
        description: "A car catalogue website showcasing the latest Mazda vehicle models, specifications, and promotional offers. Built on WordPress with custom theming and tuned for performance and SEO.",
        role: "Web Designer & Developer",
        stack: ["WordPress", "PHP", "HTML/CSS", "SEO"],
    },
];

export default function Projects() {
    const [active, setActive] = useState(null);

    return (
        <section id="work" className="relative py-32 md:py-40">
            <div className="container mx-auto px-4">
                <SectionHeader
                    eyebrow="03 / Selected Work"
                    title={<><span>Five projects, </span><span className="italic text-muted-foreground">across fintech, edtech &amp; commerce.</span></>}
                    description="A selection of platforms I've shipped end-to-end — from P2P lending and AI-powered learning to enterprise CRMs and product catalogues. Click any project for details."
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <motion.button
                            key={p.title}
                            onClick={() => setActive(p)}
                            data-cursor="hover"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative flex flex-col overflow-hidden rounded-3xl bg-secondary/40 text-left transition-colors hover:bg-secondary ${i === 0 ? "md:col-span-2" : ""}`}
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <motion.img
                                    src={p.cover}
                                    alt={p.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                    initial={{ scale: 1.05 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-transform duration-500 group-hover:rotate-45">
                                    <ArrowUpRight className="h-4 w-4" />
                                </div>
                                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                                    <span className="font-mono text-xs uppercase tracking-[0.25em] opacity-80">{p.tag}</span>
                                    <span className="font-mono text-xs opacity-80">{p.year}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 p-6">
                                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{p.title}</h3>
                                <span className="text-sm text-muted-foreground">View case →</span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[80] flex items-end justify-center bg-background/60 p-0 backdrop-blur-md md:items-center md:p-6"
                        onClick={() => setActive(null)}
                    >
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 80, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 160, damping: 22 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-background p-6 shadow-2xl md:rounded-3xl md:p-10 scrollbar-thin"
                        >
                            <button
                                onClick={() => setActive(null)}
                                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>
                            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                                <span>{active.tag}</span><span className="h-px w-6 bg-border" /><span>{active.year}</span>
                            </div>
                            <h3 className="font-serif text-4xl tracking-tight sm:text-5xl">{active.title}</h3>
                            <div className="mt-8 overflow-hidden rounded-2xl">
                                <img src={active.cover} alt={active.title} className="w-full" loading="lazy" />
                            </div>
                            <p className="mt-8 text-pretty text-muted-foreground sm:text-lg">{active.description}</p>
                            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
                                <div>
                                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Role</div>
                                    <div className="text-sm">{active.role}</div>
                                </div>
                                <div>
                                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {active.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium border border-border/40 hover:bg-secondary transition-colors"
                                            >
                                                {getTechIcon(s)}
                                                <span>{s}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
