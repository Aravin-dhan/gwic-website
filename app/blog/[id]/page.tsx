import { getPostData, getAllPostIds } from '../../../lib/posts';
import './post.css';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="container">
      <article className="blog-post-content" style={{ padding: '3rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{postData.title}</h1>
        <div style={{ color: 'var(--secondary-blue)', marginBottom: '2rem' }}>
          {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} - by {postData.author}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}