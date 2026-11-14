
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./bramble-cup.css";

const assetPath = "/assets/creative-work/bramble-cup/";

const galleryImages = [
  {
    src: "01-moodboard.png",
    alt: "Bramble Cup creative direction and brand moodboard",
    layout: "full",
  },
  {
    src: "02-primary-logo.png",
    alt: "Bramble Cup primary logo presentation",
    layout: "full",
  },
  {
    src: "03-logo-variations.png",
    alt: "Bramble Cup logo variations",
    layout: "half",
  },
  {
    src: "04-logo-construction.png",
    alt: "Bramble Cup logo construction",
    layout: "half",
  },
  {
    src: "05-colour-palette.png",
    alt: "Bramble Cup brand colour palette",
    layout: "full",
  },
  {
    src: "06-typography.png",
    alt: "Bramble Cup typography system",
    layout: "half",
  },
  {
    src: "07-coffee-packaging.png",
    alt: "Bramble Cup coffee packaging",
    layout: "half",
  },
  {
    src: "08-coffee-cups.png",
    alt: "Bramble Cup branded coffee cups",
    layout: "half",
  },
  {
    src: "09-stationery-collateral.png",
    alt: "Bramble Cup stationery and brand collateral",
    layout: "half",
  },
  {
    src: "10-cafe-applications.png",
    alt: "Bramble Cup cafe branding applications",
    layout: "full",
  },
  {
    src: "11-social-media.png",
    alt: "Bramble Cup social media identity",
    layout: "half",
  },
  {
    src: "12-brand-merchandise.png",
    alt: "Bramble Cup branded merchandise",
    layout: "half",
  },
  {
    src: "13-final-showcase.png",
    alt: "Bramble Cup final brand identity showcase",
    layout: "full",
  },
];

export default function BrambleCupPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const revealItems = page.querySelectorAll(".bramble-reveal");

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
    <main className="bramble-project-page" ref={pageRef}>

      {/* HERO */}

      <section className="bramble-hero">

        <picture className="bramble-hero-picture">

          <source
            media="(max-width: 600px)"
            srcSet={`${assetPath}hero-mobile.png`}
          />

          <Image
            src={`${assetPath}hero-desktop.png`}
            alt="Bramble Cup premium coffee brand identity"
            width={2400}
            height={1350}
            priority
            sizes="100vw"
            className="bramble-hero-image"
          />

        </picture>

        <div className="bramble-hero-overlay" />

        <div className="bramble-hero-content">

          <div className="bramble-hero-category">
            <span>BRANDING & VISUAL IDENTITY</span>
            <i />
            <span>FOOD & BEVERAGE</span>
          </div>

          <h1>BRAMBLE CUP</h1>

        </div>

      </section>


      {/* PROJECT OVERVIEW */}

      <section className="bramble-overview bramble-reveal">

        <div className="bramble-overview-heading">

          <span className="bramble-eyebrow">
            THE PROJECT
          </span>

          <h2>Branding & Visual Identity</h2>

        </div>

        <div className="bramble-overview-content">

          <div className="bramble-summary">

            <span className="bramble-overview-label">
              THE PROJECT SUMMARY:
            </span>

            <p>
              Bramble Cup is a coffee brand identity project
              focused on creating a distinctive and memorable
              visual presence within the coffee and beverage space.
            </p>

            <p>
              The objective was to develop a cohesive identity
              that brings together brand personality, visual
              consistency and thoughtful presentation across
              different brand touchpoints.
            </p>

            <p>
              From logo design and typography to packaging
              and brand applications, each element contributes
              to a recognisable and unified Bramble Cup identity.
            </p>

          </div>

          <div className="bramble-project-details">

            <div>
              <span className="bramble-overview-label">
                SEGMENT
              </span>

              <p>Food & Beverage</p>
            </div>

            <div>
              <span className="bramble-overview-label">
                NICHE
              </span>

              <p>
                Coffee & Specialty Beverage Branding
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* IMAGE GALLERY */}

      <section
        className="bramble-gallery"
        aria-label="Bramble Cup brand identity gallery"
      >

        {galleryImages.map((item, index) => (

          <div
            className={`bramble-gallery-item bramble-${item.layout} bramble-reveal`}
            key={item.src}
            style={
              {
                "--bramble-delay": `${(index % 2) * 100}ms`,
              } as React.CSSProperties
            }
          >

            <div className="bramble-gallery-image-wrap">

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
                className="bramble-gallery-image"
              />

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}
