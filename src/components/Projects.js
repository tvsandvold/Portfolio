export default function Projects() {
  const projects = [
    {
      title: 'Task Manager',
      desc: 'Fullstack oppgavebehandler med JWT-autentisering, REST API og React-frontend.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
      color: '#f97316',
      github: 'https://github.com/tvsandvold/taskmanager',
      emoji: '✅',
    },
    {
      title: 'Portfolio',
      desc: 'Personlig porteføljeside bygget med React. Moderne design med animasjoner.',
      tech: ['React', 'JavaScript', 'CSS'],
      color: '#ec4899',
      github: 'https://github.com/tvsandvold/portfolio',
      emoji: '🌐',
    },
  ];

  return (
    <section id="prosjekter" style={{ padding: '100px 20px', background: '#0d0d1a', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ color: '#f97316', fontWeight: '600', letterSpacing: '3px', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>PROSJEKTER</p>
        <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 60px', textAlign: 'center' }}>Hva jeg har bygd</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {projects.map(function(project) {
            return (
              <div key={project.title} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '40px' }}>{project.emoji}</div>
                <h3 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: 0 }}>{project.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0, fontSize: '15px' }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map(function(t) {
                    return (
                      <span key={t} style={{ padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{t}</span>
                    );
                  })}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', color: project.color, textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
                  Se på GitHub →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
