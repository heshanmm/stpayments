import React from 'react';
import styles from './ImageGrid.module.css';

const ImageGrid = () => {
  return (
    <div className={styles.imageGrid}>
      <div className={styles.column}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da19625e1d61924d930b79d629b16880bae2d6e210df489d896a872b95a2f749?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="School activity 1" className={styles.image} />
      </div>
      <div className={styles.column}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f66ce903bf65f9bc5b7071f47f5ac676b0cf2d4a4824780ce2e17c8e95cad35?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="School activity 2" className={styles.image} />
      </div>
      <div className={styles.column}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c44deb974618f2fc4f40bf06c0f71cf6d750a95b1a55873243da9da55eb135c?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="School activity 3" className={styles.image} />
      </div>
    </div>
  );
};

export default ImageGrid;