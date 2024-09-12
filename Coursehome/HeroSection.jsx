import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd00f1c4dbcd8fb05f8a80771763354363419530e68120d18b8b8d5cd8dd43a8?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Students studying" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>
            The best management systems for Education institutes.
          </h2>
          <button className={styles.exploreButton}>Explore more</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;