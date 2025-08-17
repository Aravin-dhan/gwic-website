import Sudoku from '../components/games/Sudoku';

export default function MindfulBreaksPage() {
  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Mindful Breaks
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto', color: 'var(--secondary-blue)' }}>
          Take a moment to relax and recharge with our collection of engaging puzzles and games.
        </p>
        
        <div style={{ background: 'var(--text-light)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-blue)' }}>Sudoku</h2>
          <Sudoku />
        </div>
      </section>
    </div>
  );
}