import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './FeatureSection.module.css';

function FeatureSection() {
  const features = [
    {
      title: "For Schools",
      description: "Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62d4d20e894da1860875575c3862a4949d9c2cd75dbbaa4f09f0e7bb276af34e?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    },
    {
      title: "For Institutes",
      description: "Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62d4d20e894da1860875575c3862a4949d9c2cd75dbbaa4f09f0e7bb276af34e?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    },
    {
      title: "For Universities",
      description: "Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62d4d20e894da1860875575c3862a4949d9c2cd75dbbaa4f09f0e7bb276af34e?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    },
    {
      title: "Theoretical knowledge",
      description: "Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62d4d20e894da1860875575c3862a4949d9c2cd75dbbaa4f09f0e7bb276af34e?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    }
  ];

  return (
    <section className={styles.featureSection}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fbc830ef337bb4bfc9cdfe94ba812ad004d304fcf12f392dbb40fc10f15c24?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Feature illustration" className={styles.featureImage} />
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;