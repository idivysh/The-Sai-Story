
import Image from "next/image";
import "./professional-experience.css";

const experiences = [
  {
    number: "01",
    company: "Winseed",
    tagline: "CREATIVE DESIGN & VISUAL COMMUNICATION",
    role: "Freelance Graphic Designer",
    type: "FREELANCE",
    duration: "APR 2025 — PRESENT",
    location: "HYBRID",
    description:
      "Creating visual designs that communicate ideas with clarity and purpose. Working on graphic design projects with a focus on visual storytelling, brand presentation and creative execution. Translating concepts into engaging visual outcomes.",
    tools: [
      "/assets/skills/adobe-photoshop.svg",
      "/assets/skills/adobe-illustrator.svg",
      "/assets/skills/adobe-indesign.svg",
      "/assets/skills/coreldraw.svg",
      "/assets/skills/adobe-premiere-pro.svg",
      "/assets/skills/adobe-after-effects.svg",
    ],
  },
  {
    number: "02",
    company: "Vijnah Studio",
    tagline: "BUILDING A CREATIVE BRAND",
    role: "Founder",
    type: "SELF-EMPLOYED",
    duration: "APR 2025 — PRESENT",
    location: "HYBRID",
    description:
      "Building a creative brand focused on graphic design, visual identity and digital experiences. Managing creative direction and developing visual concepts that bring ideas and brand identities to life.",
    tools: [
      "/assets/skills/adobe-photoshop.svg",
      "/assets/skills/adobe-illustrator.svg",
      "/assets/skills/adobe-indesign.svg",
      "/assets/skills/coreldraw.svg",
      "/assets/skills/adobe-premiere-pro.svg",
      "/assets/skills/adobe-after-effects.svg",
      "/assets/skills/canva.svg",
      "/assets/skills/figma.svg",
    ],
  },
  {
    number: "03",
    company: "Pi Dot",
    tagline: "DEVELOPING MODERN WEB EXPERIENCES",
    role: "Associate Intern — Web Development",
    type: "INTERNSHIP",
    duration: "JAN 2026 — MAR 2026",
    location: "HYBRID",
    description:
      "Worked on modern web development projects using frontend technologies and frameworks. Contributed to building responsive interfaces, developing reusable components and creating interactive web experiences.",
    tools: [
      "/assets/skills/next-js.svg",
      "/assets/skills/react.svg",
      "/assets/skills/typescript.svg",
      "/assets/skills/tailwind-css.svg",
      "/assets/skills/material-ui.svg",
      "/assets/skills/shadcn-ui.svg",
      "/assets/skills/firebase.svg",
    ],
  },
  {
    number: "04",
    company: "Street Cause",
    tagline: "LEADERSHIP, TEAMWORK & SOCIAL IMPACT",
    role: "Head of Digital & Volunteer",
    type: "VOLUNTEERING",
    duration: "JUL 2023 — JUN 2025",
    location: "HYDERABAD, INDIA",
    description:
      "Contributed to the organization's digital presence and social media activities. Took on leadership responsibilities within the digital team, while also participating in volunteer initiatives, event coordination and collaborative community activities.",
    tools: [
      "/assets/skills/adobe-photoshop.svg",
      "/assets/skills/adobe-illustrator.svg",
      "/assets/skills/adobe-indesign.svg",
      "/assets/skills/coreldraw.svg",
      "/assets/skills/adobe-premiere-pro.svg",
      "/assets/skills/adobe-after-effects.svg",
      "/assets/skills/canva.svg",
    ],
    roles: [
      {
        title: "Head of Digital",
        duration: "JUL 2024 — JUN 2025",
      },
      {
        title: "Volunteer",
        duration: "JUL 2023 — JUN 2024",
      },
    ],
  },
];

export default function ProfessionalExperience() {
  return (
    <section className="professional-experience-section">
      <div className="professional-experience-container">

        {/* SECTION DIVIDER */}
        <div className="professional-divider">
          <span />
        </div>

        {/* MAIN HEADING */}
        <div className="professional-heading">
          <h2>
            PROFESSIONAL EXPERIENCE<span>.</span>
          </h2>
          <p>
            THE ROLES, PEOPLE AND JOURNEYS THAT SHAPED MY PROFESSIONAL PATH.
          </p>
        </div>

        {/* EXPERIENCE ENTRIES */}
        <div className="professional-entries">
          {experiences.map((item) => (
            <article className="professional-entry" key={item.number}>

              {/* LEFT COLUMN */}
              <div className="professional-entry-left">
                <span className="professional-entry-number">
                  {item.number}
                </span>

                <h3>{item.company}</h3>

                <p className="professional-entry-tagline">
                  {item.tagline}
                </p>

                <div className="professional-entry-type">
                  {item.type}
                </div>

                <div className="professional-entry-dates">
                  <span>{item.duration}</span>
                  <span>{item.location}</span>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="professional-entry-right">

                <p className="professional-entry-description">
                  {item.description}
                </p>

                {item.roles && (
                  <div className="professional-role-list">
                    {item.roles.map((role) => (
                      <div
                        className="professional-role-line"
                        key={role.title}
                      >
                        <span>{role.title}</span>
                        <span>{role.duration}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* TOOL SVG LOGOS */}
                {item.tools.length > 0 && (
                  <div className="professional-tool-logos">
                    {item.tools.map((tool) => (
                        <div
                        key={tool}
                        className={`professional-tool-icon ${
                            tool.includes("shadcn-ui.svg") ? "invert-shadcn" : ""
                        }`}
                        >
                        <Image
                            src={tool}
                            alt="Software tool"
                            width={28}
                            height={28}
                        />
                        </div>
                    ))}
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
