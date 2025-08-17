import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Link href="/" className="logo">GWIC</Link>
          <span className="university-name">Gujarat National Law University</span>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li className="dropdown">
              <a href="#">Resources</a>
              <div className="dropdown-content">
                <a href="https://hopequre.com/" target="_blank" rel="noopener noreferrer">HopeQure Portal</a>
                <a href="/gwic-brochure.pdf" target="_blank" rel="noopener noreferrer">GWIC Brochure</a>
                <a href="https://form.jotform.com/250803093400445" target="_blank" rel="noopener noreferrer">Appointments</a>
              </div>
            </li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/mindful-breaks">Mindful Breaks</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}