// // src/components/Skills.jsx
export default function Skills({ text }) {
  const renderSkillsList = (skillsArray) => {
    if (!skillsArray) return null; // ovo sprečava grešku
    return (
      <ul className="skill-list">
        {skillsArray.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    );
  };

  const skillKeys = ["programming", "web", "data", "testing", "tools"];

  return (
    <section id="skills" className="section section-card">
      <h2>{text.sections.skillsTitle}</h2>

      <div className="skills-grid">
        {skillKeys.map((key) => (
          <div key={key} className="skill-group skill-group--card">
            <h3>{text.skillsGroupNames[key]}</h3>
            {renderSkillsList(text.skills[key])}
          </div>
        ))}
      </div>

      <hr className="skills-divider" />

      <div className="soft-skills-container skill-group--card">
        <h3>{text.skillsGroupNames.soft}</h3>
        <div className="soft-skills-chips">
          {text.skills.soft.map((skill, index) => (
            <span key={index} className="tech-chip soft-chip">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
