"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
    return (
        <div className={`mb-16 flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
            >
                <span className="h-px w-8 bg-border" />
                {eyebrow}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-balance"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="max-w-2xl text-pretty text-muted-foreground sm:text-lg"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
