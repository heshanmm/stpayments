import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d64643c5fb78a86d6f5a81563000377921eccb97cdcbcf4c756f14d561769e4?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="About ABC School" className={styles.aboutImage} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.aboutTitle}>About ABC</h2>
        <p className={styles.aboutDescription}>
          <span className={styles.missionHighlight}>Our school's mission is</span>
          <br />
          To learn leadership, the common core, and relationships for life. Our mission is to provide a safe, disciplined learning environment that empowers all students to develop their full potential.
        </p>
        <button className={styles.seeMoreButton}>See more</button>
      </div>
    </section>
  );
};

export default AboutSection;