import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">GWIC</Link>
        <nav>
          <ul>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/games">Gamification</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href="https://www.hopequre.com/corporate-login" target="_blank" rel="noopener noreferrer">HopeQure Portal</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}