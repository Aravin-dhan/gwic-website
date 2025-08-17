export default function AboutPage() {
  return (
    <div className="container">
      <section style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>About the GWIC</h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Our Vision</h2>
          <p>To create a sustainable and holistic culture of overall wellness for the students at GNLU. We use a community-based approach to cultivating a nurturing and inclusive community that involves every student as a stakeholder and ensures that adequate resources are present to ensure a state of well-being.</p>

          <h2>Our Mission</h2>
          <p>To be committed to cultivating a nurturing and inclusive community by maintaining an open dialogue and continuously adapting to evolving mental health needs, as reflected in the Needs Assessment Survey and subsequent feedback mechanisms.</p>

          <h2>Core Values</h2>
          <ul>
            <li><strong>Tailored Solutions:</strong> Addressing the unique needs and challenges faced by diverse sections of the student population.</li>
            <li><strong>Student Agency:</strong> Empowering students to have a say in designing and implementing wellness initiatives.</li>
            <li><strong>Supportive Environment:</strong> Reducing stigma and creating a campus where students feel comfortable seeking help.</li>
            <li><strong>Increased Productivity:</strong> Fostering an environment that boosts well-being, life satisfaction, and social integration.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}