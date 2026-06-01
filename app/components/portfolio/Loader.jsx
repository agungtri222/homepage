"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(t);
    }, []);
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="text-6xl md:text-8xl font-serif italic tracking-tight">
                                <span className="inline-block overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                                        className="inline-block"
                                    >
                                        Agung.
                                    </motion.span>
                                </span>
                            </div>
                        </motion.div>
                        <div className="h-px w-40 overflow-hidden bg-border">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                className="h-full w-full bg-foreground"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
                        >
                            Full-Stack Engineer
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
