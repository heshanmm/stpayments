import React from 'react';


import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import SchoolLevels from './SchoolLevels';
import Statistics from './Statistics';
import CallToAction from './CallToAction';

import styles from './CourseDetails.module.css';

function CourseDetails() {
  return (
    <main className={styles.courseDetails}>
      
      
      <div className={styles.accentBar} />
      <HeroSection />
      <FeatureSection />
      <hr className={styles.divider} />
      <div className={styles.backgroundAccent} />
      <SchoolLevels />
      <Statistics />
      <CallToAction />
      
    </main>
  );
}

export default CourseDetails;