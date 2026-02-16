import Link from "next/link";

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-border-dark px-4 pb-6 pt-2 lg:hidden">
            <div className="max-w-md mx-auto flex justify-between items-center">
                <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl font-fill">
                        home
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Home
                    </span>
                </Link>
                <Link
                    href="#projects"
                    className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">
                        corporate_fare
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Projects
                    </span>
                </Link>
                <Link
                    href="#services"
                    className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">
                        business_center
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Services
                    </span>
                </Link>
                <Link
                    href="#contact"
                    className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">mail</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Contact
                    </span>
                </Link>
            </div>
        </nav>
    );
}
