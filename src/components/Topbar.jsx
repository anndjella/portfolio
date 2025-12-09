// src/components/Topbar.jsx
import { useState, useEffect } from "react";

export default function Topbar({ lang, setLang, text }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick() {
    setOpen(false);
  }

  return (
    <>
      <div
        className={`menu-overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <header className={`topbar ${open ? "is-open" : ""}`}>
        <div className="brand">{text.brand}</div>

        <nav
          className={`nav ${open ? "open" : ""}`}
          role="navigation"
          aria-label="Glavna navigacija"
        >
          <a href="#home" onClick={handleNavClick}>
            {text.nav.home}
          </a>
          <a href="#about" onClick={handleNavClick}>
            {text.nav.about}
          </a>
          <a href="#skills" onClick={handleNavClick}>
            {text.nav.skills}
          </a>
          <a href="#projects" onClick={handleNavClick}>
            {text.nav.projects}
          </a>
          <a href="#experience" onClick={handleNavClick}>
            {text.nav.experience}
          </a>
          <a href="#education" onClick={handleNavClick}>
            {text.nav.education}
          </a>
          <a href="#contact" onClick={handleNavClick}>
            {text.nav.contact}
          </a>

          <div className="lang-toggle nav-lang">
            <button
              onClick={() => setLang("sr")}
              className={lang === "sr" ? "active" : ""}
              aria-pressed={lang === "sr"}
            >
              SR
            </button>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : ""}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </nav>

        <div className="right-controls">
          <div className="lang-toggle desktop-lang" role="group" aria-label="Language">
            <button
              onClick={() => setLang("sr")}
              className={lang === "sr" ? "active" : ""}
              aria-pressed={lang === "sr"}
            >
              SR
            </button>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : ""}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen((s) => !s)}
            aria-label={`${open ? "Zatvori meni" : "Otvori meni"}`}
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path className="line line1" d="M3 7h18" strokeWidth="2" strokeLinecap="round" />
              <path className="line line2" d="M3 12h18" strokeWidth="2" strokeLinecap="round" />
              <path className="line line3" d="M3 17h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
