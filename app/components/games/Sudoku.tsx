'use client';

import { useState, useEffect } from 'react';

// A simple Sudoku board generator and solver would be too complex for a single file.
// For this example, we'll use a pre-defined board and allow the user to fill it.
// A full implementation would require a proper Sudoku generation algorithm.

const initialBoard = [
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

export default function Sudoku() {
  const [board, setBoard] = useState(initialBoard);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const newBoard = [...board];
    const value = parseInt(e.target.value, 10);
    newBoard[row][col] = isNaN(value) ? 0 : value;
    setBoard(newBoard);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: '5px', maxWidth: '500px', margin: '0 auto' }}>
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
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: initialBoard[rowIndex][colIndex] !== 0 ? '#eee' : '#fff',
              borderRight: (colIndex + 1) % 3 === 0 && colIndex < 8 ? '3px solid black' : '1px solid #ccc',
              borderBottom: (rowIndex + 1) % 3 === 0 && rowIndex < 8 ? '3px solid black' : '1px solid #ccc',
            }}
          />
        ))
      )}
    </div>
  );
}