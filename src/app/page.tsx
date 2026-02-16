import { ScrollReveal } from "../components/ui/ScrollReveal";
import { Hero } from "../components/home/Hero";
import { Introduction } from "../components/home/Introduction";
import { IndustryLeaders } from "../components/home/IndustryLeaders";
import { Operations } from "../components/home/Operations";
import { ImpactStats } from "../components/home/ImpactStats";
import { Projects } from "../components/home/Projects";
import { RegionalExpertise } from "../components/home/RegionalExpertise";
import { CTA } from "../components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ScrollReveal width="100%">
        <div id="about">
          <Introduction />
        </div>
      </ScrollReveal>
      <ScrollReveal width="100%">
        <IndustryLeaders />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <div id="services">
          <RegionalExpertise />
        </div>
      </ScrollReveal>
      <ScrollReveal width="100%">
        <div id="operations">
          <Operations />
        </div>
      </ScrollReveal>
      <ScrollReveal width="100%">
        <ImpactStats />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <div id="projects">
          <Projects />
        </div>
      </ScrollReveal>
      <ScrollReveal width="100%">
        <div id="contact">
          <CTA />
        </div>
      </ScrollReveal>
    </div>
  );
}
