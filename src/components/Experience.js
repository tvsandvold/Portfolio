export default function Experience() {
  const items = [
    {
      year: '2024 - nå',
      title: 'Selvlært fullstack-utvikler',
      place: 'Egenstudier',
      desc: 'Bygger prosjekter med Java, Spring Boot, React og PostgreSQL. Fokus på moderne webutvikling og beste praksis.',
      color: '#f97316',
    },
    {
      year: '2023 - nå',
      title: 'Informatikkstudent',
      place: 'Høyskole/Universitet',
      desc: 'Studerer datavitenskap med fokus på programmering, algoritmer og systemutvikling.',
      color: '#ec4899',
    },
  ];

  return (
    <section id="erfaring" style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #0f0c29, #1a1a2e)', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ color: '#f97316', fontWeight: '600', letterSpacing: '3px', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>ERFARING</p>
        <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 60px', textAlign: 'center' }}>Min reise</h2>
        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
          {items.map(function(item) {
            return (
              <div key={item.title} style={{ marginBottom: '48px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-41px', width: '16px', height: '16px', borderRadius: '50%', background: item.color, border: '3px solid #0f0c29' }} />
                <span style={{ color: item.color, fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>{item.year}</span>
                <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '700', margin: '8px 0 4px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: '0 0 12px' }}>{item.place}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
