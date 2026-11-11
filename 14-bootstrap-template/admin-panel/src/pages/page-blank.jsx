import React from "react";

export default function Page() {
  return (
    <>
      
       ==========================================
               START: Sidebar Component
               Highly polished, dark-green navigation
               ========================================== 
      <div className="sidebar-wrapper" id="sidebar">
      
      <a className="sidebar-brand" href="index.html">
      <i className="bi bi-asterisk"></i>
      <span>Spark Admin</span>
      </a>
      
      <div className="flex-grow-1 overflow-y-auto">
      
      <div className="sidebar-menu-section">
      <div className="sidebar-menu-title">Menu</div>
      <ul className="sidebar-menu-list">
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link" href="index.html" id="menu-overview" title="Overview">
      <i className="bi bi-grid-fill"></i>
      <span>Dashboard</span>
      </a>
      </li>
      </ul>
      </div>
      
      <div className="sidebar-menu-section">
      <div className="sidebar-menu-title">Components</div>
      <ul className="sidebar-menu-list">
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link" href="tables-basic.html" id="menu-basictables" title="Basic Tables">
      <i className="bi bi-table"></i>
      <span>Basic Tables</span>
      </a>
      </li>
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link" href="ui-forms.html" id="menu-uiforms" title="Forms and Input">
      <i className="bi bi-input-cursor-text"></i>
      <span>Forms &amp; Input</span>
      </a>
      </li>
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link" href="ui-buttons.html" id="menu-uibuttons" title="Buttons">
      <i className="bi bi-menu-button-wide-fill"></i>
      <span>Buttons &amp; Alerts</span>
      </a>
      </li>
      </ul>
      </div>
      
      <div className="sidebar-menu-section">
      <div className="sidebar-menu-title">Pages</div>
      <ul className="sidebar-menu-list">
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link active" href="page-blank.html" id="menu-blankpage" title="Blank Page">
      <i className="bi bi-file-earmark"></i>
      <span>Blank Page</span>
      </a>
      </li>
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link" href="page-login.html" id="menu-loginpage" title="Login Page">
      <i className="bi bi-box-arrow-in-right"></i>
      <span>Login Screen</span>
      </a>
      </li>
      <li className="sidebar-menu-item">
      <a className="sidebar-menu-link" href="page-404.html" id="menu-404" title="404 Page">
      <i className="bi bi-slash-circle"></i>
      <span>Error 404</span>
      </a>
      </li>
      </ul>
      </div>
      </div>
      
      <div className="sidebar-profile">
      <img alt="Administrator" className="sidebar-profile-img" src="/assets/images/avatar.png"/>
      <div className="sidebar-profile-info">
      <div className="sidebar-profile-name">Administrator</div>
      <div className="sidebar-profile-email">admin@email.com</div>
      </div>
      </div>
      </div>
       ==========================================
               END: Sidebar Component
               ========================================== 
       ==========================================
               START: Main Content Area
               ========================================== 
      <div className="main-wrapper">
      
      <header className="navbar-custom">
      <div className="navbar-left">
      
      <button aria-label="Minimize Sidebar" className="btn-desktop-toggle d-none d-xl-flex align-items-center justify-content-center me-3" id="desktop-sidebar-toggle">
      <i className="bi bi-chevron-bar-left"></i>
      </button>
      
      <button aria-label="Toggle Navigation" className="sidebar-toggle-btn me-2" id="sidebar-toggle">
      <i className="bi bi-list"></i>
      </button>
      
      <div className="dropdown ms-2">
      <button aria-expanded="false" className="btn-quick-action dropdown-toggle" data-bs-toggle="dropdown" id="quick-actions-dropdown" type="button">
      <i className="bi bi-plus-lg"></i>
      <span>Create</span>
      </button>
      <ul aria-labelledby="quick-actions-dropdown" className="dropdown-menu dropdown-menu-quick-action">
      <li className="dropdown-header">Quick Action Shortcuts</li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-plus"></i> New Invoice</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-person-plus"></i> New User</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-box-seam"></i> New Product</a></li>
      <li>
      <hr className="dropdown-divider"/>
      </li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> System Settings</a></li>
      </ul>
      </div>
      </div>
      
      <div className="navbar-search-wrapper">
      <input className="navbar-search-input" id="main-search" placeholder="Search anything in Spark..." type="text"/>
      <button aria-label="Search" className="navbar-search-btn">
      <i className="bi bi-search"></i>
      </button>
      </div>
      
      <div className="navbar-actions">
      
      <button aria-label="Toggle Fullscreen" className="navbar-action-btn me-1" id="btn-fullscreen">
      <i className="bi bi-arrows-fullscreen"></i>
      </button>
      <div className="dropdown">
      <button aria-expanded="false" className="navbar-action-btn dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" id="btn-notifications" type="button">
      <i className="bi bi-bell"></i>
      <span className="navbar-action-badge"></span>
      </button>
      <div aria-labelledby="btn-notifications" className="dropdown-menu dropdown-menu-end dropdown-menu-notification p-0">
      <div className="notification-header">
      <h6 className="notification-title">Notifications</h6>
      <button className="btn-clear-all" type="button">Mark all read</button>
      </div>
      <div className="notification-list">
      
      <a className="notification-item" href="#">
      <div className="notification-icon bg-success text-white">
      <i className="bi bi-wallet2"></i>
      </div>
      <div className="notification-content">
      <p className="notification-text">New sale received: <strong>$150.00</strong></p>
      <span className="notification-time">2 mins ago</span>
      </div>
      <span className="notification-unread-dot"></span>
      </a>
      
      <a className="notification-item" href="#">
      <div className="notification-icon bg-primary text-white">
      <i className="bi bi-person-plus-fill"></i>
      </div>
      <div className="notification-content">
      <p className="notification-text">New user registered: <strong>John Doe</strong></p>
      <span className="notification-time">1 hour ago</span>
      </div>
      <span className="notification-unread-dot"></span>
      </a>
      
      <a className="notification-item" href="#">
      <div className="notification-icon bg-warning text-dark">
      <i className="bi bi-box-seam-fill"></i>
      </div>
      <div className="notification-content">
      <p className="notification-text">Stock running low: <strong>Hoodie</strong></p>
      <span className="notification-time">3 hours ago</span>
      </div>
      </a>
      </div>
      <a className="notification-footer" href="#">View All Notifications</a>
      </div>
      </div>
      
      <div className="dropdown ms-2">
      <button aria-expanded="false" className="navbar-profile-btn dropdown-toggle" data-bs-toggle="dropdown" id="profile-dropdown" type="button">
      <img alt="Profile Image" className="navbar-profile-img" src="/assets/images/avatar.png"/>
      <span className="navbar-profile-name d-none d-md-inline">Administrator</span>
      <i className="bi bi-chevron-down navbar-profile-caret"></i>
      </button>
      <ul aria-labelledby="profile-dropdown" className="dropdown-menu dropdown-menu-end dropdown-menu-profile">
      <li className="dropdown-header">Welcome !</li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-person"></i> My Account</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Settings</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-lock"></i> Lock Screen</a></li>
      <li>
      <hr className="dropdown-divider"/>
      </li>
      <li><a className="dropdown-item text-danger" href="page-login.html"><i className="bi bi-box-arrow-right"></i>
                      Logout</a></li>
      </ul>
      </div>
      </div>
      </header>
      
      
      <div className="page-header">
      <div>
      <h1 className="page-title">Blank Page</h1>
      <p className="page-subtitle">A blank starter template page for custom extensions.</p>
      </div>
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item"><a className="text-decoration-none text-muted-green" href="index.html">Home</a></li>
      <li aria-current="page" className="breadcrumb-item active text-main">Blank Page</li>
      </ol>
      </nav>
      </div>
      
      
      <div className="card p-4 border-light shadow-sm text-center">
      <div>
      <div className="mb-4 text-lime empty-state-icon">
      <i className="bi bi-file-earmark-fill"></i>
      </div>
      <h3 className="mb-2">Your Content Starts Here</h3>
      <p className="text-muted-green mb-4">Use this blank page starter template to build custom dashboard views, tables,
                forms, or any modules required for your Spark Admin system.</p>
      </div>
      </div>
      
      
      <footer className="footer-custom">
      <div className="footer-left">
      <span className="footer-logo">
      <i className="bi bi-asterisk"></i> Spark Admin
              </span>
      <span className="footer-separator">|</span>
      <span className="footer-copy">© 2026 Made with <i className="bi bi-heart-fill text-danger footer-heart"></i> by<a href="https://sparkadminpro.gumroad.com/" target="_blank">Spark Admin</a>• Distributed by <a href="https://www.themewagon.com/" target="_blank">ThemeWagon</a> </span>
      </div>
      <div className="footer-right">
      <ul className="footer-links">
      <li><a className="footer-link" href="#">Overview</a></li>
      <li><a className="footer-link" href="#">Statistics</a></li>
      <li><a className="footer-link" href="#">Help &amp; Documentation</a></li>
      <li><a className="footer-link" href="#">Status <span className="status-dot"></span></a></li>
      </ul>
      </div>
      </footer>
      
      </div>
       ==========================================
               END: Main Content Area
               ========================================== 
       Local Third-Party Libraries Script dependencies 
      
      
      
       Local dashboard interactions controller 
      
    </>
  );
}
