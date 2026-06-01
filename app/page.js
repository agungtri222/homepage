"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Loader = dynamic(() => import("@/components/portfolio/Loader"), { ssr: false });
const Cursor = dynamic(() => import("@/components/portfolio/Cursor"), { ssr: false });

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground noise">
            <Loader />
            <Cursor />

            {/* Scroll progress */}
            <motion.div
                style={{ scaleX }}
                className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-foreground"
            />

            <Navbar />

            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
