import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <div className={styles.logoCircle} />
          <address className={styles.address}>
            12th street,<br />
            Kumarathunga Mawatha,<br />
            Colombo 07<br />
            Sri Lanka
          </address>
          <a href="#directions" className={styles.directionsLink}>Directions &gt;</a>
          <div className={styles.schoolOffice}>
            School Office: <a href="tel:0112345567">(011) 234 5567</a><br />
            e-mail: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </div>
          <a href="#contact" className={styles.contactLink}>Contact Us &gt;</a>
        </div>
        <nav className={styles.footerNav}>
          <h3 className={styles.quickLinks}>Quick links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#course-details">Course Details</a></li>
            <li><a href="#student-bio">Student Bio</a></li>
            <li><a href="#payments">Payments</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.footerImage} />
      <div className={styles.copyright}>
        <p>ABC School 2011 | All Rights Reserved</p>
        <p>Website by: Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
}

export default Footer;