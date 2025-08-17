import Calendar from '../components/calendar/Calendar';

export default function EventsPage() {
  const events = [
    {
      date: new Date(2023, 7, 4), // Note: Month is 0-indexed (7 = August)
      title: 'Weekly Unwind Session',
      description: 'Meditation and Mandala Painting.',
    },
    {
      date: new Date(2023, 9, 10),
      title: 'Mental Health Day',
      description: 'Jam session, games, and more!',
    },
    {
      date: new Date(2023, 10, 15),
      title: 'Outlive Sensitization Workshop',
      description: 'A workshop on Suicide Prevention.',
    },
    {
      date: new Date(2025, 8, 20),
      title: 'Upcoming: Pottery Workshop',
      description: 'Learn a new skill and unwind.',
    },
  ];

  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Events Calendar
        </h1>
        <Calendar events={events} />
      </section>
    </div>
  );
}