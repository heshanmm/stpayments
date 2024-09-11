import React from 'react';
import styles from './EventsSection.module.css';

const events = [
  { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a08304b4bac96cdebbf2219a229edfbe9963e1d45a2aa71b154a3a2474e1c112?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5', alt: 'Event 1' },
  { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/183ea82722d400cca4660d60a58dfa362dbf14ba730aa0e52d489dc373fed6e1?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5', alt: 'Event 2' },
  { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/69b73cd676ad5323f0074d8fbf35c73f08f33fcf750cdd7c7d19588e2b0a3004?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5', alt: 'Event 3' }
];

const EventsSection = () => {
  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.eventsTitle}>Events</h2>
      <div className={styles.eventsGrid}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventItem}>
            <img loading="lazy" src={event.image} alt={event.alt} className={styles.eventImage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;