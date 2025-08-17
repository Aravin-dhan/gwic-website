'use client';

import { useState, useEffect } from 'react';

interface WellnessLog {
  id: string;
  date: string;
  mood: string;
  stressLevel: number;
  reflection: string;
}

export default function DashboardPage() {
  const [logs, setLogs] = useState<WellnessLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<WellnessLog | null>(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    const response = await fetch('/api/wellness-log');
    const data = await response.json();
    setLogs(data);
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/wellness-log', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchLogs();
  };

  // The form for adding/editing logs would be a separate component in a larger app
  const LogForm = ({ log, onSave }: { log?: WellnessLog | null, onSave: () => void }) => {
    const [mood, setMood] = useState(log?.mood || '');
    const [stressLevel, setStressLevel] = useState(log?.stressLevel || 5);
    const [reflection, setReflection] = useState(log?.reflection || '');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const newLog = { id: log?.id, date: new Date().toISOString(), mood, stressLevel, reflection };
      await fetch('/api/wellness-log', {
        method: log ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ log: newLog }),
      });
      onSave();
    };

    return (
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input type="text" value={mood} onChange={e => setMood(e.target.value)} placeholder="Mood" required />
        <input type="number" value={stressLevel} onChange={e => setStressLevel(parseInt(e.target.value))} min="1" max="10" required />
        <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="Reflection" required />
        <button type="submit">Save</button>
      </form>
    );
  };

  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Your Wellness Dashboard
        </h1>
        
        <div style={{ background: 'var(--text-light)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-blue)' }}>Wellness Journal</h2>
          
          {isEditing ? (
            <LogForm log={isEditing} onSave={() => { setIsEditing(null); fetchLogs(); }} />
          ) : (
            <button onClick={() => setIsEditing({} as WellnessLog)}>Add New Log</button>
          )}

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {logs.map(log => (
                <div key={log.id} style={{ borderBottom: '1px solid var(--accent-grey)', padding: '1.5rem 0' }}>
                  <p><strong>Date:</strong> {new Date(log.date).toLocaleDateString()}</p>
                  <p><strong>Mood:</strong> {log.mood}</p>
                  <p><strong>Stress Level:</strong> {log.stressLevel}/10</p>
                  <p><strong>Reflection:</strong> {log.reflection}</p>
                  <button onClick={() => setIsEditing(log)}>Edit</button>
                  <button onClick={() => handleDelete(log.id)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}