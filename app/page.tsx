export default function HomePage() {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '80px 0' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Fostering Wellness, Building Community</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          The GNLU Wellness Initiative Cell (GWIC) is dedicated to creating a supportive and nurturing environment for all students at Gujarat National Law University.
        </p>
      </section>

      <section style={{ backgroundColor: 'var(--background-grey)', padding: '60px 40px', borderRadius: '8px' }}>
        <h2>Our Mission</h2>
        <p>To cultivate a sustainable and holistic culture of overall wellness, ensuring every student has the resources and support needed to thrive academically, personally, and professionally.</p>
      </section>
    </div>
  );
}