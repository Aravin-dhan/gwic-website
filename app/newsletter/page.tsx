import Image from 'next/image';
import Link from 'next/link';
import './newsletter.css';

export default function NewsletterPage() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link href="/"><Image src="/GNLU_GWIC_Logo-removebg-preview.png" alt="GWIC Logo" width={150} height={50} /></Link>
          </div>
          <ul>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li><Link href="/#resources">Resources</Link></li>
            <li><Link href="/#team">Team</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/newsletter">Newsletter</Link></li>
            <li><Link href="/laws">Mental Health Laws</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="newsletter-hero">
          <h1>Subscribe to Our Newsletter</h1>
          <p>Stay updated with our latest news, events, and resources.</p>
        </section>

        <section id="newsletter-form">
          <form>
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GWIC - GNLU Wellness Initiative Cell</p>
      </footer>
    </>
  );
}