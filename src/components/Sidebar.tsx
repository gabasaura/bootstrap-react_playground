import React, { useState } from 'react';
import styles from '@component/Sidebar.module.scss';
import MapSharpIcon from '@mui/icons-material/MapSharp';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import AssistantSharpIcon from '@mui/icons-material/AssistantSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`d-flex flex-column flex-shrink-0 bg-body-tertiary ${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>

      <button
        className={`nav-link py-3 border-bottom rounded-0 ${styles.toggleButton}`}
        onClick={() => setCollapsed(!collapsed)}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        aria-current="page"
      >
        <MenuSharpIcon fontSize="medium" />
        {!collapsed && <span className='if-expanded'>Explore</span>}
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
            <MapSharpIcon fontSize="medium" />
            {!collapsed && <span className='if-expanded'>Explore</span>}
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <AddLocationAltSharpIcon fontSize="medium" />
            {!collapsed && <span className='if-expanded'>Pipo Point</span>}
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
            <AssistantSharpIcon fontSize="medium" />
            {!collapsed && <span className='if-expanded'>Activities</span>}
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
            <EmojiEventsSharpIcon fontSize="medium" />
            {!collapsed && <span className='if-expanded'>Ranking</span>}
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
          <HelpSharpIcon fontSize="medium" />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item" href="#">About Pipo Project</a></li>
          <li><a className="dropdown-item" href="#">Collaborate</a></li>
          <li><a className="dropdown-item" href="#">Faqs</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
