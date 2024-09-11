import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactInfo}>
        <button className={styles.contactButton}>Contact Us</button>
        <div className={styles.phoneContainer}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/79e9601ce82d6a295eaf8f01cfb588b8544f18a17c570eb456650b59cf59bdd7?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Phone icon" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
};

export default Header;