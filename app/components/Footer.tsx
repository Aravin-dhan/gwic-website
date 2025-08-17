import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <p>&copy; 2025 GWIC. All Rights Reserved.</p>
          <p>Contact: <a href="mailto:gwic@gnlu.ac.in" style={{ color: 'var(--background-light)', textDecoration: 'none' }}>gwic@gnlu.ac.in</a></p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/games">Gamification</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}