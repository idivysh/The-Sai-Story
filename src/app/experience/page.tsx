import type { Metadata } from "next";

import Experience from "./components/experience";
import ProfessionalExperience from "./components/professional-experience";
import ContactSection from "./components/contact-section";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Explore Divyamsh Sai's professional experience in web development, graphic design, freelancing, internships and leadership, showcasing practical skills and creative contributions.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main>
      <Experience />
      <ProfessionalExperience />
      <ContactSection />
    </main>
  );
}