import { getPostData, getAllPostIds } from '../../../lib/posts';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="container">
      <article style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{postData.title}</h1>
        <div style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          {postData.date} - by {postData.author}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}