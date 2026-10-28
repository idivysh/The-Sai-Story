
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./education.css";


const education = [
  {
    id: "btech",
    number: "01",
    level: "BACHELOR'S DEGREE",
    institution: "St. Martin's Engineering College",
    qualification: "Bachelor of Technology",
    specialization: "Artificial Intelligence and Machine Learning",
    dates: "2022 — 2026",
    grade: "8.69",
    gradeLabel: "CGPA",
    logo: "/assets/education/st-martins.png",
    featured: true,
  },
  {
    id: "intermediate",
    number: "02",
    level: "INTERMEDIATE",
    institution: "Narayana Junior College",
    qualification: "Telangana State Board of Intermediate Education",
    specialization: "MPC",
    dates: "2020 — 2022",
    grade: "89.1",
    gradeLabel: "%",
    logo: "/assets/education/narayana-junior-college.png",
    featured: false,
  },
  {
    id: "school",
    number: "03",
    level: "SECONDARY EDUCATION",
    institution: "Narayana High School",
    qualification: "Secondary School Certificate",
    specialization: "General Education",
    dates: "2019 — 2020",
    grade: "10",
    gradeLabel: "GPA",
    logo: "/assets/education/narayana-high-school.png",
    featured: false,
  },
];


export default function Education() {
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
      id="education"
      className={`education-section${
        visible ? " education-visible" : ""
      }`}
      aria-labelledby="education-heading"
    >
      <div
        className="education-side-label"
        aria-label="The Sai Story — My Education"
      >
        <span>THE SAI STORY</span>
        <span className="education-side-line" />
        <span>THE FOUNDATION</span>
      </div>

      <div className="education-container">
        <div className="education-topline">
          <span>
            05 / <span>EDUCATION</span>
          </span>
          <span className="education-topline-caption">
            
          </span>
        </div>

        <header className="education-heading">
          <p className="education-eyebrow">
            LEARNING. GROWING. EVOLVING.
          </p>

          <h2 id="education-heading">
            THE KNOWLEDGE
            <br />
            BEHIND THE STORY<span>.</span>
          </h2>

          <p className="education-intro">
            Every chapter of my education has shaped the way I think,
            create, solve problems, and approach new challenges.
          </p>
        </header>

        <div className="education-list">
          {education.map((item) => (
            <article
              className={`education-card${
                item.featured ? " education-card-featured" : ""
              }`}
              key={item.id}
            >
              <div className="education-card-number">
                {item.number}
              </div>

              <div className="education-institution-mark">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    width={76}
                    height={76}
                    className="education-logo"
                  />
                ) : (
                  <span className="education-mark-fallback">
                    {item.id === "intermediate" ? "02" : "03"}
                  </span>
                )}
              </div>

              <div className="education-card-content">
                <div className="education-card-meta">
                  <span className="education-level">
                    {item.level}
                  </span>
                  <span className="education-dates">
                    {item.dates}
                  </span>
                </div>

                <h3>{item.institution}</h3>

                <p className="education-qualification">
                  {item.qualification}
                </p>

                <p className="education-specialization">
                  {item.specialization}
                </p>
              </div>

              <div className="education-grade">
                <span className="education-grade-label">
                  {item.id === "btech"
                    ? "FINAL CGPA"
                    : item.id === "intermediate"
                      ? "PERCENTAGE"
                      : "FINAL GRADE"}
                </span>

                <div className="education-grade-value">
                  {item.grade}
                  <span>{item.gradeLabel}</span>
                </div>
              </div>

              <span
                className="education-card-accent"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <div className="education-footer">
          <span className="education-footer-dot" />
          <p>THREE CHAPTERS. ONE CONTINUOUS JOURNEY.</p>
        </div>
      </div>
    </section>
  );
}
