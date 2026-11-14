
import type { Metadata } from "next";

import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import FeaturedProjects from "./components/featured-projects";
import Experience from "./components/experience";
import Education from "./components/education";
import CreativeWork from "./components/creative-work";
import ContactSection from "./components/contact-section";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Education />
      <CreativeWork />
      <ContactSection />
    </main>
  );
}
