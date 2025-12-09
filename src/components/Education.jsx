// // src/components/Education.jsx
export default function Education({ text }) {
  const items = text.education || [];

  return (
    <section id="education" className="section section-card">
      <h2>{text.sections.educationTitle}</h2>

      <div className="education-list">
        {items.map((item, index) => (
          <div
            key={item.degree + item.school}
            className={
              "education-item " +
              (index === 0 ? "education-item--master" : "education-item--bsc")
            }
          >
            <div className="education-header">
              <h3
                className="education-degree"
                dangerouslySetInnerHTML={{ __html: item.degree }}
              />
              <span className="education-period">{item.period}</span>
            </div>

            <p
              className="education-school"
              dangerouslySetInnerHTML={{ __html: item.school }}
            />

            {Array.isArray(item.desc) && item.desc.length > 0 && (
              <ul className="education-bullets">
                {item.desc.map((line, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </ul>
            )}

            {index !== items.length - 1 && <div className="education-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
