import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          The GWIC Blog
        </h1>
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li key={id} style={{ marginBottom: '2rem', border: '1px solid var(--accent-grey)', padding: '2rem', borderRadius: '12px', background: 'var(--text-light)' }}>
              <Link href={`/blog/${id}`} style={{ textDecoration: 'none', color: 'var(--primary-dark)' }}>
                <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>{title}</h2>
              </Link>
              <small style={{ color: 'var(--secondary-blue)' }}>
                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} - by {author}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}