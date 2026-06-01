"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 1.6 } },
};
const word = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function RevealWords({ text, className = "" }) {
    return (
        <motion.span variants={container} initial="hidden" animate="show" className={`inline-flex flex-wrap justify-center gap-x-[0.25em] ${className}`}>
            {text.split(" ").map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
                    <motion.span variants={word} className="inline-block">{w}</motion.span>
                </span>
            ))}
        </motion.span>
    );
}

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

    return (
        <section id="hero" ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Aurora gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand))]/20 blur-[120px] aurora-blob" />
                <div className="absolute right-1/4 bottom-1/4 h-[380px] w-[380px] rounded-full bg-fuchsia-500/15 blur-[120px] aurora-blob" style={{ animationDelay: "-7s" }} />
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px] aurora-blob" style={{ animationDelay: "-4s" }} />
            </div>
            {/* Grid background */}
            <div className="absolute inset-0 -z-10 bg-grid" />

            <motion.div style={{ y, opacity, scale }} className="container relative z-10 mx-auto flex flex-col items-center px-4 pt-24 pb-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs backdrop-blur"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-muted-foreground">Open to new opportunities · Based in Surabaya, ID</span>
                </motion.div>

                <h1 className="font-serif text-[clamp(3rem,11vw,11rem)] font-normal leading-[0.92] tracking-[-0.04em] text-balance">
                    <span className="block">
                        <RevealWords text="Building the" />
                    </span>
                    <span className="block italic text-gradient">
                        <RevealWords text="full stack" />
                    </span>
                    <span className="block">
                        <RevealWords text="end to end." />
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 0.7 }}
                    className="mt-10 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
                >
                    I&apos;m <span className="text-foreground">Agung Trilaksono</span> — a full-stack software engineer with 9+ years shipping production web apps in <span className="text-foreground">PHP, Laravel, Node.js, React</span> and <span className="text-foreground">Vue</span>. I build scalable platforms from API to interface.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.85, duration: 0.7 }}
                    className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
                >
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
            >
                <MagneticButton
                    as="a"
                    href="#about"
                    data-cursor="hover"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur-sm shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300">
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                            <ArrowDown className="h-4 w-4" />
                        </motion.div>
                    </div>
                </MagneticButton>
            </motion.div>
        </section>
    );
}
