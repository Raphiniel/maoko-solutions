import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

export function IndustryLeaders() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">
                        Industry Leaders
                    </h3>
                    <p className="text-slate-600">
                        Specialized expertise across core sectors.
                    </p>
                </div>
                <Link
                    href="#"
                    className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                    Explore All{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Water */}
                <FadeIn delay={0.2} direction="up" className="h-full">
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-dark h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWbduRjaQL45G5dtXno8dmffnb2x2QgmqTksng2j_0k6uvVvlK5DNErxoKuGzp2bjegSwUdJ_LmD6l8l868ynbce8rR9BHr7cqWhI79EtutMIm85qNN1bYE1LOJNpnL238uRElginc8gQ7VX4mx0m8oJlu9AFTwPvhl40Tt-u9YWa4vIvnjsrXpB2yzXQ9UqRIozSI_K7Ntnp6SPnUaGAfRglrXH3DjJjta01-cqA6y3Ug5YD-Ac20mzt-LIKHforsIcU4d527__GZ')",
                            }}
                            data-alt="Massive water dam and irrigation infrastructure"
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="bg-primary/20 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary">
                                    water_drop
                                </span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-white">
                                Water Solutions
                            </h4>
                            <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Sustainable water management and large-scale irrigation systems.
                            </p>
                        </div>
                    </div>
                </FadeIn>
                {/* Energy */}
                <FadeIn delay={0.4} direction="up" className="h-full">
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-dark h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0nOiMHj2WMvSDE1q6sXy4QDw8banBSCkKH_5U5KBMvsrDw7tJaOknEEcd7mf2WJPVvABkTjqKmwLZxV_kYTVyLW3em0El1YKWzNrGIfoUKJ16zz7H_Ef_l-5PiSE1D_cYYkULmhTZbc0pTP70B8FobRp5bVewjgK01lgwuTW5EQbkoa3a4HOxyJWiF6sPrAQnnLq82OFGxA-0WHnkGYG-dNrdLNUQQ04wg7lLrRttwrGqKHq_J_x-VOXwOIB6IGkHUlCIZDyG-fkC')",
                            }}
                            data-alt="Field of solar panels and wind turbines"
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="bg-primary/20 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary">
                                    bolt
                                </span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-white">
                                Energy Infrastructure
                            </h4>
                            <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Renewable energy grids and industrial power distribution.
                            </p>
                        </div>
                    </div>
                </FadeIn>
                {/* Engineering */}
                <FadeIn delay={0.6} direction="up" className="h-full">
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-dark h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcGTxvyJNdXtDYx4l60zgTN1fVJ911pYmpqBx5smBbnmDSthZCjX14BhKHEUxhblD04Te8AOMYqdERkjMa13hFFzOWqovfUvJbEyNK7Zsz73VGH3xLqF-M9d1cSOvRRZnxHN-UYkrTUJEiKObXN32upLc4R194ry9Al60vTuHx4eqPoJPWbeUYME0w_mNHTDYbK9lryTivSt3wm7Pk4fZO_6UQJtg6GuitAShVtMEs-K7o83mH69acJ4O2rObKphbsu9xpx24DO-C1')",
                            }}
                            data-alt="Industrial crane and high-rise construction site"
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="bg-primary/20 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary">
                                    architecture
                                </span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-white">
                                General Engineering
                            </h4>
                            <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Structural integrity and urban development consulting.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
