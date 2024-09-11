import React from 'react';
import styles from './FeatureCard.module.css';

function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureHeader}>
        <img src={icon} alt="" className={styles.featureIcon} />
        <h3 className={styles.featureTitle}>{title}</h3>
      </div>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default FeatureCard;