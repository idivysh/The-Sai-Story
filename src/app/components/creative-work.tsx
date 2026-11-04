"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./creative-work.css";

type CreativeProject = {
  id: string;
  name: string;
  category: string;
  year: string;
  deliverables: string;
  image: string;
  mobileImage: string;
  alt: string;
  href: string;
  external?: boolean;
};

const creativeProjects: CreativeProject[] = [
  {
    id: "avenlo-circuit",
    name: "AVENLO CIRCUIT",
    category: "AI & TECHNOLOGY",
    year: "2026",
    deliverables: "LOGO DESIGN · VISUAL IDENTITY · BRAND GUIDELINES",
    image: "/assets/creative-work/avenlo-circuit-cover.png",
    mobileImage: "/assets/creative-work/avenlo-circuit-cover-mobile.png",
    alt: "Avenlo Circuit logo and brand identity presentation",
    href: "/creative-work/avenlo-circuit",
  },
  {
    id: "bramble-cup",
    name: "BRAMBLE CUP",
    category: "FOOD & BEVERAGE",
    year: "2026",
    deliverables: "LOGO DESIGN · PACKAGING DESIGN · BRAND IDENTITY",
    image: "/assets/creative-work/bramble-cup-cover.png",
    mobileImage: "/assets/creative-work/bramble-cup-cover-mobile.png",
    alt: "Bramble Cup specialty coffee branding and packaging",
    href: "/creative-work/bramble-cup",
  },
  {
    id: "rasoi-reel",
    name: "RASOI REEL",
    category: "FOOD & CONTENT",
    year: "2026",
    deliverables: "YOUTUBE THUMBNAILS · CHANNEL BANNER DESIGN",
    image: "/assets/creative-work/rasoi-reel-cover.png",
    mobileImage: "/assets/creative-work/rasoi-reel-cover-mobile.png",
    alt: "Rasoi Reel food content thumbnails and channel branding",
    href: "/creative-work/rasoi-reel",
  },
  {
    id: "nova-desk",
    name: "NOVA DESK",
    category: "PRODUCTIVITY & TECHNOLOGY",
    year: "2026",
    deliverables: "BRAND IDENTITY · DESKTOP UI DESIGN · MOBILE UI DESIGN",
    image: "/assets/creative-work/nova-desk-cover.png",
    mobileImage: "/assets/creative-work/nova-desk-cover-mobile.png",
    alt: "Nova Desk UI UX design project presentation",
    href: "https://www.figma.com/design/c5Weszqe84Q8le0iCBddVL/Noven-Desk-%E2%80%94-UI-UX-Design?node-id=0-1&t=cADRno5ySVx2x5e2-1",
    external: true,
  },
];

export default function CreativeWork() {
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!stage || !viewport || !track) return;

    let distance = 0;
    let animationFrame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const stageTop =
          stage.getBoundingClientRect().top;

        const progress = Math.max(
          0,
          Math.min(
            1,
            -stageTop / (distance || 1)
          )
        );

        track.style.transform = `translate3d(${
          -distance * progress
        }px, 0, 0)`;
      });
    };

    const updateDimensions = () => {
      distance = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth
      );

      // One viewport of vertical scrolling per horizontal distance.
      stage.style.height = `${
        viewport.clientHeight + distance
      }px`;

      updatePosition();
    };

    updateDimensions();

    window.addEventListener("scroll", updatePosition, {
      passive: true,
    });

    window.addEventListener("resize", updateDimensions);

    const resizeObserver = new ResizeObserver(
      updateDimensions
    );

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updateDimensions);

      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="creative-work"
      id="creative-work"
    >

      {/* =====================================
          01. CREATIVE WORK HEADING
      ===================================== */}

      <div className="cw-heading section">

        {/* RIGHT VERTICAL LABEL */}

        <div className="cw-heading-side-label">
          <span>THE SAI STORY</span>

          <span className="cw-heading-side-line" />

          <span>BEYOND THE CODE</span>
        </div>

        <div className="cw-heading-container">

          {/* SECTION NUMBER */}

          <div className="cw-heading-topline">
            <span className="cw-heading-number">
                <span className="cw-heading-number-highlight">06 / </span>
                <span>CREATIVE WORK</span>
            </span>
          </div>

          {/* HEADING AND DESCRIPTION */}

          <div className="cw-heading-content">

            <div className="cw-heading-title">

              <p className="cw-heading-eyebrow">
                DESIGN. IDENTITY. EXPERIENCE.
              </p>

              <h2>
                BEYOND THE CODE,
                <br />
                INTO CREATION<span className="cw-heading-title-dot">.</span>
              </h2>

              <div className="cw-heading-description">
                <p>
                  A different side of my journey, where
                  design, imagination and technology
                  come together to create meaningful
                  visual experiences.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================
          02. FULL-SCREEN HORIZONTAL SHOWCASE
      ===================================== */}

      <div
        className="cw-scroll-stage"
        ref={stageRef}
      >

        <div
          className="cw-sticky-viewport"
          ref={viewportRef}
        >

          <div
            className="cw-track"
            ref={trackRef}
          >

            {/* FOUR CREATIVE PROJECTS */}

            {creativeProjects.map((project, index) => (

              <article
                className="cw-project-card"
                key={project.id}
              >

                {/* PROJECT COVER */}

                <Link
                  href={project.href}
                  target={
                    project.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    project.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="cw-project-image"
                  aria-label={`View ${project.name} project`}
                >

                  <picture className="cw-project-picture">
                    <source
                      media="(max-width: 600px)"
                      srcSet={project.mobileImage}
                    />

                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 600px) 90vw, 88vw"
                      className="cw-project-cover"
                    />
                  </picture>

                  <span className="cw-image-index">
                    0{index + 1} / 04
                  </span>

                </Link>


                {/* PROJECT DETAILS */}

                <div className="cw-project-info">

                  {/* CATEGORY / YEAR / DELIVERABLES */}

                  <div className="cw-project-meta">

                    <span className="cw-project-category">
                      {project.category}
                    </span>

                    <span className="cw-project-year">
                      {project.year}
                    </span>

                    <span className="cw-project-deliverables">
                      {project.deliverables}
                    </span>

                  </div>


                  {/* PROJECT NAME / ARROW */}

                  <div className="cw-project-title-row">

                    <h3>{project.name}</h3>

                    <Link
                      href={project.href}
                      target={
                        project.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        project.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="cw-project-arrow"
                      aria-label={`Explore ${project.name}`}
                    >

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M7 7H17V17"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    </Link>

                  </div>

                </div>

              </article>

            ))}


            {/* =====================================
                FIFTH PANEL — CLOSING DESCRIPTION
            ===================================== */}

            <article className="cw-final-panel">

              <div className="cw-final-panel-content">

                <p className="cw-final-eyebrow">
                  THE CREATIVE SIDE OF MY JOURNEY
                </p>

                <h3>
                  MORE THAN
                  <br />
                  JUST CODE<span className="cw-heading-title-dot">.</span>
                </h3>

                <p className="cw-final-description">
                  A collection of visual identities,
                  digital experiences and creative
                  explorations where ideas take shape
                  beyond the screen. From building
                  distinctive brand identities to
                  crafting meaningful digital interfaces,
                  every creation reflects a different
                  side of my creative journey.
                </p>

                <Link
                  href="/creative-work"
                  className="cw-see-more"
                >

                  <span>
                    EXPLORE ALL CREATIVE WORK
                  </span>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </Link>

              </div>


            </article>

          </div>

        </div>

      </div>

    </section>
  );
}