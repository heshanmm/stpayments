import React from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const userTypes = ['student', 'teacher', 'admin'];

  return (
    <form className={styles.registrationForm}>
      <h2 className={styles.formTitle}>REGISTER</h2>
      <div className={styles.userTypeSelector}>
        {userTypes.map((type, index) => (
          <button
            key={type}
            type="button"
            className={`${styles.userTypeButton} ${index === 2 ? styles.active : ''}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
        <input type="text" id="firstName" className={styles.inputField} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
        <input type="text" id="lastName" className={styles.inputField} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="adminId" className={styles.inputLabel}>Admin Id</label>
        <input type="text" id="adminId" className={styles.inputField} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.inputLabel}>Password</label>
        <input type="password" id="password" className={styles.inputField} />
      </div>
      <button type="submit" className={styles.submitButton}>SUBMIT</button>
    </form>
  );
}

export default RegistrationForm;