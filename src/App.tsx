import React from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import Content from './components/Content';
import styles from '@pages/App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <TopNavbar />
      <div className={styles.mainContent}>
        <Sidebar />
        <div className="flex-grow-1">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
