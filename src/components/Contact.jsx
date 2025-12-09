// src/components/Contact.jsx
export default function Contact({ text }) {
  return (
    <section id="contact" className="section section-card">
      <h2>{text.sections.contactTitle}</h2>
      <p className="contact">
        📧{" "}
        <a href="mailto:andjelastankovic2016@gmail.com">
           {text.contact.emailLabel}
        </a>
        <br />
        💼{" "}
        <a
          href="https://www.linkedin.com/in/andjela-stankovic26/"
          target="_blank"
          rel="noreferrer"
        >
          {text.contact.linkedinLabel}
        </a>
        <br />
        🧑‍💻{" "}
        <a
          href="https://github.com/anndjella"
          target="_blank"
          rel="noreferrer"
        >
          {text.contact.githubLabel}
        </a>
        <br />
        {text.contact.cvNote}
      </p>
    </section>
  );
}
