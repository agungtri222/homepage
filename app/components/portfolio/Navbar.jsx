"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => setMounted(true), []);
    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 30));

    const isDark = resolvedTheme === "dark";

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
                className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4"
            >
                <motion.nav
                    animate={{
                        width: scrolled ? "min(720px, 100%)" : "min(1180px, 100%)",
                        marginTop: scrolled ? 12 : 20,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 28 }}
                    className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-colors ${scrolled ? "glass shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)]" : "bg-transparent"
                        }`}
                >
                    <a href="#hero" data-cursor="hover" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background font-serif italic text-base">A</span>
                        <span className="hidden sm:inline">Agung<span className="text-muted-foreground">.dev</span></span>
                    </a>

                    <ul className="hidden items-center gap-1 md:flex">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    data-cursor="hover"
                                    className="group relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <span className="relative z-10">{l.label}</span>
                                    <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        {mounted && (
                            <button
                                data-cursor="hover"
                                onClick={() => setTheme(isDark ? "light" : "dark")}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={isDark ? "sun" : "moon"}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                    </motion.span>
                                </AnimatePresence>
                            </button>
                        )}
                        <a
                            href="#contact"
                            data-cursor="hover"
                            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
                        >
                            Let&apos;s talk
                        </a>
                        <button
                            data-cursor="hover"
                            onClick={() => setOpen(true)}
                            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </motion.nav>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[60] flex flex-col bg-background p-6 md:hidden"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-serif text-2xl italic">Agung.dev</span>
                            <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary" aria-label="Close menu">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <ul className="mt-16 flex flex-1 flex-col gap-2">
                            {links.map((l, i) => (
                                <motion.li
                                    key={l.href}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                                >
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="block border-b border-border py-5 font-serif text-5xl tracking-tight transition-colors hover:text-muted-foreground"
                                    >
                                        {l.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                            <a href="mailto:agungtrilaksono123@gmail.com" className="hover:text-foreground">agungtrilaksono123@gmail.com</a>
                            <span className="font-mono text-xs">© 2025</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
