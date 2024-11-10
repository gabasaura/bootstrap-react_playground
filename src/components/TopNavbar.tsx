// src/components/TopNavbar.tsx
import React from 'react';
import styles from '@component/TopNavbar.module.scss';
import { Avatar } from '@mui/material';


const TopNavbar: React.FC = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      {/* Logo */}
      <div className={`navbar-brand ${styles.logo}`}>
        <a href="#">Logo</a>
      </div>

      {/* Search Bar */}
      <div className="d-flex justify-content-center flex-grow-1">
        <form className="d-flex" role="search">
          <input
            className={`form-control ${styles.searchInput}`}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>

      {/* Profile Dropdown */}
      <div className={`dropdown ${styles.profileDropdown}`}>
      <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Avatar src="https://github.com/mdo.png" alt="mdo" sx={{ width: 24, height: 24 }} />
        </a>
        <ul className="dropdown-menu dropdown-menu-end text-small shadow" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>

      
      </div>
    </nav>
  );
};

export default TopNavbar;