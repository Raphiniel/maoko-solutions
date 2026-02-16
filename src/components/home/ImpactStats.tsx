"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedNumber } from "../ui/AnimatedNumber";

export function ImpactStats() {
    return (
        <section className="py-16 bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4 text-white">Our Impact</h3>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 border-r border-border-dark last:border-0">
                        <div className="text-4xl font-extrabold text-primary mb-2 flex justify-center">
                            <AnimatedNumber value={25} suffix="+" />
                        </div>
                        <div className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                            Accomplished Projects
                        </div>
                    </div>
                    <div className="text-center p-6 border-r border-border-dark last:border-0 md:border-r-0 lg:border-r">
                        <div className="text-4xl font-extrabold text-primary mb-2 flex justify-center">
                            <AnimatedNumber value={12} suffix="+" />
                        </div>
                        <div className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                            Countries Served
                        </div>
                    </div>
                    <div className="text-center p-6 border-r border-border-dark last:border-0">
                        <div className="text-4xl font-extrabold text-primary mb-2 flex justify-center">
                            <AnimatedNumber value={50} suffix="+" />
                        </div>
                        <div className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                            Expert Engineers
                        </div>
                    </div>
                    <div className="text-center p-6 border-r border-border-dark last:border-0 md:border-r-0">
                        <div className="text-4xl font-extrabold text-primary mb-2 flex justify-center">
                            <AnimatedNumber value={15} suffix="yr" />
                        </div>
                        <div className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                            Industry Presence
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
