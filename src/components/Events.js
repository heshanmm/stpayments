import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="events-section">
      <h2>Events</h2>
      <div className="events-grid">
        <div className="event-item">
          <img src="images.jpg" alt="Event 1" />
        </div>
        <div className="event-item">
          <img src="images (1).jpg" alt="Event 2" />
        </div>
        <div className="event-item">
          <img src="images (2).jpg" alt="Event 3" />
        </div>
      </div>
    </div>
  );
}

export default Events;