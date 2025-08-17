export default function AboutPage() {
  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          About the GWIC
        </h1>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.7' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)', borderBottom: '2px solid var(--accent-grey)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Our Vision
            </h2>
            <p>
              To create a sustainable and holistic culture of overall wellness for the students at GNLU. We use a community-based approach to cultivating a nurturing and inclusive community that involves every student as a stakeholder and ensures that adequate resources are present to ensure a state of well-being.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)', borderBottom: '2px solid var(--accent-grey)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Our Mission
            </h2>
            <p>
              To be committed to cultivating a nurturing and inclusive community by maintaining an open dialogue and continuously adapting to evolving mental health needs, as reflected in the Needs Assessment Survey and subsequent feedback mechanisms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)', borderBottom: '2px solid var(--accent-grey)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Core Values
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Tailored Solutions:</strong> Addressing the unique needs and challenges faced by diverse sections of the student population.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Student Agency:</strong> Empowering students to have a say in designing and implementing wellness initiatives.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Supportive Environment:</strong> Reducing stigma and creating a campus where students feel comfortable seeking help.</li>
              <li><strong>Increased Productivity:</strong> Fostering an environment that boosts well-being, life satisfaction, and social integration.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}