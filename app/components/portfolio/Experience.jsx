"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const timeline = [
    {
        year: "Jun 2024 — Jun 2025",
        role: "Full-Stack Software Engineer",
        company: "Studyhouse",
        desc: "Designed, developed and maintained a scalable AI-powered e-learning platform using Laravel, React and TypeScript. Integrated Google Gemini for personalised learning, built a custom accounting & journal system for transactions and financial reporting, and contributed to architecture, deployment and performance work.",
    },
    {
        year: "Jul 2022 — Jan 2024",
        role: "Web Designer & System Support",
        company: "iDekore Design International",
        desc: "Built responsive, SEO-optimised e-commerce websites on WordPress / WooCommerce. Customised themes and plugins, managed product catalogues and promotions, and provided ongoing technical support for internal systems and customer-facing platforms.",
    },
    {
        year: "Jan 2019 — May 2020",
        role: "Full-Stack Web Developer",
        company: "Assetku Mitra Bangsa (Assetkita)",
        desc: "Built and maintained a P2P lending platform with Laravel + Vue.js / jQuery. Integrated Permata Bank Virtual Accounts for secure payments, implemented loan flows, investor & borrower dashboards, and real-time transaction tracking with a focus on security and uptime.",
    },
    {
        year: "May 2016 — Oct 2018",
        role: "Programmer · Full-Stack Web Developer",
        company: "Asia Commerce Network",
        desc: "Developed core features for B2B cross-border commerce and procurement platforms using Laravel, Vue.js and jQuery. Integrated logistics, currency and vendor APIs, implemented access control and transaction flows, and participated in agile delivery and continuous deployment.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-32 md:py-40">
            <div className="container mx-auto px-4">
                <SectionHeader
                    eyebrow="04 / Experience"
                    title={<><span>Nearly a decade, </span><span className="italic text-muted-foreground">told linearly.</span></>}
                    description="From B2B commerce and P2P fintech to AI-powered edtech — here's the shape of how I got here."
                />

                <div className="relative mx-auto max-w-3xl">
                    <div className="absolute left-[13px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
                    <div className="flex flex-col gap-12">
                        {timeline.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "md:[&>*:first-child]:order-1 md:[&>*:last-child]:order-2 md:text-left" : ""
                                    }`}
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.06 + 0.2, type: "spring", stiffness: 200, damping: 14 }}
                                    className="absolute left-[16px] top-2 z-10 flex h-3 w-3 items-center justify-center rounded-full bg-background ring-4 ring-foreground md:left-1/2 md:top-3 md:-translate-x-1/2"
                                />
                                <div className={`relative ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}`}>
                                    <div className="hidden font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">{t.year}</div>
                                    <h3 className="hidden font-serif text-2xl tracking-tight md:mt-1 md:block">{t.role}</h3>
                                    <div className="hidden text-sm text-muted-foreground md:block">{t.company}</div>
                                    <p className="hidden text-muted-foreground md:mt-3 md:block">{t.desc}</p>
                                </div>
                                <div className={`relative ${i % 2 === 0 ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8 md:text-right"}`}>
                                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:hidden">{t.year}</div>
                                    <h3 className="mt-1 font-serif text-2xl tracking-tight md:hidden">{t.role}</h3>
                                    <div className="text-sm text-muted-foreground md:hidden">{t.company}</div>
                                    <p className="mt-3 text-muted-foreground md:hidden">{t.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-secondary/30 p-8"
                >
                    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Education</div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif text-2xl tracking-tight">SMK Rajasa Surabaya</h3>
                        <span className="font-mono text-xs text-muted-foreground">2013 — 2016</span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">Computer &amp; Networking Engineering</div>
                    <p className="mt-3 text-sm text-muted-foreground">Studied networking, server management and programming from the first year — the foundation I still build on today.</p>
                </motion.div>
            </div>
        </section>
    );
}
