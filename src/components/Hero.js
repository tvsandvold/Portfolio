export default function Hero() {
  return (
    <section id="hjem" className="hero">
      <div className="hero-content">
        <p className="hero-label">
          IT-UTVIKLER
        </p>

        <h1 className="hero-title">
          Terje Vo
          <span>Sandvold</span>
        </h1>

        <p className="hero-description">
          Nyutdannet innen IT og informasjonssystemer med interesse for
          utvikling, systemintegrasjon og teknologi som løser reelle problemer.
        </p>

        <div className="hero-buttons">
          <a href="#prosjekter" className="button button-primary">
            Se prosjekter
          </a>

          <a href="#kontakt" className="button button-secondary">
            Kontakt meg
          </a>
        </div>
      </div>
    </section>
  );
}