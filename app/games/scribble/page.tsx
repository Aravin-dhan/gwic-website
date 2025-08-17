import Scribble from '../../components/games/Scribble';

export default function ScribblePage() {
  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Scribble
        </h1>
        <Scribble />
      </section>
    </div>
  );
}