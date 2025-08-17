import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <p>&copy; 2025 Gujarat National Law University. All Rights Reserved.</p>
          <p>GNLU Wellness Initiative Cell</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}