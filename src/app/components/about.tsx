
"use client";

import Image from "next/image";
import Link from "next/link";
import "./about.css";

const roles = [
  {
    title: "DEVELOPER",
    details: ["Software · AI/ML", "Web & Apps"],
    color: "blue",
  },
  {
    title: "DESIGNER",
    details: ["Visual Identity", "Graphic Design"],
    color: "gold",
  },
  {
    title: "CREATOR",
    details: ["Content", "Storytelling"],
    color: "silver",
  },
  {
    title: "FOUNDER",
    details: ["Vijnah Studio", "Digital Experiences"],
    color: "red",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-topline">
          <span>
            01 / <span>ABOUT ME</span>
          </span>
          <span className="about-brand">THE SAI STORY</span>
        </div>

        <div className="about-main">
          <div className="about-content">
            <p className="about-eyebrow">
              THE MIND BEHIND THE VISION
            </p>

            <h2 className="about-heading">
              TECHNOLOGY
              <br />
              <span>MEETS CREATIVITY.</span>
            </h2>

            <div className="about-copy">
              <p>
                I&apos;m <strong className="about-keyword">Divyamsh Sai Vengala</strong> — a{" "}
                <strong className="about-keyword">developer</strong>,{" "}
                <strong className="about-keyword">designer</strong>,{" "}
                <strong className="about-keyword">content creator</strong>, and founder of{" "}
                <strong className="about-highlight">Vijnah Studio</strong>, passionate
                about turning ideas into meaningful digital experiences.
                </p>

                <p>
                With a background in{" "}
                <strong className="about-keyword-blue">
                    Artificial Intelligence and Machine Learning
                </strong>
                , I explore{" "}
                <strong className="about-keyword">software development</strong>,{" "}
                <strong className="about-keyword">web and app development</strong>, and
                emerging technologies. Through Vijnah Studio, I bring my creative vision
                to life by exploring{" "}
                <strong className="about-keyword-blue">
                    visual identity and graphic design
                </strong>
                , and digital experiences.
                </p>

                <p>
                I enjoy combining{" "}
                <strong className="about-keyword">technical problem-solving</strong> with{" "}
                <strong className="about-keyword">creative thinking</strong> to build
                useful products, craft compelling visuals, and transform ideas into reality.
                </p>

                <p>
                Driven by{" "}
                <strong className="about-keyword">
                    curiosity, continuous learning, and an entrepreneurial mindset
                </strong>
                , I aim to create work that is not just functional, but{" "}
                <strong className="about-highlight">
                    thoughtful, impactful, and memorable
                </strong>
                .
              </p>
            </div>

            <blockquote className="about-quote">
              I believe the best creations happen when{" "}
              <span>technology meets imagination.</span>
            </blockquote>
          </div>

          <div className="about-visual">
            <Image
              src="/assets/about-myimage.png"
              alt="Divyamsh Sai — personal brand portrait"
              width={900}
              height={1350}
              sizes="(max-width: 768px) 90vw, 42vw"
              className="about-myimage"
            />
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-roles">
            {roles.map((role) => (
              <div
                className={`about-role about-role-${role.color}`}
                key={role.title}
              >
                <span className="about-role-dot" aria-hidden="true" />

                <div>
                  <h3>{role.title}</h3>
                  {role.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/about" className="about-cta">
            MORE ABOUT MY JOURNEY
          </Link>
        </div>
      </div>
    </section>
  );
}
