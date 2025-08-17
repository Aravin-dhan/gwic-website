import Leaderboard from '../components/leaderboard/Leaderboard';
import Link from 'next/link';

async function getLeaderboardData() {
  // In a real app, this would be a database call.
  // For now, we'll read from the local JSON file.
  const fs = require('fs');
  const path = require('path');
  const leaderboardFilePath = path.join(process.cwd(), 'data', 'leaderboard.json');
  const leaderboardData = fs.readFileSync(leaderboardFilePath, 'utf-8');
  return JSON.parse(leaderboardData);
}

export default async function GamesPage() {
  const leaderboardData = await getLeaderboardData();

  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Gamification Center
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)' }}>Games</h2>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/games/sudoku" style={{ padding: '1rem 2rem', background: 'var(--primary-blue)', color: 'var(--text-light)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Play Sudoku
              </Link>
              {/* Other games will be added here */}
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)' }}>Leaderboard</h2>
            <Leaderboard data={leaderboardData} />
          </div>
        </div>
      </section>
    </div>
  );
}