// src/components/Projects.jsx
export default function Projects({ text }) {
  return (
    <section id="projects" className="section section-card">
      <h2>{text.sections.projectsTitle}</h2>
      <p className="section-text">{text.projectsLead}</p>

      <div className="projects-timeline">
        {text.projects.map((p, index) => (
          <article className="project-item" key={p.name}>
            <div className="project-marker">
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{p.name}</h3>
                <div className="project-links">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-demo"
                    >
                      Demo
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                  {p.linkLabel || text.viewOnGitHub}
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-tech-chips">
                {p.tech.split(",").map((t) => {
                  const label = t.trim();
                  return (
                    <span key={label} className="tech-chip">
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


