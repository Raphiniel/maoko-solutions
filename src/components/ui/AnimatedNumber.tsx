"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export function AnimatedNumber({ value, suffix = "", duration = 2 }: AnimatedNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const displayValue = useTransform(spring, (current) => Math.round(current));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    useEffect(() => {
        return displayValue.on("change", (latest) => {
            setDisplay(latest);
        });
    }, [displayValue]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}
