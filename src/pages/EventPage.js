import React, { useState, useEffect } from 'react';
import { getEvents, createRSVP } from '../services/ApiService';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (err) {
        setError('Failed to load events');
      }
    };

    fetchEvents();
  }, []);

  const handleRSVP = async (eventId) => {
    try {
      const rsvpData = { eventId, status: 'Attending' };
      await createRSVP(rsvpData);
      alert('RSVP successful');
    } catch (err) {
      setError('RSVP failed');
    }
  };

  return (
    <div>
      <h2>Events</h2>
      {error && <p>{error}</p>}
      {events.map((event) => (
        <div key={event.eventId}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <button onClick={() => handleRSVP(event.eventId)}>RSVP</button>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
