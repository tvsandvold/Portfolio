export default function Experience() {
  const items = [
    {
      year: '2026',
      title: 'Parat-Bridge',
      place: 'Bachelorprosjekt · Universitetet i Agder',
      desc: 'Utviklet sammen med fem medstudenter en mellomvareprototype for sivil-militær krisehåndtering. Løsningen koblet sammen eksisterende beredskapssystemer ved hjelp av Node-RED, REST API-er og systemintegrasjoner.',
      color: '#f97316',
    },
    {
      year: '2023 - 2026',
      title: 'IT og informasjonssystemer',
      place: 'Universitetet i Agder',
      desc: 'Bachelorgrad med fokus på blant annet programmering, systemutvikling, databaser, informasjonssikkerhet, kunstig intelligens og systemintegrasjon.',
      color: '#ec4899',
    },
  ];

  return (
    <section id="erfaring" className="experience">
      <div className="experience-container">
        <p className="experience-label">
          ERFARING
        </p>

        <h2 className="experience-title">
          Min reise
        </h2>

        <div className="experience-timeline">
          {items.map(function(item) {
            return (
              <div key={item.title} className="experience-item">
                <div
                  className="experience-dot"
                  style={{ background: item.color }}
                />

                <span
                  className="experience-year"
                  style={{ color: item.color }}
                >
                  {item.year}
                </span>

                <h3 className="experience-item-title">
                  {item.title}
                </h3>

                <p className="experience-place">
                  {item.place}
                </p>

                <p className="experience-description">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}