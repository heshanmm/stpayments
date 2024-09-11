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
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cdd40df3dc114e22152b88c82a71f3887183ec094415171dc181648d9261bda?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
};

export default Header;