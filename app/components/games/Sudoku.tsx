'use client';

import { useState, useEffect } from 'react';

// In a real app, a more robust Sudoku generator/solver would be used.
// This is a simplified version for demonstration.
const generateSudoku = (difficulty: 'easy' | 'medium' | 'hard') => {
  // Placeholder for board generation logic
  return [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
};

export default function Sudoku() {
  const [board, setBoard] = useState(generateSudoku('easy'));
  const [initialBoard, setInitialBoard] = useState(board);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  useEffect(() => {
    const newBoard = generateSudoku(difficulty);
    setBoard(newBoard);
    setInitialBoard(newBoard);
  }, [difficulty]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const newBoard = board.map(r => [...r]);
    const value = parseInt(e.target.value, 10);
    newBoard[row][col] = isNaN(value) ? 0 : value;
    setBoard(newBoard);
  };

  const handleGameCompletion = async () => {
    // In a real app, you would validate the board and calculate a score
    const score = Math.floor(Math.random() * 1000) + 500; // Random score for demo
    await fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score }),
    });
    alert(`Game complete! Your score: ${score}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <button onClick={() => setDifficulty('easy')}>Easy</button>
        <button onClick={() => setDifficulty('medium')}>Medium</button>
        <button onClick={() => setDifficulty('hard')}>Hard</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: '5px', maxWidth: '500px', border: '3px solid var(--primary-dark)' }}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              min="1"
              max="9"
              value={cell === 0 ? '' : cell}
              onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
              readOnly={initialBoard[rowIndex][colIndex] !== 0}
              style={{
                width: '100%',
                height: '50px',
                textAlign: 'center',
                fontSize: '1.5rem',
                border: '1px solid var(--accent-grey)',
                borderRadius: '0',
                backgroundColor: initialBoard[rowIndex][colIndex] !== 0 ? 'var(--background-light)' : 'var(--text-light)',
                borderRight: (colIndex + 1) % 3 === 0 && colIndex < 8 ? '3px solid var(--primary-dark)' : '1px solid var(--accent-grey)',
                borderBottom: (rowIndex + 1) % 3 === 0 && rowIndex < 8 ? '3px solid var(--primary-dark)' : '1px solid var(--accent-grey)',
                color: 'var(--primary-dark)',
              }}
            />
          ))
        )}
      </div>
      <button onClick={handleGameCompletion} style={{ marginTop: '1.5rem' }}>Complete Game</button>
    </div>
  );
}