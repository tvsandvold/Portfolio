export default function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="contact-container">
        <p className="contact-label">
          KONTAKT
        </p>

        <h2 className="contact-title">
          Ta kontakt
        </h2>

        <p className="contact-description">
          Jeg ser etter muligheter hvor jeg kan utvikle meg videre og bidra med
          teknologi som løser reelle problemer. Ta gjerne kontakt!
        </p>

        <div className="contact-links">
          <a
            href="mailto:tmsandvold@gmail.com"
            className="contact-button contact-button-primary"
          >
            Send e-post
          </a>

          <a
            href="https://github.com/tvsandvold"
            target="_blank"
            rel="noreferrer"
            className="contact-button contact-button-secondary"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tvsandvold"
            target="_blank"
            rel="noreferrer"
            className="contact-button contact-button-secondary"
          >
            LinkedIn
          </a>
        </div>

        <p className="contact-footer">
          © 2026 Terje Vo Sandvold
        </p>
      </div>
    </section>
  );
}