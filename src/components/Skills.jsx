// src/components/Skills.jsx
export default function Skills({ text }) {
  return (
    <section id="skills" className="section section-card">
      <h2>{text.sections.skillsTitle}</h2>
      <div className="skills-grid">
        <div className="skill-group">
          <h3>Programming</h3>
          <p>{text.skills.programming}</p>
        </div>
        <div className="skill-group">
          <h3>Web</h3>
          <p>{text.skills.web}</p>
        </div>
        <div className="skill-group">
          <h3>Data &amp; Cloud</h3>
          <p>{text.skills.data}</p>
        </div>
        <div className="skill-group">
          <h3>Testing &amp; Quality</h3>
          <p>{text.skills.testing}</p>
        </div>
        <div className="skill-group">
          <h3>Tools</h3>
          <p>{text.skills.tools}</p>
        </div>
      </div>
    </section>
  );
}
