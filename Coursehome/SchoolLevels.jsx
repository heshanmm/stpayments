import React from 'react';
import SchoolLevelCard from './SchoolLevelCard';
import styles from './SchoolLevels.module.css';

function SchoolLevels() {
  const levels = [
    {
      title: "Primary School",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/21f38165b801e7baf6c5a8f5f71996d1e35809f9f61f2fbeb8f822f8176f2c76?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    },
    {
      title: "Middle School",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/39ac7921c93fa30ffc0661b67d5141cfb875dcf503ef5ec8a955bc7a4cc8a4a9?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    },
    {
      title: "Upper School",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dcd97a253a8605b152f3b712743fb442de32e574b92e933ec84405d718300d1b?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
    }
  ];

  return (
    <section className={styles.schoolLevels}>
      {levels.map((level, index) => (
        <SchoolLevelCard key={index} {...level} />
      ))}
    </section>
  );
}

export default SchoolLevels;