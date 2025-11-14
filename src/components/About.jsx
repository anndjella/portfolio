// src/components/About.jsx
export default function About({ text }) {
  return (
    <section id="about" className="section section-card">
      <h2>{text.sections.aboutTitle}</h2>
      <p className="section-text" style={{ whiteSpace: "pre-line" }}>
        {text.about}
      </p>
    </section>
  );
}
