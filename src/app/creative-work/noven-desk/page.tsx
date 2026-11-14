
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./noven-desk.css";

const assetPath = "/assets/creative-work/noven-desk/";

const galleryImages = [
  {
    src: "01-brand-identity.png",
    alt: "Noven Desk brand identity and visual system showcase",
    layout: "full",
    width: 2400,
    height: 1350,
  },
  {
    src: "02-desktop-ui-01.png",
    alt: "Noven Desk desktop UI screen one",
    layout: "half",
    width: 2400,
    height: 1350,
  },
  {
    src: "03-desktop-ui-02.png",
    alt: "Noven Desk desktop UI screen two",
    layout: "half",
    width: 2400,
    height: 1350,
  },
  {
    src: "04-desktop-ui-03.png",
    alt: "Noven Desk desktop UI screen three",
    layout: "half",
    width: 2400,
    height: 1350,
  },
  {
    src: "05-desktop-ui-04.png",
    alt: "Noven Desk desktop UI screen four",
    layout: "half",
    width: 2400,
    height: 1350,
  },
  {
    src: "06-desktop-ui-05.png",
    alt: "Noven Desk desktop UI screen five",
    layout: "half",
    width: 2400,
    height: 1350,
  },
];

const mobileGalleryImages = [
  {
    src: "07-mobile-ui-01.png",
    alt: "Noven Desk mobile UI screen one",
  },
  {
    src: "08-mobile-ui-02.png",
    alt: "Noven Desk mobile UI screen two",
  },
  {
    src: "09-mobile-ui-03.png",
    alt: "Noven Desk mobile UI screen three",
  },
  {
    src: "10-mobile-ui-04.png",
    alt: "Noven Desk mobile UI screen four",
  },
  {
    src: "11-mobile-ui-05.png",
    alt: "Noven Desk mobile UI screen five",
  },
];

export default function NovenDeskPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const revealItems = page.querySelectorAll(".noven-reveal");

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
    <main className="noven-project-page" ref={pageRef}>

      {/* HERO */}

      <section className="noven-hero">

        <picture className="noven-hero-picture">

          <source
            media="(max-width: 600px)"
            srcSet={`${assetPath}hero-mobile.png`}
          />

          <Image
            src={`${assetPath}hero-desktop.png`}
            alt="Noven Desk brand identity and digital workspace product"
            width={2400}
            height={1350}
            priority
            sizes="100vw"
            className="noven-hero-image"
          />

        </picture>

        <div className="noven-hero-overlay" />

        <div className="noven-hero-content">

          <div className="noven-hero-category">
            <span>BRANDING &amp; DIGITAL PRODUCT DESIGN</span>
            <i />
            <span>PRODUCTIVITY &amp; WORKSPACE</span>
          </div>

          <h1>NOVEN DESK</h1>

        </div>

      </section>


      {/* PROJECT OVERVIEW */}

      <section className="noven-overview noven-reveal">

        <div className="noven-overview-heading">

          <span className="noven-eyebrow">
            THE PROJECT
          </span>

          <h2>Brand Identity &amp; UI Design</h2>

        </div>

        <div className="noven-overview-content">

          <div className="noven-summary">

            <span className="noven-overview-label">
              THE PROJECT SUMMARY:
            </span>

            <p>
              Noven Desk is a digital product design project
              focused on building a cohesive brand identity
              and a consistent user interface for a modern
              workspace and productivity experience.
            </p>

            <p>
              The project brings together the visual identity
              and product interface, connecting the brand's
              personality with its digital experience across
              desktop and mobile screens.
            </p>

            <p>
              From brand identity development to five desktop
              UI screens and five mobile UI screens, each
              design element contributes to a unified and
              recognisable product experience.
            </p>

          </div>

          <div className="noven-project-details">

            <div>
              <span className="noven-overview-label">
                SEGMENT
              </span>

              <p>Digital Product &amp; SaaS Design</p>
            </div>

            <div>
              <span className="noven-overview-label">
                NICHE
              </span>

              <p>
                Productivity &amp; Workspace Management
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* BRAND IDENTITY & DESKTOP UI GALLERY */}

      <section
        className="noven-gallery"
        aria-label="Noven Desk brand identity and desktop UI design gallery"
      >

        {galleryImages.map((item, index) => (

          <div
            className={`noven-gallery-item noven-${item.layout} noven-reveal`}
            key={item.src}
            style={
              {
                "--noven-delay": `${(index % 2) * 100}ms`,
              } as React.CSSProperties
            }
          >

            <div className="noven-gallery-image-wrap">

              <Image
                src={`${assetPath}${item.src}`}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="100vw"
                className="noven-gallery-image"
              />

            </div>

          </div>

        ))}

      </section>


      {/* MOBILE UI GALLERY */}

      <section
        className="noven-mobile-gallery"
        aria-label="Noven Desk mobile UI design gallery"
      >

        {mobileGalleryImages.map((item, index) => (

          <div
            className="noven-mobile-gallery-item noven-reveal"
            key={item.src}
            style={
              {
                "--noven-delay": `${(index % 2) * 100}ms`,
              } as React.CSSProperties
            }
          >

            <div className="noven-mobile-gallery-image-wrap">

              <Image
                src={`${assetPath}${item.src}`}
                alt={item.alt}
                width={1080}
                height={1920}
                sizes="(max-width: 600px) 45vw, 20vw"
                className="noven-mobile-gallery-image"
              />

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}
