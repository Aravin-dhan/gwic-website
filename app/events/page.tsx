import Calendar from '../components/calendar/Calendar';

async function getEvents() {
  const res = await fetch('https://raw.githubusercontent.com/Aravin-dhan/gwic-events-data/main/events.json', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  const events = await res.json();
  // Convert date strings to Date objects
  return events.map((event: any) => ({ ...event, date: new Date(event.date) }));
}

export default async function EventsPage() {
  const events = await getEvents();

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