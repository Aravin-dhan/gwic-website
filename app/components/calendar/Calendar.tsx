'use client';

import { useState } from 'react';
import './Calendar.css';

interface Event {
  date: Date;
  title: string;
  description: string;
}

interface CalendarProps {
  events: Event[];
}

export default function Calendar({ events }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const dayEvents = events.filter(event => event.date.toDateString() === date.toDateString());
    days.push(
      <div key={i} className="calendar-day">
        <span>{i}</span>
        {dayEvents.map((event, index) => (
          <div key={index} className="event" onClick={() => setSelectedEvent(event)}>
            {event.title}
          </div>
        ))}
      </div>
    );
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-name">Sun</div>
        <div className="calendar-day-name">Mon</div>
        <div className="calendar-day-name">Tue</div>
        <div className="calendar-day-name">Wed</div>
        <div className="calendar-day-name">Thu</div>
        <div className="calendar-day-name">Fri</div>
        <div className="calendar-day-name">Sat</div>
        {days}
      </div>
      {selectedEvent && (
        <div className="event-modal">
          <div className="event-modal-content">
            <span className="close" onClick={() => setSelectedEvent(null)}>&times;</span>
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.date.toLocaleDateString()}</p>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}