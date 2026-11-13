
import Image from "next/image";
import Link from "next/link";
import "./creative-work.css";

const projects = [
  {
    id: "avenlo-circuit",
    name: "AVENLO CIRCUIT",
    category: "AI & TECHNOLOGY",
    image: "/assets/creative-work/avenlo-circuit/cover.png",
    alt: "Avenlo Circuit brand identity presentation",
    href: "/creative-work/avenlo-circuit",
  },
  {
    id: "bramble-cup",
    name: "BRAMBLE CUP",
    category: "FOOD & BEVERAGE",
    image: "/assets/creative-work/bramble-cup/cover.png",
    alt: "Bramble Cup branding and packaging presentation",
    href: "/creative-work/bramble-cup",
  },
  {
    id: "rasoi-reel",
    name: "RASOI REEL",
    category: "FOOD & CONTENT",
    image: "/assets/creative-work/rasoi-reel/cover.png",
    alt: "Rasoi Reel food content and branding presentation",
    href: "/creative-work/rasoi-reel",
  },
  {
    id: "noven-desk",
    name: "NOVEN DESK",
    category: "PRODUCTIVITY & TECHNOLOGY",
    image: "/assets/creative-work/noven-desk/cover.png",
    alt: "Noven Desk productivity and technology design presentation",
    href: "/creative-work/noven-desk",
  },
];

function ProjectArrow({ label }: { label: string }) {
  return (
    <span className="cwp-project-arrow" aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 17L17 7M7 7H17V17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function CreativeWorkPage() {
  return (
    <main className="creative-work-page">

      {/* =====================================
          01. INTRODUCTION
      ===================================== */}

      <section className="cwp-intro">

        <div className="cwp-heading-content">

          <div className="cwp-heading-main">

            <p className="cwp-eyebrow">
              DESIGN. IDENTITY. EXPERIENCE.
            </p>

            <h1>
              MADE WITH
              <br />
              <span>INTENTION.</span>
            </h1>

          </div>

          <p className="cwp-intro-description">
            A collection of visual identities, creative explorations
            and ideas brought to life through design.
          </p>

        </div>

      </section>


      {/* =====================================
          02. ASYMMETRIC PROJECT GRID
      ===================================== */}

      <section
        className="cwp-project-grid"
        aria-label="Selected creative projects"
      >

        {projects.map((project) => (

          <article
            className={`cwp-project ${project.id === "avenlo-circuit" || project.id === "noven-desk" ? "cwp-wide" : "cwp-square"}`}
            key={project.id}
          >

            {/* PROJECT IMAGE */}

            <Link
              href={project.href}
              className="cwp-image-link"
              aria-label={`View ${project.name} project`}
            >

              <div className="cwp-image-wrapper">

                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes={
                    project.id === "avenlo-circuit" ||
                    project.id === "noven-desk"
                      ? "(max-width: 600px) 100vw, 66vw"
                      : "(max-width: 600px) 100vw, 33vw"
                  }
                  className="cwp-image"
                />

              </div>

            </Link>


            {/* PROJECT INFORMATION */}

            <div className="cwp-project-info">

              <div className="cwp-project-text">

                <h2>{project.name}</h2>

                <p>{project.category}</p>

              </div>


              {/* CIRCULAR SVG ARROW */}

              <Link
                href={project.href}
                className="cwp-project-arrow-link"
                aria-label={`Explore ${project.name}`}
              >
                <ProjectArrow label={project.name} />
              </Link>

            </div>

          </article>

        ))}

      </section>


      {/* =====================================
          03. BOTTOM LINE
      ===================================== */}

      <section className="cwp-bottom-line">

        <span>PEOPLE · IDEAS · CREATIONS</span>

        <span>THE SAI STORY</span>

      </section>

    </main>
  );
}
