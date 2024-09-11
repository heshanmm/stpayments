import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactInfo}>
        <button className={styles.contactButton}>Contact Us</button>
        <div className={styles.phoneWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0d578bb609e7a14fb1d8305628f3c31cfeaa1c3414303977ba221b34531fba?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Phone icon" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
}

export default Header;