"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ children, className = "", as = "button", strength = 0.3, ...props }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 250, damping: 18 });
    const sy = useSpring(y, { stiffness: 250, damping: 18 });

    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const mx = e.clientX - (rect.left + rect.width / 2);
        const my = e.clientY - (rect.top + rect.height / 2);
        x.set(mx * strength);
        y.set(my * strength);
    };
    const handleLeave = () => { x.set(0); y.set(0); };

    const Comp = motion[as] || motion.button;
    return (
        <Comp
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ x: sx, y: sy }}
            className={className}
            {...props}
        >
            {children}
        </Comp>
    );
}
