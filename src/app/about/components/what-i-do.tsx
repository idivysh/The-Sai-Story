import "./what-i-do.css";

const roles = [
  {
    number: "01",
    title: "DEVELOPER",
    description:
      "Turning ideas into functional digital experiences through code.",
    detail: "SOFTWARE DEVELOPMENT · AIML · WEB & APP DEVELOPMENT",
    color: "blue",
  },
  {
    number: "02",
    title: "DESIGNER",
    description:
      "Communicating ideas through thoughtful visuals and design.",
    detail: "VISUAL IDENTITY · GRAPHIC DESIGN",
    color: "gold",
  },
  {
    number: "03",
    title: "CREATOR",
    description:
      "Exploring concepts and creating content that connects with people.",
    detail: "CONTENT · STORYTELLING",
    color: "silver",
  },
  {
    number: "04",
    title: "FOUNDER",
    description:
      "Building Vijnah Studio and exploring opportunities to bring creative ideas to life.",
    detail: "VIJNAH STUDIO · DIGITAL EXPERIENCES",
    color: "red",
  },
];

export default function WhatIDo() {
  return (
    <section className="what-i-do-section" id="what-i-do">
        {/* Top divider */}
        <div className="what-i-do-divider">
        <span />
        </div>
        {/* Heading */}
        <div className="what-i-do-heading">
          <p className="what-i-do-eyebrow">
            DIFFERENT SKILLS. ONE CREATIVE MINDSET.
          </p>

          <h2>
            WHAT I DO<span>.</span>
          </h2>

          <p className="what-i-do-intro">
            I don't like limiting myself to just one label. I enjoy
            exploring different dimensions of creativity and technology.
          </p>
        </div>

        {/* Role cards */}
        <div className="what-i-do-grid">
          {roles.map((role) => (
            <article
              className={`what-i-do-card what-i-do-${role.color}`}
              key={role.number}
            >
              <div className="what-i-do-card-top">
                <span className="what-i-do-number">{role.number}</span>
                <span className="what-i-do-indicator" />
              </div>

              <div className="what-i-do-card-content">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>

              <div className="what-i-do-card-footer">
                <span>{role.detail}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <p className="what-i-do-closing">
          Each role gives me a different perspective, and together they
          shape the way I approach my work.
        </p>

    </section>
  );
}