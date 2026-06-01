"use client";
import { motion } from "framer-motion";
import { Terminal, Database, Code2, Cpu, Globe, Sparkles, Server, Flame, Shield, Workflow } from "lucide-react";

const items = [
    { name: "Laravel", icon: Server, color: "text-red-500", bg: "hover:bg-red-500/10 hover:border-red-500/30" },
    { name: "React", icon: Cpu, color: "text-sky-400 group-hover:rotate-180", bg: "hover:bg-sky-500/10 hover:border-sky-500/30" },
    { name: "Node.js", icon: Code2, color: "text-emerald-500", bg: "hover:bg-emerald-500/10 hover:border-emerald-500/30" },
    { name: "TypeScript", icon: Shield, color: "text-blue-500", bg: "hover:bg-blue-500/10 hover:border-blue-500/30" },
    { name: "Vue.js", icon: Flame, color: "text-emerald-400", bg: "hover:bg-emerald-400/10 hover:border-emerald-400/30" },
    { name: "Python / Django", icon: Terminal, color: "text-blue-400", bg: "hover:bg-blue-400/10 hover:border-blue-400/30" },
    { name: "MySQL", icon: Database, color: "text-orange-500", bg: "hover:bg-orange-500/10 hover:border-orange-500/30" },
    { name: "REST APIs", icon: Globe, color: "text-indigo-400", bg: "hover:bg-indigo-500/10 hover:border-indigo-500/30" },
    { name: "AI Integration", icon: Sparkles, color: "text-purple-400 animate-pulse", bg: "hover:bg-purple-500/10 hover:border-purple-500/30" },
    { name: "Solidity", icon: Workflow, color: "text-amber-500", bg: "hover:bg-amber-500/10 hover:border-amber-500/30" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring", 
            stiffness: 140, 
            damping: 18 
        } 
    }
};

export default function Marquee() {
    return (
        <section className="relative border-y border-border/80 bg-secondary/10 py-16 md:py-20">
            {/* Ambient background accent */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
                >
                    {items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                whileHover={{ y: -6, scale: 1.02 }}
                                data-cursor="hover"
                                className={`group flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-background/40 p-6 text-center backdrop-blur-sm transition-all duration-300 ${item.bg}`}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/40 text-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-background group-hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]">
                                    <Icon className={`h-6 w-6 transition-all duration-500 ${item.color}`} />
                                </div>
                                <h3 className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                    {item.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
