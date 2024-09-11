import React from 'react';

import LoginForm from './LoginForm';

import styles from './TeacherLogin.module.css';

function TeacherLogin() {
  return (
    <div className={styles.teacherLogin}>
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb3de9a6a0bcd941490476cca2734c3c82d59ca99e2a2463ad4764abb343a51?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Teacher login illustration" className={styles.loginImage} />
          </div>
          <div className={styles.formColumn}>
            <LoginForm />
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default TeacherLogin;