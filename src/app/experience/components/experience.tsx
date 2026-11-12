
import Image from "next/image";
import "./experience.css";

export default function Experience() {
  return (
    <section className="experience-page">
      <div className="experience-container">
        <div className="experience-intro-layout">

          {/* LEFT: INTRODUCTION */}
          <div className="experience-intro">
            <h1 className="experience-heading">
              BEHIND THE EXPERIENCE<span>.</span>
            </h1>

            <h2 className="experience-tagline">
              WHERE CREATIVITY MEETS TECHNOLOGY
            </h2>

            <div className="experience-description">
              <p>
                A journey shaped by creativity, technology, entrepreneurship, and the people I've had the opportunity to work with. Every experience has added something new to the way I think, create, and build.
              </p>
            </div>
          </div>

          {/* RIGHT: EXPERIENCE HERO IMAGE */}
          <div className="experience-hero-visual">
            <Image
              src="/assets/experience/experience-hero.png"
              alt="Creative, technical and professional journey"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
