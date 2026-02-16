import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.8] contrast-[1.2] saturate-[1.2]"
                    src="/video/hero-background.mp4"
                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDs6eWvhVnMRL5Ndzp1ZPoRlPYrpaiiszWdDS_qFAXshb236o8Ix8vtf0omyjN-pnz_VFbnFtbk9v304gLCaFJKfFDUHUpda_PDQ0nDc5MHsnh7hPkeTKWOlA9FUe_p4Z0JoKqeK7Gimmhjih9a2ibwzwzY09wqS1aQCKUnae689m0mJ8N-FyRYETFXgOzRtDCeDT63YeNOil9zk75TDRWTsoY_h5RjnjtLPbimGGfV2-yDjBUJ-tJWqurRAfOlFWw4waGfWZFsMtmU"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-blue-900/20 mix-blend-multiply opacity-90"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end px-4 md:px-8 pb-20 max-w-[98%] mx-auto">
                <FadeIn delay={0.2} direction="down">
                    <span className="text-sky-300 font-bold tracking-widest uppercase text-base mb-6 drop-shadow-md block">
                        Visionary Infrastructure
                    </span>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                    <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-white drop-shadow-xl">
                        Engineering the <br />{" "}
                        <span className="text-sky-300 drop-shadow-md">Future</span> of Africa&#39;s
                        Infrastructure
                    </h2>
                </FadeIn>
                <FadeIn delay={0.6} direction="up">
                    <p className="text-slate-50 text-xl mb-10 max-w-2xl drop-shadow-lg font-medium leading-relaxed">
                        Delivering sustainable, world-class engineering solutions that empower
                        communities across the continent.
                    </p>
                </FadeIn>
                <FadeIn delay={0.8} direction="up">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/#contact"
                            className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-lg flex items-center justify-center gap-3 transition-all text-lg"
                        >
                            Start Your Project
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                        <Link
                            href="/#projects"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-5 px-10 rounded-lg border border-white/20 transition-all text-center text-lg"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
