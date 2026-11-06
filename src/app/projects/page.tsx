
import "./projects.css";

import Image from "next/image";
import { getAllProjects } from "../lib/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="projects-page">
      {/* PROJECTS INTRODUCTION */}
      <section className="projects-intro">
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
      </section>

      {/* PROJECT COLLECTION */}
      <section className="projects-collection">
        <div className="projects-collection-heading">
          <div>
            <span className="projects-section-label">
              01 / THE ARCHIVE
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
