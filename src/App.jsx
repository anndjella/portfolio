// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import { translations } from "./translations";

import ParticleBackground from './components/ParticleBackground';

import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AboutEducationSection from "./components/AboutEducation";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const text = translations[lang];

  return (
    <>
      <ParticleBackground /> 
      <div className="app-root">
        <Topbar lang={lang} setLang={setLang} text={text} />
        
        <main>
          <Hero text={text} />
          <AboutEducationSection text={text} />
          <Skills text={text} />
          <Projects text={text} />
          <Experience text={text} />
          <Contact text={text} />
        </main>

        <footer className="footer">{text.footer}</footer>
      </div>
    </>
  );
}

export default App;