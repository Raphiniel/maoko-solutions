export function Operations() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                            Operational Excellence
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Plant Operations
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Maximize uptime, ensure compliance, and reduce operational costs
                            with Maoko Solutions’ expert plant operations services. We provide
                            end-to-end support for water, wastewater, and mining facilities,
                            ensuring stable performance and long-term value.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        {/* Visual element or image placeholder - using a gradient/pattern if image not available, or re-using one of the untitiled images */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background-dark/80"></div>
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                            style={{
                                backgroundImage:
                                    "url('/images/Untitled (1).png')",
                            }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[100px] text-white/20">
                                settings_suggest
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Water & Wastewater */}
                    <div className="bg-background-light p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-colors group">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">
                                water_drop
                            </span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6 text-slate-900">
                            Water & Wastewater Treatment Operations
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Start-up support, seamless commissioning handover and full SLA operations",
                                "Development of standard operating procedures (SOPs), staff training, and operator coaching",
                                "Real-time process control and performance monitoring (quality, flow, energy, chemicals)",
                                "Preventive and corrective maintenance planning",
                                "Optimization to reduce energy and chemical use, stabilize output quality, and ensure regulatory compliance",
                                "Comprehensive reporting for internal and client governance",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-600 text-sm">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">
                                        check_circle
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mining Operations */}
                    <div className="bg-background-light p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-colors group">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">
                                precision_manufacturing
                            </span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6 text-slate-900">
                            Mining Operations
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Operational support for mine water treatment assets (process water, reuse, wastewater)",
                                "Water efficiency and reuse optimization aligned to production requirements",
                                "Risk reduction around discharge quality and environmental obligations",
                                "Reliability engineering: maintenance strategy, spares planning, uptime improvement",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-600 text-sm">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">
                                        check_circle
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
