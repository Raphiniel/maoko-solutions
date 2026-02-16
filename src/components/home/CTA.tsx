"use client";

export function CTA() {
    return (
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
            <div className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
                        </pattern>
                        <rect fill="url(#grid)" height="100" width="100"></rect>
                    </svg>
                </div>
                <div className="relative z-10 grid lg:grid-cols-2 items-stretch">
                    <div className="p-8 md:p-12 lg:p-20 text-white flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            Partner with Maoko Solutions for engineering excellence. Our experts are ready to turn your vision into reality.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">call</span>
                                <p className="font-semibold text-lg hover:text-white/90 transition-colors">(+27) 81 056 4379</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">mail</span>
                                <p className="font-semibold text-lg hover:text-white/90 transition-colors">info@maokosolutions.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">location_on</span>
                                <p className="font-semibold text-lg">Johannesburg, South Africa</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/10">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input
                                    id="name"
                                    className="w-full bg-white rounded-lg border-0 py-3 px-4 md:py-4 md:px-6 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50 transition-shadow outline-none"
                                    placeholder="Your Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input
                                    id="email"
                                    className="w-full bg-white rounded-lg border-0 py-3 px-4 md:py-4 md:px-6 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50 transition-shadow outline-none"
                                    placeholder="Email Address"
                                    type="email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    id="message"
                                    className="w-full bg-white rounded-lg border-0 py-3 px-4 md:py-4 md:px-6 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50 transition-shadow outline-none resize-none"
                                    placeholder="Your Message..."
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <button className="w-full bg-background-dark text-white py-3 md:py-4 rounded-lg font-bold text-lg hover:bg-slate-900 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
