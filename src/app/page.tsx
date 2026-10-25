import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="main-website">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
