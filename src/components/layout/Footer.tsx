import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background-dark text-white pt-20 pb-10 px-6 border-t border-border-dark">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                            <img src="/logo/Maoko Logo Pic.jpg" alt="Maoko Logo" className="object-cover w-full h-full" />
                        </div>
                        <span className="text-xl font-extrabold tracking-tight uppercase">
                            Maoko
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                        (+27)81 056 4379
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Professional engineering and project management firm dedicated to
                        building a resilient and sustainable Africa.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">share</span>
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">public</span>
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">group</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">
                        Company
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <Link href="/#about" className="hover:text-primary transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="hover:text-primary transition-colors">
                                Our History
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="hover:text-primary transition-colors">
                                Our Values
                            </Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-primary transition-colors">
                                Sustainability
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">
                        Services
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <Link href="/#services" className="hover:text-primary transition-colors">
                                Civil Engineering
                            </Link>
                        </li>
                        <li>
                            <Link href="/#operations" className="hover:text-primary transition-colors">
                                Project Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-primary transition-colors">
                                Water Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/#operations" className="hover:text-primary transition-colors">
                                Strategic Consulting
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">
                        Resources
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <Link href="/#projects" className="hover:text-primary transition-colors">
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link href="/#projects" className="hover:text-primary transition-colors">
                                Latest News
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="hover:text-primary transition-colors">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="hover:text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-500">
                        © 2024 Maoko Solutions (Pty) Ltd | T/A Maoko Engineering
                    </p>
                    <p className="text-xs text-gray-500">
                        Registration Number: 2019/280722/07
                    </p>
                </div>
                <div className="flex gap-8 text-xs text-gray-500">
                    <Link href="https://twitter.com/MaokoSolutions" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Twitter
                    </Link>
                    <Link href="https://www.instagram.com/maokosolutions" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Instagram
                    </Link>
                    <Link href="https://www.linkedin.com/company/maoko-engineering-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
