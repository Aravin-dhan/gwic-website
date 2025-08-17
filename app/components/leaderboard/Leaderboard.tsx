'use client';

import { useState } from 'react';

interface Score {
  userId: string;
  username: string;
  game: string;
  score: number;
  timestamp: string;
}

interface LeaderboardProps {
  data: Score[];
}

export default function Leaderboard({ data }: LeaderboardProps) {
  const [filter, setFilter] = useState('All-Time');

  // Filtering logic would be more complex in a real app
  const filteredData = data.sort((a, b) => b.score - a.score);

  return (
    <div style={{ background: 'var(--text-light)', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      {/* Filter buttons would be added here */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filteredData.map((entry, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--background-light)' }}>
            <span>{index + 1}. {entry.username}</span>
            <strong>{entry.score}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}