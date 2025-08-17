'use client';

import { useState, useEffect } from 'react';

const WORDS = ['react', 'nextjs', 'tailwind', 'vercel', 'clerk'];
const getDailyWord = () => {
  const startDate = new Date('2025-01-01');
  const today = new Date();
  const diff = today.getTime() - startDate.getTime();
  const dayIndex = Math.floor(diff / (1000 * 60 * 60 * 24));
  return WORDS[dayIndex % WORDS.length];
};

export default function Wordle() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setSolution(getDailyWord());
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentGuess.length !== 5) return;
      const newGuesses = [...guesses];
      const currentGuessIndex = guesses.findIndex(guess => guess === '');
      newGuesses[currentGuessIndex] = currentGuess;
      setGuesses(newGuesses);
      setCurrentGuess('');
      if (currentGuess === solution || currentGuessIndex === 5) {
        setIsGameOver(true);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 1fr)', gap: '5px', marginBottom: '1rem' }}>
        {guesses.map((guess, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
            {Array(5).fill(0).map((_, j) => {
              const char = guess[j];
              const bgColor = solution[j] === char ? 'var(--leaf-green)' : solution.includes(char) ? 'var(--sunny-yellow)' : 'var(--accent-grey)';
              return <div key={j} style={{ width: '50px', height: '50px', border: '1px solid #ccc', backgroundColor: char ? bgColor : 'transparent', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' }}>{char}</div>;
            })}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
        onKeyPress={handleKeyPress}
        maxLength={5}
        disabled={isGameOver}
        style={{ width: '300px', padding: '0.5rem', fontSize: '1.5rem', textAlign: 'center' }}
      />
      {isGameOver && <p>Game Over! The word was: {solution}</p>}
    </div>
  );
}