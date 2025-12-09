// src/components/Hero.jsx
export default function Hero({ text }) {
  return (
    <section id="home" className="section hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Software • Data • Quality</p>
        <h1>{text.heroTitle}</h1>
        <p className="hero-subtitle">{text.heroSubtitle}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {text.heroCtaPrimary}
          </a>
          <a href="#about" className="btn btn-ghost">
            {text.heroCtaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo">
          <img src="./picture.jpg" alt="Andjela" />
        </div>
      </div>
    </section>
  );
}
