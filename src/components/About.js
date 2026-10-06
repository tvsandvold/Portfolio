export default function About() {
  const areas = [
    {
      title: 'Utvikling',
      desc: 'Java, JavaScript, React, Python og PHP',
    },
    {
      title: 'Systemintegrasjon',
      desc: 'REST API, Node-RED og integrasjoner',
    },
    {
      title: 'Data',
      desc: 'PostgreSQL, SQL og databaser',
    },
    {
      title: 'Verktøy',
      desc: 'Git, GitHub, Docker og Jira',
    },
  ];

  return (
    <section id="om-meg" className="about">
      <div className="about-container">
        <div className="about-text">
          <p className="about-label">
            OM MEG
          </p>

          <h2 className="about-title">
            Fra problem til
            <span> løsning</span>
          </h2>

          <p className="about-description">
            Jeg er nyutdannet fra IT og informasjonssystemer ved Universitetet
            i Agder. Det jeg liker best med utvikling er å gå fra et problem
            til noe som faktisk fungerer og har en tydelig nytteverdi.
          </p>

          <p className="about-description">
            Gjennom studiet har jeg jobbet med blant annet programmering,
            webutvikling, API-er, databaser og systemintegrasjon. Jeg trives
            spesielt godt når jeg får kombinere teknisk problemløsning med
            samarbeid og lære nye teknologier underveis.
          </p>
        </div>

        <div className="about-technologies">
          {areas.map(function(area) {
            return (
              <div key={area.title} className="about-card">
                <div className="about-card-title">
                  {area.title}
                </div>

                <div className="about-card-description">
                  {area.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}