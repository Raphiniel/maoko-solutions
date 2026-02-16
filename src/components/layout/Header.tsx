"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled
            setIsScrolled(currentScrollY > 10);

            // Determine visibility (hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 max-w-7xl mx-auto z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
                    }`}
            >
                <div className="bg-white rounded-full shadow-lg shadow-black/5 border border-slate-100 h-20 px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="relative h-12 w-auto transition-all">
                            <img src="/logo/Maoko Logo Pic.jpg" alt="Maoko Logo" className="h-full w-auto object-contain" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {[
                            { label: "Home", href: "/" },
                            { label: "Services", href: "#services" },
                            { label: "Projects", href: "#projects" },
                            { label: "Operations", href: "#operations" },
                            { label: "About", href: "#about" },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-semibold text-slate-700 hover:text-primary hover:bg-primary/5 px-5 py-2.5 rounded-full transition-all duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4 shrink-0">
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-900 transition-colors"
                    >
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}
