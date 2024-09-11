import React from 'react';
import styles from './AdminRegister.module.css';

import RegistrationForm from './RegistrationForm';

function AdminRegister() {
  return (
    <div className={styles.adminRegister}>
     
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b942daac0bf962d9cb8f68874afbc2afd7c6751c173c64ed33421faa794eaea6?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Registration illustration" className={styles.registrationImage} />
          </div>
          <div className={styles.formColumn}>
            <RegistrationForm />
          </div>
        </div>
      </main>
     
    </div>
  );
}

export default AdminRegister;