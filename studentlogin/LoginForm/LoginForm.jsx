import React from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';


function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <h2 className={styles.loginTitle}>STUDENT LOGIN</h2>
      <div className={styles.loginTypeSelector}>
        <button className={`${styles.selectorButton} ${styles.active}`}>student</button>
        <button className={styles.selectorButton}>teacher</button>
        <button className={styles.selectorButton}>admin</button>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="studentId" className={styles.inputLabel}>Student Id</label>
          <input type="text" id="studentId" className={styles.inputField} />
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
        Don't you have an account?  <Link to="/signup" className={styles.signupLink}>Create your account</Link>
      </p>
    </section>
  );
};

export default LoginForm;