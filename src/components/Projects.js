export default function Projects() {
  const projects = [
    {
      title: 'Parat-Bridge',
      desc: 'Bachelorprosjekt utviklet i et team på seks studenter. Vi bygget en mellomvareprototype for sivil-militær krisehåndtering som koblet sammen eksisterende beredskapssystemer uten å endre systemene.',
      tech: ['Node-RED', 'REST API', 'JavaScript', 'Systemintegrasjon'],
      color: '#f97316',
      featured: true,
    },
    {
      title: 'Task Manager',
      desc: 'Fullstack oppgavebehandler med JWT-autentisering, REST API og React-frontend.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
      color: '#ec4899',
      github: 'https://github.com/tvsandvold/taskmanager',
    },
    {
      title: 'Portfolio',
      desc: 'Personlig porteføljeside bygget med React og responsivt design, utviklet for å presentere prosjektene og kompetansen min.',
      tech: ['React', 'JavaScript', 'CSS'],
      color: '#8b5cf6',
      github: 'https://github.com/tvsandvold/Portfolio',
    },
  ];

  return (
    <section id="prosjekter" className="projects">
      <div className="projects-container">
        <p className="projects-label">
          PROSJEKTER
        </p>

        <h2 className="projects-title">
          Hva jeg har bygd
        </h2>

        <div className="projects-grid">
          {projects.map(function(project) {
            return (
              <article
                key={project.title}
                className={
                  project.featured
                    ? 'project-card project-card-featured'
                    : 'project-card'
                }
              >
                {project.featured && (
                  <span className="project-type">
                    BACHELORPROSJEKT
                  </span>
                )}

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.desc}
                </p>

                <div className="project-technologies">
                  {project.tech.map(function(technology) {
                    return (
                      <span
                        key={technology}
                        className="project-technology"
                      >
                        {technology}
                      </span>
                    );
                  })}
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    style={{ color: project.color }}
                  >
                    Se på GitHub →
                  </a>
                ) : (
                  <span
                    className="project-link project-link-static"
                    style={{ color: project.color }}
                  >
                    Utviklet ved Universitetet i Agder
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}