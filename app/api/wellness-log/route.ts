import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'data', 'users.json');

// In a real app, you'd get the user ID from the session
const FAKE_USER_ID = '1';

export async function GET() {
  try {
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);
    const user = users.find((u: any) => u.id === FAKE_USER_ID);
    return NextResponse.json(user.wellnessLogs || []);
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { log } = await request.json();
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);
    const userIndex = users.findIndex((u: any) => u.id === FAKE_USER_ID);
    
    users[userIndex].wellnessLogs.push({ ...log, id: Date.now().toString() });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    
    return NextResponse.json(users[userIndex].wellnessLogs);
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { log } = await request.json();
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);
    const userIndex = users.findIndex((u: any) => u.id === FAKE_USER_ID);
    
    const logIndex = users[userIndex].wellnessLogs.findIndex((l: any) => l.id === log.id);
    users[userIndex].wellnessLogs[logIndex] = log;
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    
    return NextResponse.json(users[userIndex].wellnessLogs);
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);
    const userIndex = users.findIndex((u: any) => u.id === FAKE_USER_ID);
    
    users[userIndex].wellnessLogs = users[userIndex].wellnessLogs.filter((l: any) => l.id !== id);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    
    return NextResponse.json(users[userIndex].wellnessLogs);
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}