import React from 'react';
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <section className={styles.hero}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a7cc891dcfd13124eb30078cdf1a2bc7e3aa33ff069bc9de6fa0647fab3afd?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Hero background" className={styles.heroBackground} />
     
      <h2 className={styles.heroTitle}>
        Faith, Community <br /> And Excellence
      </h2>
      <p className={styles.heroSubtitle}>
        Education is an environment of faith and virtue.
      </p>
    </section>
  );
};

export default Hero;