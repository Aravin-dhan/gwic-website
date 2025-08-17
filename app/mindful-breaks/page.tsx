import Sudoku from '../components/games/Sudoku';

export default function MindfulBreaksPage() {
  return (
    <div className="container">
      <section style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>Mindful Breaks</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          Take a moment to relax and recharge with our collection of engaging puzzles and games.
        </p>
        
        <div style={{ background: 'var(--background-grey)', padding: '40px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0 }}>Sudoku</h2>
          <Sudoku />
        </div>
      </section>
    </div>
  );
}