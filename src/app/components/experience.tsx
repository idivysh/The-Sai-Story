
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./experience.css";

const experiences = [
  {
    id: "winseed",
    role: "Freelance Graphic Designer",
    company: "Winseed",
    logo: "/assets/experience/winseed.png",
    employment: "Freelance",
    dates: "APR 2025 — PRESENT",
    location: "Hybrid",
    category: "DESIGN",
    description:
      "Freelance graphic design work focused on visual communication and creative design.",
    skills: ["Photoshop", "Illustrator", "Graphic Design"],
  },
  {
    id: "vijnah",
    role: "Founder",
    company: "Vijnah Media",
    logo: "/assets/experience/vijnah-studio.png",
    employment: "Freelance",
    dates: "APR 2025 — PRESENT",
    location: "Hybrid",
    category: "ENTREPRENEURSHIP",
    description:
      "Building a creative brand focused on graphic design, visual identity, and digital experiences.",
    skills: ["Creative Direction", "Visual Identity", "Graphic Design"],
  },
  {
    id: "pidot",
    role: "Associate Intern — Web Development",
    company: "Pi Dot",
    logo: "/assets/experience/pi-dot.png",
    employment: "Internship",
    dates: "JAN 2026 — MAR 2026",
    location: "Hybrid",
    category: "DEVELOPMENT",
    description:
      "Worked on web development using modern frontend technologies and frameworks.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "streetcause-digital",
    role: "Head of Digital",
    company: "Street Cause",
    logo: "/assets/experience/street-cause.png",
    employment: "Volunteer leadership",
    dates: "JUL 2024 — JUN 2025",
    location: "Hyderabad, India",
    category: "LEADERSHIP",
    description:
      "Contributed to digital strategy and social media management as part of the organization.",
    skills: ["Digital Strategy", "Social Media Management"],
  },
  {
    id: "streetcause-volunteer",
    role: "Volunteer",
    company: "Street Cause",
    logo: "/assets/experience/street-cause.png",
    employment: "Volunteer",
    dates: "JUL 2023 — JUN 2024",
    location: "Hyderabad, India",
    category: "COMMUNITY",
    description:
      "Participated in volunteer activities involving event coordination and teamwork.",
    skills: ["Event Coordination", "Teamwork"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`experience-section${visible ? " experience-visible" : ""}`}
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div
        className="experience-side-label"
        aria-label="The Sai Story — My Experience"
      >
        <span>THE SAI STORY</span>
        <span className="experience-side-line" />
        <span>THE JOURNEY</span>
      </div>

      <div className="experience-container">
        <div className="experience-topline">
          <span>
            04 / <span>EXPERIENCE</span>
          </span>
        </div>

        <header className="experience-heading">
          <p className="experience-eyebrow">
            BUILDING. CREATING. CONTRIBUTING.
          </p>

          <h2 id="experience-heading">
            THE JOURNEY SO FAR
            <span className="experience-heading-dot">.</span>
          </h2>

          <p className="experience-intro">
            A journey through development, design, entrepreneurship, and
            community involvement.
          </p>
        </header>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience-entry" key={item.id}>
              <div className="experience-marker" aria-hidden="true">
                <span />
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <span className="experience-category">
                    {item.category}
                  </span>
                  <span className="experience-dates">
                    {item.dates}
                  </span>
                </div>

                <div className="experience-card-main">
                  <div className="experience-logo-wrap">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={64}
                      height={64}
                      className="experience-logo"
                    />
                  </div>

                  <div className="experience-card-content">
                    <span className="experience-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item.role}</h3>

                    <p className="experience-company">
                      {item.company}
                      <span> · {item.employment}</span>
                    </p>

                    <p className="experience-location">
                      {item.location}
                    </p>

                    <p className="experience-description">
                      {item.description}
                    </p>

                    <div className="experience-skills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
