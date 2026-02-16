import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video/hero-background.mp4"
                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDs6eWvhVnMRL5Ndzp1ZPoRlPYrpaiiszWdDS_qFAXshb236o8Ix8vtf0omyjN-pnz_VFbnFtbk9v304gLCaFJKfFDUHUpda_PDQ0nDc5MHsnh7hPkeTKWOlA9FUe_p4Z0JoKqeK7Gimmhjih9a2ibwzwzY09wqS1aQCKUnae689m0mJ8N-FyRYETFXgOzRtDCeDT63YeNOil9zk75TDRWTsoY_h5RjnjtLPbimGGfV2-yDjBUJ-tJWqurRAfOlFWw4waGfWZFsMtmU"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end px-6 pb-20 max-w-7xl mx-auto">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                    Visionary Infrastructure
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
                    Engineering the <br />{" "}
                    <span className="text-primary">Future</span> of Africa&#39;s
                    Infrastructure
                </h2>
                <p className="text-slate-300 text-lg mb-8 max-w-lg">
                    Delivering sustainable, world-class engineering solutions that empower
                    communities across the continent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/#contact"
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                        Start Your Project
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                    <Link
                        href="/#projects"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-lg border border-white/20 transition-all text-center"
                    >
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
