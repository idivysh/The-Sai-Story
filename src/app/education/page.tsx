
"use client";

import "./education.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContactSection from "./components/contact-section";

export default function EducationPage() {
  const [activeAcademic, setActiveAcademic] = useState(0);

  const academicRefs = useRef<(HTMLElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveAcademic = () => {
      const activationLine = window.innerHeight * 0.42;
      let activeIndex = 0;

      academicRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();

        if (rect.top <= activationLine) {
          activeIndex = index;
        }
      });

      setActiveAcademic((current) =>
        current === activeIndex ? current : activeIndex
      );
    };

    const handleScroll = () => {
      if (animationFrameRef.current !== null) return;

      animationFrameRef.current = window.requestAnimationFrame(() => {
        updateActiveAcademic();
        animationFrameRef.current = null;
      });
    };

    updateActiveAcademic();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <main className="education-page">

        {/* =====================================
            SECTION 01 — INTRODUCTION
        ===================================== */}

        <section className="education-hero">
            <div className="education-hero-container">

            <div className="education-hero-content">
                <p className="education-hero-eyebrow">
                KNOWLEDGE <span>·</span> CURIOSITY <span>·</span> GROWTH
                </p>

                <h1>
                BUILT THROUGH
                <br />
                LEARNING<span>.</span>
                </h1>

                <p className="education-hero-description">
                Every chapter of my education has shaped the way I think,
                create, solve problems, and approach new challenges.
                From foundational learning to exploring technology,
                each experience has contributed to the person and
                professional I am becoming.
                </p>

                <div className="education-hero-bottom">
                <span className="education-hero-bottom-line" />
                <p>MY ACADEMIC JOURNEY · 2019 — 2026</p>
                </div>
            </div>

            <div className="education-hero-visual">
                <div className="education-visual-orbit orbit-one" />
                <div className="education-visual-orbit orbit-two" />
                <div className="education-visual-glow" />

                <div className="education-visual-card">
                <div className="education-visual-card-top">
                    <span>THE PURSUIT OF</span>
                    <span>01 — 26</span>
                </div>

                <div className="education-visual-letter">E</div>

                <div className="education-visual-card-bottom">
                    <h3>KNOWLEDGE</h3>
                    <p>LEARN / EXPLORE / EVOLVE</p>
                </div>
                </div>

                <div className="education-visual-label label-top">
                <span className="label-dot" />
                CONTINUOUS GROWTH
                </div>

                <div className="education-visual-label label-bottom">
                EST. THROUGH EXPERIENCE
                </div>
            </div>

            </div>
        </section>

        {/* =====================================
            SECTION 02 — ACADEMIC JOURNEY
        ===================================== */}

        <section
            className="academic-journey-section"
            id="academic-journey"
        >
            <div className="academic-journey-container">

            <div className="academic-journey-divider">
                <span />
            </div>

            <div className="academic-journey-heading">
                <h2>
                THE ACADEMIC
                <br />
                JOURNEY<span>.</span>
                </h2>

                <p className="academic-journey-tagline">
                EVERY MILESTONE. A NEW PERSPECTIVE.
                </p>
            </div>

            <div className="academic-timeline">

                {/* B.TECH */}

                <article
                ref={(el) => {
                    academicRefs.current[0] = el;
                }}
                className={`academic-item ${
                    activeAcademic === 0 ? "active" : ""
                }`}
                >
                <div className="academic-item-marker">
                    <span />
                </div>

                <div className="academic-item-content">
                    <div className="academic-item-meta">
                    <span className="academic-year">2022 — 2026</span>
                    <span className="academic-level">01 / GRADUATED</span>
                    </div>

                    <div className="academic-details">
                    <div className="academic-logo">
                        <Image
                        src="/assets/education/st-martins.png"
                        alt="St. Martin's Engineering College logo"
                        width={100}
                        height={100}
                        />
                    </div>

                    <div className="academic-info">
                        <h3>BACHELOR OF TECHNOLOGY</h3>
                        <h4>St. Martin's Engineering College</h4>

                        <p className="academic-course">
                        Artificial Intelligence and Machine Learning
                        </p>

                        <div className="academic-item-footer">
                        <span>CGPA</span>
                        <strong>8.69</strong>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="academic-item-index">01</div>
                </article>

                {/* INTERMEDIATE */}

                <article
                ref={(el) => {
                    academicRefs.current[1] = el;
                }}
                className={`academic-item ${
                    activeAcademic === 1 ? "active" : ""
                }`}
                >
                <div className="academic-item-marker">
                    <span />
                </div>

                <div className="academic-item-content">
                    <div className="academic-item-meta">
                    <span className="academic-year">2020 — 2022</span>
                    <span className="academic-level">02 / INTERMEDIATE</span>
                    </div>

                    <div className="academic-details">
                    <div className="academic-logo">
                        <Image
                        src="/assets/education/narayana-junior-college.png"
                        alt="Narayana Junior College logo"
                        width={100}
                        height={100}
                        />
                    </div>

                    <div className="academic-info">
                        <h3>INTERMEDIATE EDUCATION</h3>
                        <h4>Narayana Junior College</h4>

                        <p className="academic-course">
                        Mathematics, Physics and Chemistry (MPC)
                        </p>

                        <div className="academic-item-footer">
                        <span>PERCENTAGE</span>
                        <strong>89.1%</strong>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="academic-item-index">02</div>
                </article>

                {/* SECONDARY */}

                <article
                ref={(el) => {
                    academicRefs.current[2] = el;
                }}
                className={`academic-item ${
                    activeAcademic === 2 ? "active" : ""
                }`}
                >
                <div className="academic-item-marker">
                    <span />
                </div>

                <div className="academic-item-content">
                    <div className="academic-item-meta">
                    <span className="academic-year">2019 — 2020</span>
                    <span className="academic-level">03 / SECONDARY</span>
                    </div>

                    <div className="academic-details">
                    <div className="academic-logo">
                        <Image
                        src="/assets/education/narayana-high-school.png"
                        alt="Narayana High School logo"
                        width={100}
                        height={100}
                        />
                    </div>

                    <div className="academic-info">
                        <h3>SECONDARY SCHOOL CERTIFICATE</h3>
                        <h4>Narayana High School</h4>

                        <p className="academic-course">
                        General Education
                        </p>

                        <div className="academic-item-footer">
                        <span>GPA</span>
                        <strong>10.0</strong>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="academic-item-index">03</div>
                </article>

            </div>

            <div className="academic-journey-bottom-accent">
                <span />
            </div>

            </div>
        </section>

      

        {/* =====================================
            SECTION 03 — BEYOND THE CLASSROOM
        ===================================== */}

        <section
        className="beyond-classroom-section"
        id="beyond-classroom"
        >
        <div className="beyond-classroom-container">

            <div className="beyond-classroom-divider">
            <span />
            </div>

            <div className="beyond-classroom-layout">

            {/* LEFT — HEADING AND DESCRIPTION */}
            <div className="beyond-classroom-copy">

                <div className="beyond-classroom-heading">
                <h2>
                    BEYOND THE
                    <br />
                    CLASSROOM<span>.</span>
                </h2>

                <p>
                    LEARNING DOESN&apos;T STOP WHERE THE CLASSROOM ENDS.
                </p>
                </div>

                <p className="beyond-classroom-description">
                I believe education extends beyond textbooks, classrooms,
                and academic milestones. It is about exploring ideas,
                experimenting with technologies, and transforming knowledge
                into meaningful experiences.
                </p>

            </div>

            {/* RIGHT — THREE LEARNING CARDS */}
            <div className="beyond-panels">

                <article className="beyond-panel beyond-panel-large">
                <div className="beyond-panel-top">
                    <span className="beyond-panel-index">01</span>
                    <span className="beyond-panel-label">
                    PRACTICAL EXPERIENCE
                    </span>
                </div>

                <div className="beyond-panel-watermark">01</div>

                <div className="beyond-panel-content">
                    <h4>
                    PROJECT-DRIVEN
                    <br />
                    LEARNING.
                    </h4>

                    <p>
                    Exploring concepts through practical projects,
                    experimenting with ideas, and learning to solve
                    problems through implementation.
                    </p>

                    <div className="beyond-panel-tags">
                    <span>Development</span>
                    <span>Problem Solving</span>
                    </div>
                </div>
                </article>

                <article className="beyond-panel">
                <div className="beyond-panel-top">
                    <span className="beyond-panel-index">02</span>
                    <span className="beyond-panel-label">
                    DATA EXPLORATION
                    </span>
                </div>

                <div className="beyond-panel-watermark">02</div>

                <div className="beyond-panel-content">
                    <h4>
                    DISCOVERING
                    <br />
                    THROUGH DATA.
                    </h4>

                    <p>
                    Exploring datasets, identifying patterns,
                    and transforming information into useful insights.
                    </p>

                    <div className="beyond-panel-tags">
                    <span>Python</span>
                    <span>Pandas</span>
                    </div>
                </div>
                </article>

                <article className="beyond-panel">
                <div className="beyond-panel-top">
                    <span className="beyond-panel-index">03</span>
                    <span className="beyond-panel-label">
                    PERSONAL GROWTH
                    </span>
                </div>

                <div className="beyond-panel-watermark">03</div>

                <div className="beyond-panel-content">
                    <h4>
                    ALWAYS
                    <br />
                    EVOLVING.
                    </h4>

                    <p>
                    Independently exploring new technologies,
                    tools, and creative approaches while continuously
                    expanding my knowledge.
                    </p>

                    <div className="beyond-panel-tags">
                    <span>Self Learning</span>
                    <span>Curiosity</span>
                    </div>
                </div>
                </article>

            </div>
            </div>

            {/* CLOSING STATEMENT */}
            <div className="beyond-closing">
            <span className="beyond-closing-accent" />

            <p>
                THE CLASSROOM BUILDS THE FOUNDATION.
                <strong> CURIOSITY TAKES IT FURTHER.</strong>
            </p>

            </div>

        </div>
        </section>






        {/* =====================================
            SECTION 04 — AREAS OF INTEREST
        ===================================== */}

        <section
        className="interest-section"
        id="areas-of-interest"
        >
        <div className="interest-container">

            <div className="interest-divider">
            <span />
            </div>

            <div className="interest-layout">

            {/* LEFT — HEADING AND DESCRIPTION */}
            <div className="interest-copy">

                <div className="interest-heading">
                <h2>
                    AREAS OF
                    <br />
                    INTEREST<span>.</span>
                </h2>

                <p>
                    THE FIELDS THAT SPARK MY CURIOSITY.
                </p>
                </div>

                <p className="interest-extra-description">
                Beyond technology and creativity, there's a lot more that makes
                me who I am. I find joy in music, exploring different foods,
                playing games, discovering new places and experiencing the
                little things that make life interesting. Whether it's trying
                something new, enjoying a good melody, experimenting in the
                kitchen or simply taking time to explore, I believe inspiration
                can come from anywhere. For me, learning isn't limited to a
                field or a profession — it's a part of everyday life.
                </p>

            </div>

            {/* RIGHT — FIVE AREAS OF INTEREST */}
            <div className="interest-list">

                <article className="interest-item">
                <span className="interest-number">01</span>

                <div className="interest-item-content">
                    <h4>ARTIFICIAL INTELLIGENCE</h4>
                    <p>
                    Exploring intelligent systems, machine learning
                    concepts, and practical AI applications.
                    </p>
                </div>
                </article>

                <article className="interest-item">
                <span className="interest-number">02</span>

                <div className="interest-item-content">
                    <h4>DATA SCIENCE &amp; ANALYTICS</h4>
                    <p>
                    Discovering patterns, analysing information,
                    and transforming data into meaningful insights.
                    </p>
                </div>
                </article>

                <article className="interest-item">
                <span className="interest-number">03</span>

                <div className="interest-item-content">
                    <h4>SOFTWARE DEVELOPMENT</h4>
                    <p>
                    Building useful applications through programming,
                    logical thinking, and problem-solving.
                    </p>
                </div>
                </article>

                <article className="interest-item">
                <span className="interest-number">04</span>

                <div className="interest-item-content">
                    <h4>WEB &amp; APP DEVELOPMENT</h4>
                    <p>
                    Creating interactive digital experiences through
                    modern web and application technologies.
                    </p>
                </div>
                </article>

                <article className="interest-item">
                <span className="interest-number">05</span>

                <div className="interest-item-content">
                    <h4>CREATIVE TECHNOLOGY</h4>
                    <p>
                    Bringing creativity and technology together
                    through design, visual storytelling, and digital ideas.
                    </p>
                </div>
                </article>

            </div>
            </div>

            {/* CLOSING STATEMENT */}
            <div className="interest-closing">
            <span className="interest-closing-accent" />

            <p>
                CURIOSITY OPENS DOORS.
                <strong> EXPLORATION CREATES POSSIBILITIES.</strong>
            </p>
            </div>

        </div>
        </section>


        <ContactSection />


    </main>
  );
}
