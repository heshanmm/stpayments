import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminLogin.module.css';

function LoginForm() {
  const userTypes = ['student', 'teacher', 'admin'];

  return (
    <section className={styles.loginFormSection}>
      <h2 className={styles.loginTitle}>ADMIN LOGIN</h2>
      <div className={styles.userTypeSelector}>
        {userTypes.map((type, index) => (
          <button
            key={type}
            className={`${styles.userTypeButton} ${index === 2 ? styles.active : ''}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="adminId" className={styles.inputLabel}>Admin Id</label>
          <input type="text" id="adminId" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} />
        </div>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>REMEMBER ME</label>
        </div>
        <button type="submit" className={styles.signInButton}>SIGN IN</button>
      </form>
      <p className={styles.signupPrompt}>
        Don't you have an account? <Link to="/admin-register" className={styles.signupLink}>Create your account</Link>
      </p>
    </section>
  );
}

export default LoginForm;

