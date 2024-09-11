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
            Sri Lanka<br /><br />
            <a href="#directions" className={styles.directionsLink}>Directions &gt;</a>
          </address>
          <div className={styles.schoolContact}>
            School Office: <span className={styles.phoneNumber}>(011) 234 5567</span><br />
            e-mail: <a href="mailto:abc@gmail.com" className={styles.emailLink}>abc@gmail.com</a>
          </div>
          <a href="#contact" className={styles.contactLink}>Contact Us &gt;</a>
        </div>
        <nav className={styles.quickLinks}>
          <h3 className={styles.quickLinksTitle}>Quick links</h3>
          <ul className={styles.linksList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#course-details">Course Details</a></li>
            <li><a href="#student-bio">Student Bio</a></li>
            <li><a href="#payments">Payments</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <p>ABC School 2011 | All Rights Reserved</p>
        <p className={styles.credits}>Website by: Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
};

export default Footer;