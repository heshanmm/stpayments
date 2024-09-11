import React from 'react';
import styles from './HomePage.module.css';

import Hero from '../Hero/Hero';
import ImageGrid from '../ImageGrid/ImageGrid';
import QuickLinks from '../QuickLinks/QuickLinks';
import AboutSection from '../AboutSection/AboutSection';
import EventsSection from '../EventsSection/EventsSection';


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      
      <Hero />
      <main className={styles.mainContent}>
        <section className={styles.imageSection}>
          <ImageGrid />
          <QuickLinks />
        </section>
        <AboutSection />
        <EventsSection />
      </main>
      
    </div>
  );
};

export default HomePage;
