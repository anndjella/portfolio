// src/components/Experience.jsx
export default function Experience({ text }) {
  return (
    <section id="experience" className="section section-card">
      <h2>{text.sections.experienceTitle}</h2>
      <p className="section-text" style={{ whiteSpace: "pre-line" }}>
        {text.experience}
      </p>
    </section>
  );
}
