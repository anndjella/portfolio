// src/components/Experience.jsx
import { useState } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

export default function Experience({ text }) {
  const { work, volunteer } = text.experience;
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="section section-card">
      <h2>{text.sections.experienceTitle}</h2>

      <div className="experience-grid">
        {/* LEFT COLUMN — WORK EXPERIENCE */}
        <div className="experience-column experience-column--work">
          <h3 className="experience-heading">Work experience</h3>

          {work.map((item, index) => {
            const id = `work-${index}`;
            const isOpen = openItemId === id;

            return (
              <div
                key={item.role + item.place}
                className={`experience-item ${isOpen ? "is-open" : ""}`}
                onClick={() => toggleItem(id)}
              >
                <div className="experience-header">
                  <h4>{item.role}</h4>
                  <div className="experience-header-right">
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-toggle-icon">
                      {isOpen ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <>
                    <p className="experience-place">{item.place}</p>

                    {Array.isArray(item.desc) ? (
                      <ul className="experience-bullets">
                        {item.desc.map((line, i) => (
                          <li
                            key={i}
                            // OVDE JE KLJUČNO – NEMA {line} UNUTRA!
                            dangerouslySetInnerHTML={{ __html: line }}
                          />
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="experience-desc"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN — VOLUNTEER & PROGRAMS */}
        <div className="experience-column experience-column--volunteer">
          <h3 className="experience-heading">Volunteer Experience</h3>

          {volunteer.map((item, index) => {
            const id = `vol-${index}`;
            const isOpen = openItemId === id;

            return (
              <div
                key={item.role + item.place}
                className={`experience-item ${isOpen ? "is-open" : ""}`}
                onClick={() => toggleItem(id)}
              >
                <div className="experience-header">
                  <h4>{item.role}</h4>
                  <div className="experience-header-right">
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-toggle-icon">
                      {isOpen ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <>
                    <p className="experience-place">{item.place}</p>

                    {Array.isArray(item.desc) ? (
                      <ul className="experience-bullets">
                        {item.desc.map((line, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: line }}
                          />
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="experience-desc"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
