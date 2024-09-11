import React from 'react';

import LoginForm from '../LoginForm/LoginForm';

import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
    
      <main className={styles.mainContent}>
        <div className={styles.imageContainer}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/921d27ca628df00b62f28fd500190db8301159f5ffbd871790f3f840f20059a6?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="School building" className={styles.schoolImage} />
        </div>
        <LoginForm />
      </main>
     
    </div>
  );
};

export default LoginPage;