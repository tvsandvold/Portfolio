export default function Skills() {
  const skillGroups = [
    {
      title: 'Utvikling',
      skills: ['Java', 'JavaScript', 'Python', 'C#', 'PHP'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML', 'CSS'],
    },
    {
      title: 'Backend & API',
      skills: ['Spring Boot', 'REST API'],
    },
    {
      title: 'Data',
      skills: ['PostgreSQL', 'SQL'],
    },
    {
      title: 'Verktøy & integrasjon',
      skills: ['Git', 'GitHub', 'Docker', 'Node-RED'],
    },
  ];

  return (
    <section id="ferdigheter" className="skills">
      <div className="skills-container">
        <p className="skills-label">
          FERDIGHETER
        </p>

        <h2 className="skills-title">
          Teknologier jeg jobber med
        </h2>

        <p className="skills-intro">
          Et utvalg av teknologier og verktøy jeg har brukt gjennom studier,
          prosjekter og egen utvikling.
        </p>

        <div className="skills-grid">
          {skillGroups.map(function(group) {
            return (
              <div key={group.title} className="skills-card">
                <h3 className="skills-card-title">
                  {group.title}
                </h3>

                <div className="skills-tags">
                  {group.skills.map(function(skill) {
                    return (
                      <span key={skill} className="skills-tag">
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}