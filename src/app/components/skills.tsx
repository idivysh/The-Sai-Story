
"use client";

import "./skills.css";


const skills = [
  { name: "Python", logo: "/assets/skills/python.svg" },
  { name: "Java", logo: "/assets/skills/java.svg" },
  { name: "JavaScript", logo: "/assets/skills/javascript.svg" },
  { name: "TypeScript", logo: "/assets/skills/typescript.svg" },
  { name: "React", logo: "/assets/skills/react.svg" },
  { name: "Next.js", logo: "/assets/skills/next-js.svg"},
  { name: "React Native", logo: "/assets/skills/react-native.svg" },
  { name: "Node.js", logo: "/assets/skills/node-js.svg" },
  { name: "TensorFlow", logo: "/assets/skills/tensorflow.svg" },
  { name: "PyTorch", logo: "/assets/skills/pytorch.svg" },
  { name: "Scikit-learn", logo: "/assets/skills/scikit-learn.svg" },
  { name: "Pandas", logo: "/assets/skills/pandas.svg" },
  { name: "Photoshop", logo: "/assets/skills/adobe-photoshop.svg" },
  { name: "Illustrator", logo: "/assets/skills/adobe-illustrator.svg" },
  { name: "InDesign", logo: "/assets/skills/adobe-indesign.svg" },
  { name: "CorelDRAW", logo: "/assets/skills/coreldraw.svg" },
  { name: "Canva", logo: "/assets/skills/canva.svg" },
  { name: "Premiere Pro", logo: "/assets/skills/adobe-premiere-pro.svg" },
  { name: "After Effects", logo: "/assets/skills/adobe-after-effects.svg" },
];


export default function Skills() {
  // Duplicate the list for a seamless scrolling loop.
  const scrollingSkills = [...skills, ...skills];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-topline">
          <span>
            02 / <span>SKILLS</span>
          </span>
          <span className="skills-label">WHAT I WORK WITH</span>
        </div>

        <div className="skills-heading">
          <p className="skills-eyebrow">CODE. DATA. DESIGN. CREATIVITY.</p>
          <h2>MY TOOLKIT<span>.</span></h2>
          <p className="skills-description">
            Technologies and creative tools I use to bring ideas to life.
          </p>
        </div>
      </div>

      <div className="skills-marquee" aria-label="Skills and tools">
        <div className="skills-track">
          {scrollingSkills.map((skill, index) => (
            <div
              className="skill-item"
              key={`${skill.name}-${index}`}
              aria-hidden={index >= skills.length}
            >
              <div className="skill-logo-wrap">
                <img
                  src={skill.logo}
                  alt=""
                  className="skill-logo"
                  loading="lazy"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
