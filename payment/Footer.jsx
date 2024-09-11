import React from "react";
import styles from "./MyComponent.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dec1116218bb67132f1654a6ed19f8da7ebfd2e6b7f4760753abd5cd399d990?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
      alt=""
      className={styles.footerImage}
    />
    <div className={styles.footerContent}>
      <div className={styles.footerLinks}>
        <div className={styles.footerFlexContainer}>
          <div className={styles.addressColumn}>
            <div className={styles.addressWrapper}>
              <address className={styles.addressDetails}>
                <span>12th street,</span>
                <br />
                <span>Kumarathunga Mawatha,</span>
                <br />
                <span>Colombo 07</span>
                <br />
                <span>Sri Lanka</span>
                <br />
                <p className={styles.directions}>Directions &gt;</p>
                <div className={styles.contactInfoOffice}>
                  School Office:
                  <span>(011) 234 5567</span>
                  <br />
                  <span>e-mail: abc@gmail.com</span>
                </div>
                <p className={styles.contactUsLink}>Contact Us &gt;</p>
              </address>
            </div>
          </div>
          <div className={styles.quickLinksColumn}>
            <div className={styles.quickLinksWrapper}>
              <div className={styles.quickLinks}>
                Home
                <br />
                Course Details
                <br />
                Student Bio
                <br />
                Payments
                <br />
                Login
              </div>
              <div className={styles.quickLinksTitle}>Quick links</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
      className={styles.footerLogo}
      alt="footer logo"
    />
    <div className={styles.credit}>Website by: Team 1 Frithcode Training Progame</div>
    <div className={styles.reservedRights}>ABC School 2011 | All Rights Reserved</div>
  </footer>
);

export default Footer;