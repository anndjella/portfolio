// src/components/Projects.jsx
export default function Projects({ text }) {
  return (
    <section id="projects" className="section section-card">
      <h2>{text.sections.projectsTitle}</h2>
      <p className="section-text">{text.projectsLead}</p>

      <div className="projects-list">
        {text.projects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-header">
              <h3>{p.name}</h3>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer">
                  {text.viewOnGitHub}
                </a>
              )}
            </div>
            <p className="project-desc">{p.desc}</p>
            <p className="project-tech">{p.tech}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
