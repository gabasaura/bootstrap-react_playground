// src/components/TopNavbar.tsx
import React from 'react';
import styles from '../styles/TopNavbar.module.scss';

const TopNavbar: React.FC = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      {/* Left: Logo */}
      <div className={`navbar-brand ${styles.logo}`}>
        <a href="#">Logo</a>
      </div>

      {/* Center: Search Bar */}
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

      {/* Right: Profile Dropdown */}
      <div className={`dropdown ${styles.profileDropdown}`}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Profile
        </button>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;