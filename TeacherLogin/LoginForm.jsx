import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <h2 className={styles.loginTitle}>TEACHER LOGIN</h2>
      <div className={styles.loginTypeSelector}>
        <button className={`${styles.selectorButton} ${styles.active}`}>student</button>
        <button className={styles.selectorButton}>teacher</button>
        <button className={styles.selectorButton}>admin</button>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.inputWrapper}>
          <label htmlFor="teacherId" className={styles.inputLabel}>Teacher Id</label>
          <input type="text" id="teacherId" className={styles.inputField} />
        </div>
        <div className={styles.inputWrapper}>
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
        Don't you have an account? <Link to="/teacher-register" className={styles.signupLink}>Create your account</Link>
      </p>
    </section>
  );
}

export default LoginForm;