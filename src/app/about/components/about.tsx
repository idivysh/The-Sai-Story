"use client";

import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Vertical side label */}
      <div className="about-side-label" aria-label="The Sai Story — The Creator">
        <span>THE SAI STORY</span>
        <span className="about-side-line" />
        <span>THE CREATOR</span>
      </div>

      <div className="about-container">
        <div className="about-main">
          {/* Introduction content */}
          <div className="about-content">
            <p className="about-eyebrow">
              A CREATIVE MIND. A TECHNICAL APPROACH. A STORY STILL UNFOLDING.
            </p>

            <h1 className="about-heading">
              THE PERSON
              BEHIND THE
              <span> WORK</span>
              <span className="about-dot">.</span>
            </h1>

            <div className="about-copy">
              <p>
                I'm{" "}
                <strong className="about-keyword">
                  Divyamsh Sai Vengala
                </strong>{" "}
                — a developer, designer, creator and the mind behind{" "}
                <strong className="about-highlight">
                  Vijnah Studio
                </strong>
                .
              </p>

              <p>
                I enjoy bringing ideas to life by combining technology,
                creativity and thoughtful design. Whether I'm building a
                digital experience, exploring a new concept or creating
                something visually meaningful, I believe every creation
                should have a purpose and a story behind it.
              </p>

              <p>
                This is more than a portfolio. It's a reflection of the
                person behind the work.
              </p>
            </div>
          </div>

          {/* Personal portrait */}
          <div className="about-visual">
            <Image
              src="/assets/about-myimage.png"
              alt="Divyamsh Sai — personal brand portrait"
              width={900}
              height={1350}
              priority
              sizes="(max-width: 768px) 90vw, 42vw"
              className="about-myimage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}