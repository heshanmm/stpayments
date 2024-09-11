import React from 'react';
import styles from './QuickLinks.module.css';

const quickLinks = [
  { title: 'Who we are', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9dfd7ef2029a0a5449681f3a9026b67de8ea3f771c86a65e1fe56c14e93e84ae?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5' },
  { title: 'Academic', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9dfd7ef2029a0a5449681f3a9026b67de8ea3f771c86a65e1fe56c14e93e84ae?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5' },
  { title: 'Community', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9dfd7ef2029a0a5449681f3a9026b67de8ea3f771c86a65e1fe56c14e93e84ae?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5' }
];

const QuickLinks = () => {
  return (
    <div className={styles.quickLinks}>
      {quickLinks.map((link, index) => (
        <div key={index} className={styles.linkItem}>
          <span className={styles.linkTitle}>{link.title}</span>
          <img loading="lazy" src={link.icon} alt={`${link.title} icon`} className={styles.linkIcon} />
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;