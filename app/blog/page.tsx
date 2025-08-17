import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container">
      <section style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>The GWIC Blog</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li key={id} style={{ marginBottom: '20px', border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
              <Link href={`/blog/${id}`} style={{ textDecoration: 'none', color: 'var(--primary-dark)' }}>
                <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
              </Link>
              <small style={{ color: 'var(--text-secondary)' }}>
                {date} - by {author}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}