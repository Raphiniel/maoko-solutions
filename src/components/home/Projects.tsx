import Image from "next/image";

const projects = [
    {
        title: "Kagiso & Phumulani Malls",
        location: "Johannesburg",
        type: "Wastewater Recycling Plants",
        description:
            "Design and delivery of water recycling plants, including wastewater characterization, plant design, and project management. Containerized MBR with downstream disinfection; treated water used for ablutions and irrigation.",
        image: "/images/Untitled (1).png",
    },
    {
        title: "Riverside Mall",
        location: "Nelspruit",
        type: "Wastewater Recycling Plant",
        description:
            "Design and delivery of a recycling plant integrated with existing rainwater harvesting infrastructure; containerized MBR with downstream disinfection for non-potable reuse.",
        image: "/images/Untitled (6).png",
    },
    {
        title: "Bedford Centre",
        location: "Bedfordview, Gauteng",
        type: "45 kL/day Wastewater Recycling Plant",
        description:
            "Owner’s Engineer for a 45 kL/day plant treating black and grey water for ablutions and irrigation; MBR process with UV disinfection and GAC polishing; included tender documentation and delivery management.",
        image: "/images/Untitled (8).png",
    },
    {
        title: "The Zone @ Rosebank",
        location: "Johannesburg",
        type: "45 kL/day Greywater Treatment Plant",
        description:
            "Owner’s Engineer for a 45 kL/day greywater plant delivering ablutions-quality water using DAF plus sand and carbon media filtration; included RFP, adjudication, and delivery management.",
        image: "/images/Untitled (9).png",
    },
    {
        title: "Cavendish Mall",
        location: "Cape Town",
        type: "45 kL/day Wastewater Treatment & Reuse",
        description:
            "Owner’s Engineer and project manager for a 45 kL/day plant treating black water to produce water for cooling towers, toilet flushing, cleaning and other non-potable uses; MBR plus fit-for-purpose RO; integrates with existing infrastructure.",
        image: "/images/Untitled (10).png",
    },
    {
        title: "Gateway Mall",
        location: "Durban",
        type: "500 kL/day Wastewater Treatment & Reuse",
        description:
            "Owner’s Engineer and project manager for a 500 kL/day plant. Gateway uses up to 1,200 kL/day potable water and yields up to 900 kL/day wastewater; plant treats black/grey water for non-potable demands (cooling towers, flushing, cleaning) using MBR plus fit-for-purpose RO.",
        image: "/images/Untitled (11).png",
    },
    {
        title: "Consol Glass (Ardagh Group)",
        location: "Cape Town",
        type: "Demineralization Plant Troubleshooting",
        description:
            "Condition assessment and troubleshooting for a 360 m³/day demineralization plant supplied by boreholes; identified corrective actions after sub-optimal operation post-commissioning to support water resilience.",
        image: "/images/Untitled (12).png",
    },
    {
        title: "Vincent Park Mall",
        location: "East London",
        type: "45 kL/day Wastewater Recycling Plant",
        description:
            "Owner’s Engineer for a 45 kL/day wastewater recycling plant; designed to treat black water for ablutions and irrigation quality; MBR technology; included RFP, tender adjudication, and delivery management.",
        image: "/images/Untitled (13).png",
    },
    {
        title: "Project Oasis",
        location: "Harare, Zimbabwe",
        type: "Autonomous Water Kiosks",
        description:
            "Autonomous water kiosks conceived to improve access to safe water in low-income communities; partnership enabled “Water ATM” dispensing via smart tags and aimed at steady, 24-hour access to clean water. Partnership with PUMA Energy.",
        image: "/images/Untitled (14).png",
    },
];

export function Projects() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto bg-background-light">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                    Our Portfolio
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                    Featured Projects
                </h3>
                <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                    Our project experience spans water recycling, wastewater treatment,
                    troubleshooting, process optimization, and increasing community water
                    access.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                    {project.location}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-sm font-medium text-primary mb-4">
                                {project.type}
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
