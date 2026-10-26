
import Image from "next/image";
import Link from "next/link";
import { getSelectedProjects } from "../lib/projects";
import type { GitHubRepository } from "../lib/github";
import type { ProjectConfig } from "../lib/projects.config";
import "./featured-projects.css";

type SelectedProject = GitHubRepository &
  Pick<ProjectConfig, "featured" | "order"> & {
    title: string;
    description: string;
    image?: string;
  };

export default async function FeaturedProjects() {
  let projects: SelectedProject[] = [];

  try {
    projects = (await getSelectedProjects())
      .filter((project) => project.featured)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Unable to load featured GitHub projects:", error);
  }

  return (
    <section className="featured-projects section" id="projects">
      <div className="featured-projects-side-label">
        <span>THE SAI STORY</span>
        <span className="featured-projects-side-line" />
        <span>MY PROJECTS</span>
      </div>

      <div className="featured-projects-container">
        
        <div className="featured-projects-topline">
            <span className="featured-projects-number">
                03 / <span className="selected-work">SELECTED WORK</span>
            </span>
            </div>

            <div className="featured-projects-heading">
            <p className="featured-projects-eyebrow">
                IDEAS. CODE. REAL-WORLD IMPACT.
            </p>

            <h2>
                FEATURED PROJECTS<span className="featured-projects-heading-dot">.</span>
            </h2>

            <p className="featured-projects-intro">
                A selection of projects where technology, creativity, and
                problem-solving come together.
            </p>
        </div>

        {projects.length > 0 ? (
          <div className="featured-projects-grid">
            {projects.map((project) => (
              <article
                className="featured-project-card"
                key={project.id}
              >
                <Link
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-project-image-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project cover`}
                      width={1200}
                      height={800}
                      className="featured-project-image"
                    />
                  ) : (
                    <div className="featured-project-image-placeholder">
                      {project.title}
                    </div>
                  )}

                  <span className="featured-project-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12.0678 2.14611C12.3883 2.00663 12.7431 1.96564 13.0874 2.02906C13.4316 2.09244 13.7478 2.25698 13.9973 2.49935L22.459 10.7164C22.6312 10.8837 22.7672 11.0838 22.8599 11.3041C22.9525 11.5244 23 11.7609 23 11.9994C23 12.238 22.9525 12.4744 22.8599 12.6947C22.7672 12.9151 22.6309 13.1154 22.4587 13.2827L13.9972 21.4997C13.7476 21.742 13.4316 21.9064 13.0874 21.9698C12.7431 22.0332 12.3883 21.9922 12.0678 21.8528C11.7474 21.7134 11.4771 21.4826 11.2883 21.1916C11.0997 20.9008 11.0001 20.5617 11 20.2164L11 17.0208C8.70545 17.1206 7.26436 17.5717 6.17555 18.2297C4.90572 18.9971 4.01283 20.0973 2.77837 21.6278C2.5122 21.9578 2.06688 22.0841 1.66711 21.943C1.26733 21.8018 1 21.424 1 21C1 17.4414 1.5013 13.9586 3.15451 11.341C4.72577 8.85318 7.25861 7.26795 11 7.03095L11 3.78241C11.0001 3.43711 11.0997 3.09808 11.2883 2.80727C11.4771 2.51629 11.7474 2.2855 12.0678 2.14611Z"
                        fill="#00a8ff"
                      />
                    </svg>
                  </span>
                </Link>

                <div className="featured-project-content">
                  <div className="featured-project-meta">
                    <span>{project.language ?? "Development"}</span>
                    <span>
                      {project.stargazers_count}{" "}
                      {project.stargazers_count === 1 ? "STAR" : "STARS"}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {project.topics.length > 0 && (
                    <div className="featured-project-topics">
                      {project.topics.slice(0, 4).map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                  )}

                  <div className="featured-project-actions">
                    <Link
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-project-link"
                    >
                      VIEW ON GITHUB
                    </Link>

                    
                    {project.homepage?.trim() && (
                    <Link
                        href={
                        /^https?:\/\//i.test(project.homepage.trim())
                            ? project.homepage.trim()
                            : `https://${project.homepage.trim()}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-project-link featured-project-live-link"
                    >
                        LIVE WEBSITE
                    </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="featured-projects-empty">
            Projects are temporarily unavailable. Please check back soon.
          </p>
        )}

        <div className="featured-projects-footer">
          <Link
            href="/projects"
            className="featured-projects-all-link"
          >
            EXPLORE ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
