import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const leaderboardFilePath = path.join(process.cwd(), 'data', 'leaderboard.json');

export async function POST(request: Request) {
  try {
    const { score } = await request.json();
    const leaderboardData = fs.readFileSync(leaderboardFilePath, 'utf-8');
    const leaderboard = JSON.parse(leaderboardData);

    // In a real app, you'd get the user from the session
    const FAKE_USER_ID = '1';
    const FAKE_USERNAME = 'demouser@gwic.com';

    leaderboard.push({
      userId: FAKE_USER_ID,
      username: FAKE_USERNAME,
      game: 'Sudoku',
      score,
      timestamp: new Date().toISOString(),
    });

    fs.writeFileSync(leaderboardFilePath, JSON.stringify(leaderboard, null, 2));

    return NextResponse.json(leaderboard);
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}