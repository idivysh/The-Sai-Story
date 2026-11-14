
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./rasoi-reel.css";

const assetPath = "/assets/creative-work/rasoi-reel/";

const galleryImages = [
  {
    src: "01-youtube-thumbnail.png",
    alt: "Rasoi Reel first YouTube thumbnail design",
    layout: "full",
  },
  {
    src: "02-youtube-thumbnail.png",
    alt: "Rasoi Reel second YouTube thumbnail design",
    layout: "full",
  },
  {
    src: "03-youtube-thumbnail.png",
    alt: "Rasoi Reel third YouTube thumbnail design",
    layout: "full",
  },
  {
    src: "04-youtube-channel-banner.png",
    alt: "Rasoi Reel YouTube channel banner design",
    layout: "full",
  },
];

export default function RasoiReelPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const revealItems = page.querySelectorAll(".rasoi-reveal");

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
    <main className="rasoi-project-page" ref={pageRef}>

      {/* HERO */}

      <section className="rasoi-hero">

        <picture className="rasoi-hero-picture">

          <source
            media="(max-width: 600px)"
            srcSet={`${assetPath}hero-mobile.png`}
          />

          <Image
            src={`${assetPath}hero-desktop.png`}
            alt="Rasoi Reel YouTube food content creative identity"
            width={2400}
            height={1350}
            priority
            sizes="100vw"
            className="rasoi-hero-image"
          />

        </picture>

        <div className="rasoi-hero-overlay" />

        <div className="rasoi-hero-content">

          <div className="rasoi-hero-category">
            <span>YOUTUBE CREATIVE &amp; CHANNEL DESIGN</span>
            <i />
            <span>FOOD &amp; COOKING</span>
          </div>

          <h1>RASOI REEL</h1>

        </div>

      </section>


      {/* PROJECT OVERVIEW */}

      <section className="rasoi-overview rasoi-reveal">

        <div className="rasoi-overview-heading">

          <span className="rasoi-eyebrow">
            THE PROJECT
          </span>

          <h2>YouTube Creative &amp; Channel Design</h2>

        </div>

        <div className="rasoi-overview-content">

          <div className="rasoi-summary">

            <span className="rasoi-overview-label">
              THE PROJECT SUMMARY:
            </span>

            <p>
              Rasoi Reel is a YouTube creative design project
              focused on creating engaging visual content for
              a food and cooking channel.
            </p>

            <p>
              The project brings together three custom YouTube
              thumbnails and a channel banner, designed to
              establish a consistent and recognisable visual
              presence across the platform.
            </p>

            <p>
              From attention-grabbing thumbnail compositions
              to the overall channel presentation, each design
              contributes to a visual experience that reflects
              the energy and appeal of food content.
            </p>

          </div>

          <div className="rasoi-project-details">

            <div>
              <span className="rasoi-overview-label">
                SEGMENT
              </span>

              <p>Digital Content &amp; YouTube Design</p>
            </div>

            <div>
              <span className="rasoi-overview-label">
                NICHE
              </span>

              <p>
                Food, Cooking &amp; Culinary Content
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* IMAGE GALLERY */}

      <section
        className="rasoi-gallery"
        aria-label="Rasoi Reel YouTube creative gallery"
      >

        {galleryImages.map((item, index) => (

          <div
            className={`rasoi-gallery-item rasoi-${item.layout} rasoi-reveal`}
            key={item.src}
            style={
              {
                "--rasoi-delay": `${(index % 2) * 100}ms`,
              } as React.CSSProperties
            }
          >

            <div className="rasoi-gallery-image-wrap">

              <Image
                src={`${assetPath}${item.src}`}
                alt={item.alt}
                width={2400}
                height={1350}
                sizes="100vw"
                className="rasoi-gallery-image"
              />

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}
