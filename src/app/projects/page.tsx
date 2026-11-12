
import "./projects.css";

import Image from "next/image";
import { getAllProjects } from "../lib/projects";


const heartSkills = [
  { icon: "react.svg", invert: false },
  { icon: "next-js.svg", invert: false },
  { icon: "python.svg", invert: false },
  { icon: "adobe-photoshop.svg", invert: false },
  { icon: "javascript.svg", invert: false },
  { icon: "typescript.svg", invert: false },
  { icon: "java.svg", invert: false },
  { icon: "adobe-illustrator.svg", invert: false },
  { icon: "figma.svg", invert: false },
  { icon: "node-js.svg", invert: false },
  { icon: "react-native.svg", invert: false },
  { icon: "firebase-firestore.svg", invert: false },
  { icon: "mongodb.svg", invert: false },
  { icon: "adobe-premiere-pro.svg", invert: false },
  { icon: "tailwind-css.svg", invert: false },
  { icon: "fastapi.svg", invert: false },
  { icon: "tensorflow.svg", invert: false },
  { icon: "canva.svg", invert: false },
  { icon: "adobe-after-effects.svg", invert: false },
  { icon: "postgressql.svg", invert: false },
  { icon: "supabase.svg", invert: false },
  { icon: "github.svg", invert: true },
  { icon: "numpy.svg", invert: false },
  { icon: "pandas.svg", invert: false },
  { icon: "sql.svg", invert: false },
  { icon: "html-5.svg", invert: false },
  { icon: "css-3.svg", invert: false },
  { icon: "material-ui.svg", invert: false },
  { icon: "shadcn-ui.svg", invert: true },
  { icon: "expo.svg", invert: false },
  { icon: "android-studio.svg", invert: false },
  { icon: "prisma.svg", invert: false },
  { icon: "scikit-learn.svg", invert: false },
  { icon: "pytorch.svg", invert: false },
  { icon: "opencv.svg", invert: false },
  { icon: "matplotlib.svg", invert: false },
  { icon: "jupyter.svg", invert: false },
  { icon: "git.svg", invert: false },
  { icon: "vscode.svg", invert: false },
  { icon: "postman.svg", invert: false },
  { icon: "vercel.svg", invert: true },
  { icon: "ganache.svg", invert: false },
  { icon: "web3dotjs.svg", invert: false },
  { icon: "ethersdotjs.svg", invert: false },
  { icon: "powerbi.svg", invert: false },
  { icon: "microsoft-excel.svg", invert: false },
];


const heartPositions: [number, number][] = [
  // Row 1
  [1, 2], [1, 3], [1, 7], [1, 8],

  // Row 2
  [2, 1], [2, 2], [2, 3], [2, 4],
  [2, 6], [2, 7], [2, 8], [2, 9],

  // Row 3
  [3, 1], [3, 2], [3, 3], [3, 4], [3, 5],
  [3, 6], [3, 7], [3, 8], [3, 9],

  // Row 4
  [4, 1], [4, 2], [4, 3], [4, 4], [4, 5],
  [4, 6], [4, 7], [4, 8], [4, 9],

  // Row 5
  [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],
  [5, 7], [5, 8],

  // Row 6
  [6, 3], [6, 4], [6, 5], [6, 6], [6, 7],

  // Row 7
  [7, 4], [7, 5], [7, 6],

  // Row 8
  [8, 5],
];

function SkillsHeart() {
  return (
    <div className="projects-skills-heart">
      {heartSkills.map((skill, index) => (
        <div
          className="heart-skill-icon"
          key={`${skill.icon}-${index}`}
          style={{
            gridRow: heartPositions[index][0],
            gridColumn: heartPositions[index][1],
          }}
        >
          <Image
            src={`/assets/skills/${skill.icon}`}
            alt=""
            width={32}
            height={32}
            className={skill.invert ? "heart-icon-invert" : ""}
          />
        </div>
      ))}
    </div>
  );
}


export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="projects-page">
      
      {/* PROJECTS INTRODUCTION */}
      <section className="projects-intro">
        <div className="projects-intro-layout">

          {/* LEFT CONTENT */}
          <div className="projects-intro-content">
            <div className="projects-intro-topline">
              <span>THE COMPLETE COLLECTION</span>
            </div>

            <h1>
              ALL PROJECTS<span>.</span>
            </h1>

            <p>
              A collection of ideas transformed into experiences through
              technology, creativity, and continuous exploration.
            </p>

            <div className="projects-count">
              <span>{String(projects.length).padStart(2, "0")}</span>
              <span>PROJECTS IN THE COLLECTION</span>
            </div>
          </div>

          {/* RIGHT: SVG SKILLS HEART */}
          <SkillsHeart />

        </div>
      </section>


      {/* PROJECT COLLECTION */}
      <section className="projects-collection">
        <div className="projects-collection-heading">
          <div>
            <span className="projects-section-label">
              THE ARCHIVE
            </span>
            <h2>SELECTED &amp; EXPLORED.</h2>
          </div>

          <span className="projects-collection-total">
            {String(projects.length).padStart(2, "0")} ENTRIES
          </span>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-entry" key={project.id}>
              {/* PROJECT IMAGE */}
              <div className="project-entry-visual">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="project-entry-image"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span>
                      PROJECT / {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>
                      {project.language ?? "EXPLORATION"}
                    </strong>

                    <span className="placeholder-mark">TS.</span>
                  </div>
                )}

                <span className="project-entry-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className="project-entry-content">
                <div className="project-entry-meta">
                  <span>
                    {project.language ?? "MULTI-TECH"}
                  </span>

                  {project.featured && (
                    <span className="project-featured-label">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p className="project-entry-description">
                  {project.description ||
                    "No description available yet."}
                </p>

                {/* TECHNOLOGY TOPICS */}
                {project.topics.length > 0 && (
                  <div className="project-entry-topics">
                    {project.topics.slice(0, 5).map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                )}

                {/* PROJECT LINKS AND STATS */}
                <div className="project-entry-footer">
                  <div className="project-entry-stats">
                    <span>★ {project.stargazers_count}</span>
                    <span>⑂ {project.forks_count}</span>
                  </div>

                  <div className="project-entry-links">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </a>

                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LIVE PROJECT
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {projects.length === 0 && (
          <p className="projects-empty">
            No projects are available to display right now.
          </p>
        )}
      </section>
    </main>
  );
}
