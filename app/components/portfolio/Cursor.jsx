"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 200, damping: 22, mass: 0.4 });
    const ringY = useSpring(y, { stiffness: 200, damping: 22, mass: 0.4 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("cursor-active");
        const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
        const over = (e) => {
            const t = e.target;
            if (t.closest && t.closest("a, button, [data-cursor='hover'], input, textarea, label")) setHover(true);
            else setHover(false);
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", over);
            document.documentElement.classList.remove("cursor-active");
        };
    }, [x, y]);

    return (
        <>
            <motion.div
                className="custom-cursor-dot"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: hover ? 0 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.div
                className="custom-cursor-ring"
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: hover ? 1.6 : 1, opacity: hover ? 0.9 : 0.6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
        </>
    );
}
