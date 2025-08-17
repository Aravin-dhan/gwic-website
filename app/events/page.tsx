'use client';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Weekly Unwind Session',
    start: new Date(2023, 7, 4, 17, 0, 0), // Note: Month is 0-indexed (7 = August)
    end: new Date(2023, 7, 4, 18, 0, 0),
    desc: 'Meditation and Mandala Painting.',
  },
  {
    title: 'Mental Health Day',
    start: new Date(2023, 9, 10),
    end: new Date(2023, 9, 10),
    desc: 'Jam session, games, and more!',
  },
  {
    title: 'Outlive Sensitization Workshop',
    start: new Date(2023, 10, 15),
    end: new Date(2023, 10, 15),
    desc: 'A workshop on Suicide Prevention.',
  },
  {
    title: 'Upcoming: Pottery Workshop',
    start: new Date(2025, 8, 20),
    end: new Date(2025, 8, 20),
    desc: 'Learn a new skill and unwind.',
  },
];

export default function EventsPage() {
  return (
    <div className="container">
      <section style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>Events Calendar</h1>
        <div style={{ height: '700px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            onSelectEvent={(event: { title: string; desc: string; }) => alert(`Event: ${event.title}\nDescription: ${event.desc}`)}
          />
        </div>
      </section>
    </div>
  );
}