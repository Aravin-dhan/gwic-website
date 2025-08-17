import Wordle from '../../components/games/Wordle';

export default function WordlePage() {
  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Wordle
        </h1>
        <Wordle />
      </section>
    </div>
  );
}