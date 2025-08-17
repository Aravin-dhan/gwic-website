import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
          Welcome to the GWIC Wellness Platform
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--secondary-blue)', maxWidth: '800px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
          Your space for wellness, engagement, and growth.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <Link href="/login" style={{ padding: '1rem 2rem', background: 'var(--primary-blue)', color: 'var(--text-light)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
            Login
          </Link>
          <Link href="/register" style={{ padding: '1rem 2rem', background: 'var(--text-light)', color: 'var(--primary-dark)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', border: '1px solid var(--primary-dark)' }}>
            Register
          </Link>
        </div>
      </section>
    </div>
  );
}