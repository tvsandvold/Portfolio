export default function Hero() {
  return (
    <section id="hjem" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <div>
        <p style={{ color: '#f97316', fontWeight: '600', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>FULLSTACK-UTVIKLER</p>
        <h1 style={{ fontSize: '72px', fontWeight: '800', color: 'white', margin: '0 0 16px', lineHeight: 1.1 }}>
          Terje Vo
          <span style={{ display: 'block', background: 'linear-gradient(90deg, #f97316, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Sandvold
          </span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '500px', margin: '0 auto 40px' }}>
          Jeg bygger moderne webapplikasjoner med Java, React og mer.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="#prosjekter" style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #f97316, #ec4899)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
            Se prosjekter
          </a>
          <a href="#kontakt" style={{ padding: '14px 32px', border: '2px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
            Kontakt meg
          </a>
        </div>
      </div>
    </section>
  );
}
