import React from 'react';
import styles from './NavigationPills.module.css';

function NavigationPills() {
  const navItems = ['Home', 'Course Details', 'Student Bio', 'Payments', 'Login'];

  return (
    <nav className={styles.navigationPillList}>
      {navItems.map((item, index) => (
        <button key={index} className={styles.navigationPill}>
          {item}
        </button>
      ))}
    </nav>
  );
}

export default NavigationPills;