// src/components/AboutEducationSection.jsx
import React, { useState } from 'react';

export default function AboutEducationSection({ text }) {
  const [activeTab, setActiveTab] = useState('about'); 

  const sectionTitle = activeTab === 'about' 
                       ? text.sections.aboutTitle 
                       : text.sections.educationTitle;

  return (
    <section id="about" className="section section-card">    
      <h2>{sectionTitle}</h2> 
      <div className="tab-controls">
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => setActiveTab('about')}
        >
          {text.nav.about} 
        </button>
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          {text.nav.education} 
        </button>
      </div>
      
      <div className="tab-content-wrapper">
        {activeTab === 'about' && (
          <div className="tab-content tab-about">
            <p 
              className="section-text" 
              style={{ whiteSpace: "pre-line" }} 
              dangerouslySetInnerHTML={{ __html: text.about }} 
            />
          </div>
        )}
        
        {activeTab === 'education' && (
          <div className="tab-content tab-education">
            <EducationContent items={text.education || []} />
          </div>
        )}
      </div>
      
    </section>
  );
}

function EducationContent({ items }) {
    return (
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
    );
}