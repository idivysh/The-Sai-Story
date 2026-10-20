
import Image from "next/image";
import Link from "next/link";
import "./hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            SOFTWARE DEVELOPER <span>·</span> AI/ML <span>·</span> GRAPHIC DESIGNER
          </p>

          <h1 className="hero-title">
            Hi, I&apos;m Divyamsh  
            <br />
            <span>Sai Vengala.</span>
          </h1>

          <h2 className="hero-tagline">
            I Build. <span>I Create.</span> I Evolve.
          </h2>

          <p className="hero-description">
            Software developer, AI/ML enthusiast, web and app developer,
            and graphic designer. Founder of Vijnah Studio, bringing
            technology and visual creativity together.
          </p>
        </div>

        <div className="hero-image">
        <Image
            src="/assets/hero-myimage-desktop.png"
            alt="Divyamsh Sai"
            width={600}
            height={750}
            priority
            sizes="(max-width: 768px) 0px, 42vw"
            className="hero-portrait hero-portrait-desktop"
        />

        <Image
            src="/assets/hero-myimage-mobile.png"
            alt="Divyamsh Sai"
            width={500}
            height={600}
            priority
            sizes="(max-width: 768px) 85vw, 0px"
            className="hero-portrait hero-portrait-mobile"
        />
        </div>

        <div className="hero-actions">
          <Link
            href="/projects"
            className="hero-button hero-button-primary"
          >
            Explore My Work
          </Link>

          <Link
            href="/contact"
            className="hero-button hero-button-secondary"
          >
            Let&apos;s Connect
          </Link>
        </div>

      </div>
    </section>
  );
}
