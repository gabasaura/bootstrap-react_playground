import React from 'react';
import styles from '../styles/Content.module.scss';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>Welcome to the Dashboard</h1>
      <p>Here is your main content area.</p>
    </div>
  );
};

export default Content;
