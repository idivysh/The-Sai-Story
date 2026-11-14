
import type { Metadata } from "next";

import About from "./components/about";
import MyStory from "./components/my-story";
import WhatIDo from "./components/what-i-do";
import MyPhilosophy from "./components/my-philosophy";
import BeyondWork from "./components/beyond-work";
import WhatsNext from "./components/whats-next";
import ContactSection from "./components/contact-section";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Discover the story, philosophy, skills and creative journey of Divyamsh Sai through The Sai Story.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <MyStory />
      <WhatIDo />
      <MyPhilosophy />
      <BeyondWork />
      <WhatsNext />
      <ContactSection />
    </>
  );
}
