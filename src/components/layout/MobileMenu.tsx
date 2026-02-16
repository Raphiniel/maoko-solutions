"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-background-light dark:bg-background-dark flex flex-col pt-20 px-6 animate-in slide-in-from-right duration-300">
            <button
                onClick={onClose}
                className="absolute top-6 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
                <span className="material-symbols-outlined text-3xl text-slate-900 dark:text-white">close</span>
            </button>

            <nav className="flex flex-col gap-8 mt-8">
                {[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "#services" },
                    { label: "Projects", href: "#projects" },
                    { label: "Operations", href: "#operations" },
                    { label: "About", href: "#about" },
                    { label: "Contact", href: "#contact" },
                ].map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="text-2xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors border-b border-border-dark/10 pb-4"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto mb-10">
                <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest font-bold">Contact Us</p>
                <p className="text-xl font-medium text-slate-900 dark:text-white mb-2">(+27)81 056 4379</p>
                <p className="text-lg text-slate-600 dark:text-slate-400">info@maokosolutions.com</p>
            </div>
        </div>
    );
}
