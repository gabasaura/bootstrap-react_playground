import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>
      <button
        className={`btn btn-dark ${styles.toggleButton}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        ☰
      </button>
      <nav className="nav flex-column">
        <a href="#" className={`${styles.navLink}`}>Dashboard</a>
        <a href="#" className={`${styles.navLink}`}>Settings</a>
        <a href="#" className={`${styles.navLink}`}>Profile</a>
      </nav>
    </div>
  );
};

export default Sidebar;
