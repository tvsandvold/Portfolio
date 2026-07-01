export default function Skills() {
  const skills = [
    { name: 'Java', level: 75, color: '#f97316' },
    { name: 'Spring Boot', level: 70, color: '#ec4899' },
    { name: 'React', level: 65, color: '#8b5cf6' },
    { name: 'JavaScript', level: 70, color: '#f97316' },
    { name: 'Python', level: 60, color: '#ec4899' },
    { name: 'C#', level: 55, color: '#8b5cf6' },
    { name: 'HTML/CSS', level: 80, color: '#f97316' },
    { name: 'PostgreSQL', level: 60, color: '#ec4899' },
    { name: 'Docker', level: 50, color: '#8b5cf6' },
    { name: 'Git', level: 70, color: '#f97316' },
  ];

  return (
    <section id="ferdigheter" style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #0f0c29, #1a1a2e)', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ color: '#f97316', fontWeight: '600', letterSpacing: '3px', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>FERDIGHETER</p>
        <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 60px', textAlign: 'center' }}>
          Hva jeg kan
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {skills.map(function(skill) {
            return (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: 'white', fontWeight: '600' }}>{skill.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>{skill.level}%</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '99px', height: '8px' }}>
                  <div style={{ width: skill.level + '%', height: '8px', borderRadius: '99px', background: 'linear-gradient(90deg, ' + skill.color + ', #8b5cf6)', transition: 'width 1s ease' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
