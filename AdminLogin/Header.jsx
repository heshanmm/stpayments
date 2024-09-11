import React from 'react';
import styles from './AdminLogin.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactInfo}>
        <button className={styles.contactButton}>Contact Us</button>
        <div className={styles.phoneContainer}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38f175a2e18bfd7ac12ac6b65d3fbe0f4c70295e9c3c5a9aa000d66338aad125?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Phone icon" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
}

export default Header;