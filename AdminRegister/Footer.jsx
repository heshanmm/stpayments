import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const quickLinks = ['Home', 'Course Details', 'Student Bio', 'Payments', 'Login'];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <div className={styles.logoCircle} />
          <address className={styles.address}>
            12th street,<br />
            Kumarathunga Mawatha,<br />
            Colombo 07<br />
            Sri Lanka
          </address>
          <a href="#directions" className={styles.directionsLink}>Directions &gt;</a>
          <div className={styles.contactDetails}>
            School Office: <a href="tel:0112345567">(011) 234 5567</a><br />
            e-mail: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </div>
          <a href="#contact" className={styles.contactLink}>Contact Us &gt;</a>
        </div>
        <nav className={styles.quickLinksNav}>
          <h3 className={styles.quickLinksTitle}>Quick links</h3>
          <ul className={styles.quickLinksList}>
            {quickLinks.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.footerDivider} />
      <div className={styles.copyrightSection}>
        <p>ABC School 2011 | All Rights Reserved</p>
        <p>Website by: Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
}

export default Footer;