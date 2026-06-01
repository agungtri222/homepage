"use client";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-border">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
                >
                    <div>
                        <div className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
                            <span>Let&apos;s build </span>
                            <span className="italic text-muted-foreground">something.</span>
                        </div>
                        <a href="mailto:agungtrilaksono123@gmail.com" className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
                            agungtrilaksono123@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-xs text-muted-foreground md:items-end">
                        <span className="font-mono uppercase tracking-[0.3em]">© 2026 Agung Trilaksono</span>
                        <span>Crafted with ❤️ · Next.js · Framer Motion</span>
                    </div>
                </motion.div>
                <div
                    aria-hidden
                    className="relative mt-12 select-none overflow-hidden"
                >
                    {/* Background text */}
                    <div className="font-serif text-[18vw] leading-none tracking-[-0.05em] text-muted-foreground/10">
                        AGUNG
                    </div>

                    {/* Overlapping last name */}
                    <div className="absolute bottom-[5%] left-[18%] font-serif italic text-[8vw] leading-none tracking-[-0.04em] text-muted-foreground/25">
                        Trilaksono
                    </div>
                </div>
            </div>
        </footer>
    );
}
