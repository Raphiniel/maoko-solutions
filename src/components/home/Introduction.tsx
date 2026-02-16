import { TextReveal } from "../ui/TextReveal";
import { FadeIn } from "../ui/FadeIn";

export function Introduction() {
    return (
        <section className="py-24 px-6 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <TextReveal
                        text="Introduction"
                        className="text-sm font-bold text-primary uppercase tracking-[0.2em]"
                    />
                </div>
                <FadeIn delay={0.2} direction="up">
                    <p className="text-2xl md:text-4xl font-light text-slate-800 dark:text-slate-200 leading-normal">
                        We deliver world-class designs by{" "}
                        <span className="font-semibold text-primary">designing out waste</span>,
                        promoting passive forms of treatment, reducing dependency on chemicals
                        and <span className="font-semibold text-primary">reducing treatment complexity</span>.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
