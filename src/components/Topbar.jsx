// src/components/Topbar.jsx
export default function Topbar({ lang, setLang, text }) {
  return (
    <header className="topbar">
      <div className="brand">{text.brand}</div>

      <nav className="nav">
        <a href="#home">{text.nav.home}</a>
        <a href="#about">{text.nav.about}</a>
        <a href="#skills">{text.nav.skills}</a>
        <a href="#projects">{text.nav.projects}</a>
        <a href="#experience">{text.nav.experience}</a>
        <a href="#contact">{text.nav.contact}</a>
      </nav>

      <div className="lang-toggle">
        <button
          onClick={() => setLang("sr")}
          className={lang === "sr" ? "active" : ""}
        >
          SR
        </button>
        <button
          onClick={() => setLang("en")}
          className={lang === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>
    </header>
  );
}
