import React from 'react';
import styles from './InfoSection.module.css';
import ImageGrid from '../ImageGrid/ImageGrid';

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <ImageGrid />
      <div className={styles.infoLinks}>
        <InfoLink text="Who we are" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfd7ef2029a0a5449681f3a9026b67de8ea3f771c86a65e1fe56c14e93e84ae?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" />
        <InfoLink text="Academic" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfd7ef2029a0a5449681f3a9026b67de8ea3f771c86a65e1fe56c14e93e84ae?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" />
        <InfoLink text="Community" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfd7ef2029a0a5449681f3a9026b67de8ea3f771c86a65e1fe56c14e93e84ae?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" />
      </div>
    </section>
  );
};

const InfoLink = ({ text, iconSrc }) => (
  <div className={styles.infoLink}>
    <span className={styles.linkText}>{text}</span>
    <img loading="lazy" src={iconSrc} alt={`${text} icon`} className={styles.linkIcon} />
  </div>
);

export default InfoSection;