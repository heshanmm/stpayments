import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0052b51e86b3f95416e210dc9aae4b6282655bd638403f6702d8ff00999a15e0?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Footer background" className={styles.footerBackground} />
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a47316d043d43a5a16eb24c85cb56b53147887c2d294003990eb15cbfae4ab0?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="School logo" className={styles.schoolLogo} />
          <div className={styles.addressInfo}>
            <p>12th street,<br />Kumarathunga Mawatha,<br />Colombo 07<br />Sri Lanka</p>
            <a href="#directions" className={styles.directionsLink}>Directions :</a>
            <p>School Office : <span className={styles.phoneNumber}>(011) 234 5567</span><br />
            e-mail : <span className={styles.email}>abc@gmail.com</span></p>
            <a href="#contact" className={styles.contactLink}>Contact Us :</a>
          </div>
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
      <div className={styles.copyright}>
        <p>ABC School 2011 | All Rights Reserved</p>
        <p>Website by : Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
};

export default Footer;