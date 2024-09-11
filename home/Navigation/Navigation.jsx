import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

const navigationItems = [<Link to="/Home" >Home</Link>,<Link to="/CourseDetails" >Course Details</Link>, <Link to="/StudentBio" >Student Bio</Link>, <Link to="/Payments" >Payments</Link>, <Link to="/Login1" >Login</Link>];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navigationItems.map((item, index) => (
        <button key={index} className={styles.navItem}>{item}</button>
      ))}
    </nav>
  );
};

export default Navigation; 