export default function Contact() {
  return (
    <section id="kontakt" style={{ padding: '100px 20px', background: '#0d0d1a', fontFamily: 'Segoe UI, sans-serif', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ color: '#f97316', fontWeight: '600', letterSpacing: '3px', fontSize: '13px', marginBottom: '12px' }}>KONTAKT</p>
        <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 16px' }}>Ta kontakt</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px', marginBottom: '48px', lineHeight: 1.7 }}>
          Jeg er åpen for nye muligheter og samarbeid. Send meg en melding!
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:tmsandvold@gmail.com" style={{ padding: '16px 36px', background: 'linear-gradient(135deg, #f97316, #ec4899)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>
            Send e-post
          </a>
          <a href="https://github.com/tvsandvold" target="_blank" rel="noreferrer" style={{ padding: '16px 36px', border: '2px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/tvsandvold" target="_blank" rel="noreferrer" style={{ padding: '16px 36px', border: '2px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>
            LinkedIn
          </a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.2)', marginTop: '80px', fontSize: '14px' }}>
          © 2026 Terje Vo Sandvold
        </p>
      </div>
    </section>
  );
}
