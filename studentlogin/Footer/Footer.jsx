import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <div className={styles.logoPlaceholder} />
          <address className={styles.address}>
            12th street,<br />
            Kumarathunga Mawatha,<br />
            Colombo 07<br />
            Sri Lanka
          </address>
          <a href="#" className={styles.directionsLink}>Directions &gt;</a>
          <p className={styles.schoolOffice}>
            School Office: <span className={styles.phoneNumber}>(011) 234 5567</span><br />
            e-mail: <span className={styles.email}>abc@gmail.com</span>
          </p>
          <a href="#" className={styles.contactLink}>Contact Us &gt;</a>
        </div>
        <nav className={styles.quickLinks}>
          <h3 className={styles.quickLinksTitle}>Quick links</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Course Details</a></li>
            <li><a href="#">Student Bio</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>ABC School 2011 | All Rights Reserved</p>
        <p className={styles.credits}>Website by: Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
};

export default Footer;