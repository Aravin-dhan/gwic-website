export default function HomePage() {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
          Fostering Wellness, Building Community
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--secondary-blue)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          The GNLU Wellness Initiative Cell (GWIC) is dedicated to creating a supportive and nurturing environment for all students at Gujarat National Law University.
        </p>
      </section>

      <section style={{ backgroundColor: 'var(--text-light)', padding: '4rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7' }}>
          To cultivate a sustainable and holistic culture of overall wellness, ensuring every student has the resources and support needed to thrive academically, personally, and professionally through open dialogue and continuous adaptation to evolving mental health needs.
        </p>
      </section>
    </div>
  );
}