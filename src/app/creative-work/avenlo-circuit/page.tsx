
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./avenlo-circuit.css";

const assetPath = "/assets/creative-work/avenlo-circuit/";

const galleryImages = [
  {
    src: "01-moodboard.png",
    alt: "Avenlo Circuit creative direction and brand moodboard",
    layout: "full",
  },
  {
    src: "02-primary-logo.png",
    alt: "Avenlo Circuit primary logo presentation",
    layout: "full",
  },
  {
    src: "03-logo-variations.png",
    alt: "Avenlo Circuit logo variations",
    layout: "half",
  },
  {
    src: "04-logo-construction.png",
    alt: "Avenlo Circuit logo construction",
    layout: "half",
  },
  {
    src: "05-colour-palette.png",
    alt: "Avenlo Circuit brand colour palette",
    layout: "full",
  },
  {
    src: "06-typography.png",
    alt: "Avenlo Circuit typography system",
    layout: "half",
  },

  {
    src: "09-brand-collateral.png",
    alt: "Avenlo Circuit brand collateral",
    layout: "half",
  },

  {
    src: "07-business-cards.png",
    alt: "Avenlo Circuit business card mockups",
    layout: "half",
  },
  {
    src: "08-stationery.png",
    alt: "Avenlo Circuit stationery identity",
    layout: "half",
  },
  
  {
    src: "10-digital-applications.png",
    alt: "Avenlo Circuit digital applications",
    layout: "full",
  },
  {
    src: "11-social-media.png",
    alt: "Avenlo Circuit social media identity",
    layout: "half",
  },
  {
    src: "12-product-applications.png",
    alt: "Avenlo Circuit product applications",
    layout: "half",
  },
  {
    src: "13-final-showcase.png",
    alt: "Avenlo Circuit final brand showcase",
    layout: "full",
  },
];

export default function AvenloCircuitPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const revealItems = page.querySelectorAll(".avenlo-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="avenlo-project-page" ref={pageRef}>

      
      {/* HERO */}

      <section className="avenlo-hero">

        <picture className="avenlo-hero-picture">
          <source
            media="(max-width: 600px)"
            srcSet={`${assetPath}hero-mobile.png`}
          />

          <Image
            src={`${assetPath}hero-desktop.png`}
            alt="Avenlo Circuit brand identity hero"
            width={2400}
            height={1350}
            priority
            sizes="100vw"
            className="avenlo-hero-image"
          />
        </picture>

        <div className="avenlo-hero-overlay" />

        <div className="avenlo-hero-content">

          <div className="avenlo-hero-category">
            <span>BRANDING & VISUAL IDENTITY</span>
            <i />
            <span>AI & TECHNOLOGY</span>
          </div>

          <h1>AVENLO CIRCUIT</h1>

        </div>

      </section>



      {/* PROJECT OVERVIEW */}

      <section className="avenlo-overview avenlo-reveal">

        <div className="avenlo-overview-heading">

          <span className="avenlo-eyebrow">
            THE PROJECT
          </span>

          <h2>Branding & Visual Identity</h2>

        </div>

        <div className="avenlo-overview-content">

          <div className="avenlo-summary">

            <span className="avenlo-overview-label">
              THE PROJECT SUMMARY:
            </span>

            <p>
              Avenlo Circuit is an AI and technology brand identity
              project focused on creating a distinctive visual
              presence in a rapidly evolving digital landscape.
            </p>

            <p>
              The objective was to develop a cohesive identity
              that communicates innovation, intelligence and
              precision through a considered visual language.
            </p>

            <p>
              From logo design to the wider visual identity system,
              each element was developed to give Avenlo Circuit
              a consistent and recognisable brand presence.
            </p>

          </div>

          <div className="avenlo-project-details">

            <div>
              <span className="avenlo-overview-label">
                SEGMENT
              </span>

              <p>AI & Technology</p>
            </div>

            <div>
              <span className="avenlo-overview-label">
                NICHE
              </span>

              <p>
                Artificial Intelligence & Digital Technology
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* IMAGE GALLERY */}

      <section
        className="avenlo-gallery"
        aria-label="Avenlo Circuit brand identity gallery"
      >

        {galleryImages.map((item, index) => (

          <div
            className={`avenlo-gallery-item avenlo-${item.layout} avenlo-reveal`}
            key={item.src}
            style={
              {
                "--avenlo-delay": `${(index % 2) * 100}ms`,
              } as React.CSSProperties
            }
          >

            <div className="avenlo-gallery-image-wrap">

              <Image
                src={`${assetPath}${item.src}`}
                alt={item.alt}
                width={2400}
                height={1350}
                sizes={
                  item.layout === "half"
                    ? "(max-width: 600px) 100vw, 50vw"
                    : "100vw"
                }
                className="avenlo-gallery-image"
              />

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}
