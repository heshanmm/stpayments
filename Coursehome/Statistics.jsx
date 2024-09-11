import React from 'react';
import styles from './Statistics.module.css';

function Statistics() {
  return (
    <section className={styles.statistics}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>10000+</span>
        <span className={styles.statLabel}>Students</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>500+</span>
        <span className={styles.statLabel}>Teaching hours</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>80+</span>
        <span className={styles.statLabel}>Staff</span>
      </div>
    </section>
  );
}

export default Statistics;