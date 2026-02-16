export function RegionalExpertise() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h3 className="text-3xl font-bold mb-6 text-slate-900">
                        Regional Expertise
                    </h3>
                    <p className="text-slate-600 mb-8 text-lg">
                        With a footprint spanning multiple nations, Maoko Solutions
                        understands the unique geographical and regulatory landscape of the
                        African continent.
                    </p>
                    <ul className="space-y-4 text-slate-900">
                        <li className="flex items-center gap-4 group">
                            <div className="size-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="text-lg font-medium">
                                Southern African Development Community (SADC)
                            </span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="size-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="text-lg font-medium">
                                East African Community (EAC)
                            </span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="size-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="text-lg font-medium">
                                West African Economic Zone
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="aspect-square bg-surface-dark rounded-2xl flex items-center justify-center p-4 border border-border-dark shadow-2xl relative">
                        <img
                            className="w-full h-full object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                            data-alt="Stylized map of Africa with project markers"
                            data-location="Africa"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrSnForvcbSr98NoKGECBoLW_zP2qf-j1ve1p5gxW5iMULbS7TIY-zNWth06UVpVI1yT-omYRquaeOteGzAB4LMRUBxpPCvjA4O_xHILaQ6McNzNrtwsi63MznOx2bkOhLv3A0JtHn_wqC9mpXBdA1xR3OYaELD-mVUN62irAoGGT6cEd6r7aTFR9qzqep15y6_c_njAiNLkZtsNbbZB6h4itjMnLwG0wGf_Q_wKI0MRySN85ZqXJTgrdevJrlHnWGklca4bXYnIa1"
                        />
                        {/* Pulsing Hotspots */}
                        <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                        <div
                            className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                            className="absolute top-1/2 left-1/3 w-5 h-5 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
