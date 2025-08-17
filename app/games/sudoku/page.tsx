import Sudoku from '../../components/games/Sudoku';

export default function SudokuPage() {
  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Sudoku
        </h1>
        <Sudoku />
      </section>
    </div>
  );
}