import Image from 'next/image';
import Link from 'next/link';
import './blog.css';

export default function BlogPage() {
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
        <section id="blog-hero">
          <h1>Our Blog</h1>
          <p>Thoughts, stories, and resources on mental wellness.</p>
        </section>

        <section id="blog-posts">
          <article className="blog-post">
            <h2>The Importance of Self-Care for Law Students</h2>
            <p className="post-meta">Posted on August 17, 2025 by GWIC</p>
            <p>Law school is demanding. Here are some tips on how to take care of your mental health during your studies...</p>
            <a href="#" className="read-more">Read More</a>
          </article>
          <article className="blog-post">
            <h2>Navigating Stress and Anxiety</h2>
            <p className="post-meta">Posted on August 10, 2025 by GWIC</p>
            <p>Stress and anxiety are common in high-pressure environments. Learn how to manage them effectively...</p>
            <a href="#" className="read-more">Read More</a>
          </article>
          <article className="blog-post">
            <h2>Building a Supportive Community</h2>
            <p className="post-meta">Posted on August 3, 2025 by GWIC</p>
            <p>A strong support system is crucial for mental well-being. Here's how we can build one together...</p>
            <a href="#" className="read-more">Read More</a>
          </article>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GWIC - GNLU Wellness Initiative Cell</p>
      </footer>
    </>
  );
}