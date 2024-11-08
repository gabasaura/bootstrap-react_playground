import React from 'react';
import styles from '../styles/Content.module.scss';

const Content: React.FC = () => {
  return (
    <>
    <div className='mt-4 d-flex flex-row'>
      
      <div className='mx-4'>
        <div className={`card d-flex ${styles.content}`}>
          <h1 className={styles.heading}>Welcome to the Dashboard</h1>
          <p>Here is your main content area 1.</p>
        </div>
      </div>

      <div className=''>
        <div className={`card d-flex ${styles.content}`}>
          <h1 className={styles.heading}>Content Area 2</h1>
          <p>Here is your almost main content area.</p>
        </div>
      </div>

      <div className='mx-4'>
        <div className={`card ${styles.content}`}>
          <h1 className={styles.heading}>Some other content 3</h1>
          <p>Here is your content wiji.</p>
        </div>
      </div>

    </div>

    <div className='my-4 d-flex flex-row justify-content-between'>
      
      <div className='mx-4 flex-grow-1'>
        <div className={`card  ${styles.content}`}>
          <h1 className={styles.heading}>Welcome to the Dashboard</h1>
          <p>Here is your main content area 1.</p>
        </div>
      </div>

      

    </div>

    <div className='mb-4 d-flex flex-row justify-content-between'>
      
      <div className='ms-4 flex-grow-1'>
        <div className={`card  ${styles.content}`}>
          <h1 className={styles.heading}>Welcome to the Dashboard</h1>
          <p>Here is your main content area 1.</p>
        </div>
      </div>

      <div className='mx-4'>
        <div className={`card ${styles.content}`}>
          <h1 className={styles.heading}>Some other content 3</h1>
          <p>Here is your content wiji.</p>
        </div>
      </div>

    </div>

</>
    
  );
};

export default Content;
