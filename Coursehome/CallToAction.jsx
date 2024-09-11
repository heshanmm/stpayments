import React from 'react';
import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <h2 className={styles.ctaTitle}>Apply Now to get 20% Discount Every Courses</h2>
      <button className={styles.ctaButton}>Apply Now</button>
    </section>
  );
}

export default CallToAction;