export default function About() {
  return (
    <section id="om-meg" style={{ padding: '100px 20px', background: '#0d0d1a', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div>
          <p style={{ color: '#f97316', fontWeight: '600', letterSpacing: '3px', fontSize: '13px', marginBottom: '12px' }}>OM MEG</p>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 24px', lineHeight: 1.2 }}>
            Lidenskapelig <span style={{ background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>utvikler</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '16px', marginBottom: '16px' }}>
            Jeg er en fullstack-utvikler under utvikling med lidenskap for å bygge moderne og brukervennlige webapplikasjoner.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '16px' }}>
            Jeg liker å løse komplekse problemer og lære nye teknologier. Akkurat nå jobber jeg med Java, Spring Boot og React.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { emoji: '💻', title: 'Frontend', desc: 'React, JavaScript, HTML, CSS' },
            { emoji: '⚙️', title: 'Backend', desc: 'Java, Spring Boot, C#, Python' },
            { emoji: '🗄️', title: 'Database', desc: 'PostgreSQL, SQL' },
            { emoji: '🚀', title: 'DevOps', desc: 'Docker, Git, GitHub' },
          ].map(function(item) {
            return (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.emoji}</div>
                <div style={{ color: 'white', fontWeight: '600', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
