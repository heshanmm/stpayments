import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const quickLinks = ['Home', 'Course Details', 'Student Bio', 'Payments', 'Login'];

  return (
    <footer className={styles.footer}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01eb93c43b312d78466cea7b663d6e7d5a4321eea86f077fb8dceaf9864ab74?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.footerBackground} />
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.contactColumn}>
            <div className={styles.logoCircle} />
            <address className={styles.schoolAddress}>
              12th street,<br />
              Kumarathunga Mawatha,<br />
              Colombo 07<br />
              Sri Lanka
            </address>
            <a href="#directions" className={styles.directionsLink}>Directions &gt;</a>
            <div className={styles.contactDetails}>
              School Office: <span className={styles.highlight}>(011) 234 5567</span><br />
              e-mail: <span className={styles.highlight}>abc@gmail.com</span>
            </div>
            <a href="#contact" className={styles.contactLink}>Contact Us &gt;</a>
          </div>
          <nav className={styles.quickLinksColumn}>
            <h3 className={styles.quickLinksTitle}>Quick links</h3>
            <ul className={styles.quickLinksList}>
              {quickLinks.map((link, index) => (
                <li key={index}><a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <p>ABC School 2011 | All Rights Reserved</p>
        <p className={styles.credits}>Website by: Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
}

export default Footer;