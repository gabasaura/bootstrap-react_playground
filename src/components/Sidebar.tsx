import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleIcon from '@mui/icons-material/People';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`d-flex flex-column flex-shrink-0 bg-body-tertiary ${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>

      <button
        className={`nav-link active py-3 border-bottom rounded-0 ${styles.toggleButton}`}
        onClick={() => setCollapsed(!collapsed)}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        aria-current="page"

      >
        <HomeIcon fontSize="medium" />
      </button>

      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <DashboardIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Products"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <GridViewIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Customers"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <GridViewIcon fontSize="medium" />
          </a>
        </li>
      </ul>



      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          title="Customers"
          data-bs-placement="right"
        >
          <PeopleIcon fontSize="medium" />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
