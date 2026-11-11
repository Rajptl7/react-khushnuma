import React from "react";

export default function Page() {
  return (
    <>
      
       ==========================================
               START: Sidebar Component
               Highly polished, dark-green sticky navigation
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
      <a className="sidebar-menu-link active" href="index.html" id="menu-overview" title="Overview">
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
      <a className="sidebar-menu-link" href="page-blank.html" id="menu-blankpage" title="Blank Page">
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
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">An easy way to manage sales with care and precision.</p>
      </div>
      <button className="btn-date-picker" id="date-picker-trigger" type="button">
      <i className="bi bi-calendar4-event"></i>
      <span id="selected-date-range">January 12, 2026 - January 23, 2026</span>
      <i className="bi bi-chevron-down ms-1"></i>
      </button>
      </div>
      
      
      <div className="row g-4">
      
      <div className="col-12">
      <div className="row g-4">
      
      <div className="col-md-4">
      <div className="card alert-green-card">
      <div className="position-relative z-index-2">
      <span className="alert-green-badge">Update</span>
      <div className="alert-green-date">Feb 14th 2026</div>
      <div className="alert-green-text">Sales revenue increased 40% in 1 week</div>
      </div>
      <a className="alert-green-link z-index-2" href="#" id="alert-link-statistics">
      <span>See Statistics</span>
      <i className="bi bi-arrow-right"></i>
      </a>
      
      <svg className="alert-green-bg-shape" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50,50)">
      <rect fill="#B4F105" height="90" rx="6" ry="6" width="12" x="-6" y="-45"></rect>
      <rect fill="#B4F105" height="90" rx="6" ry="6" transform="rotate(60)" width="12" x="-6" y="-45"></rect>
      <rect fill="#B4F105" height="90" rx="6" ry="6" transform="rotate(120)" width="12" x="-6" y="-45"></rect>
      </g>
      </svg>
      </div>
      </div>
      
      <div className="col-md-4">
      <div className="card card-stat d-flex flex-column justify-content-between">
      <div>
      <div className="card-header">
      <span className="stat-label">Net Income</span>
      <div className="dropdown">
      <button aria-expanded="false" aria-label="More Options" className="card-more-btn" data-bs-toggle="dropdown" id="btn-more-income" type="button">
      <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
      <li><a className="dropdown-item" href="#"><i className="bi bi-arrow-repeat"></i> Refresh</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-arrow-down"></i> Export
                                Report</a></li>
      <li>
      <hr className="dropdown-divider"/>
      </li>
      <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-eye-slash"></i> Hide Details</a>
      </li>
      </ul>
      </div>
      </div>
      <div className="stat-value">$196.000</div>
      <div className="trend-badge trend-up">
      <i className="bi bi-arrow-up-right"></i>
      <span>+35% from last month</span>
      </div>
      </div>
      <div className="sparkline-container sparkline-card-footer">
      <div id="income-sparkline"></div>
      </div>
      </div>
      </div>
      
      <div className="col-md-4">
      <div className="card card-stat d-flex flex-column justify-content-between">
      <div>
      <div className="card-header">
      <span className="stat-label">Total Return</span>
      <div className="dropdown">
      <button aria-expanded="false" aria-label="More Options" className="card-more-btn" data-bs-toggle="dropdown" id="btn-more-return" type="button">
      <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
      <li><a className="dropdown-item" href="#"><i className="bi bi-arrow-repeat"></i> Refresh</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-arrow-down"></i> Export
                                Report</a></li>
      <li>
      <hr className="dropdown-divider"/>
      </li>
      <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-eye-slash"></i> Hide Details</a>
      </li>
      </ul>
      </div>
      </div>
      <div className="stat-value">$32.000</div>
      <div className="trend-badge trend-down">
      <i className="bi bi-arrow-down-left"></i>
      <span>-24% from last month</span>
      </div>
      </div>
      <div className="sparkline-container sparkline-card-footer">
      <div id="return-sparkline"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      
      <div className="col-xl-9 col-lg-8">
      
      <div className="row g-4">
      
      <div className="col-12">
      <div className="card mb-0">
      <div className="card-header mb-2">
      <h2 className="card-title">Revenue</h2>
      
      <div className="d-flex gap-3 align-items-center">
      <div className="chart-legend-item">
      <span className="legend-dot bg-forest-medium"></span>
      <span className="chart-legend-label">Income</span>
      </div>
      <div className="chart-legend-item">
      <span className="legend-dot bg-lime-accent"></span>
      <span className="chart-legend-label">Expenses</span>
      </div>
      </div>
      </div>
      <div className="d-flex align-items-baseline gap-2 mb-3">
      <span className="stat-value-amount">$196.000</span>
      <span className="trend-badge trend-up fs-xs">+35% from last month</span>
      </div>
      <div id="revenue-chart"></div>
      </div>
      </div>
      
      <div className="col-md-7 d-flex flex-column">
      <div className="card h-100 flex-grow-1">
      <div className="card-header">
      <h2 className="card-title">Transaction</h2>
      <div className="dropdown">
      <button aria-expanded="false" aria-label="More Options" className="card-more-btn" data-bs-toggle="dropdown" id="btn-more-transaction" type="button">
      <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
      <li><a className="dropdown-item" href="#"><i className="bi bi-funnel"></i> Filter Status</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-arrow-down"></i> Export CSV</a>
      </li>
      </ul>
      </div>
      </div>
      
      <div className="transaction-list">
      <div className="transaction-item">
      <div className="transaction-icon bg-forest-light text-lime">
      <i className="bi bi-spotify"></i>
      </div>
      <div className="transaction-info">
      <div className="transaction-name">Spotify Subscription</div>
      <div className="transaction-date">Feb 14, 2026 • 12:40 PM</div>
      </div>
      <div className="transaction-amount text-main">-$15.00</div>
      </div>
      <div className="transaction-item">
      <div className="transaction-icon bg-forest-light text-lime">
      <i className="bi bi-paypal"></i>
      </div>
      <div className="transaction-info">
      <div className="transaction-name">Paypal Transfer</div>
      <div className="transaction-date">Feb 13, 2026 • 08:15 AM</div>
      </div>
      <div className="transaction-amount text-success">+$1,250.00</div>
      </div>
      <div className="transaction-item">
      <div className="transaction-icon bg-forest-light text-lime">
      <i className="bi bi-stripe"></i>
      </div>
      <div className="transaction-info">
      <div className="transaction-name">Stripe Payout</div>
      <div className="transaction-date">Feb 11, 2026 • 04:30 PM</div>
      </div>
      <div className="transaction-amount text-success">+$3,400.00</div>
      </div>
      <div className="transaction-item">
      <div className="transaction-icon bg-forest-light text-lime">
      <i className="bi bi-slack"></i>
      </div>
      <div className="transaction-info">
      <div className="transaction-name">Slack Pro Workspace</div>
      <div className="transaction-date">Feb 09, 2026 • 09:20 AM</div>
      </div>
      <div className="transaction-amount text-main">-$45.00</div>
      </div>
      </div>
      </div>
      </div>
      
      <div className="col-md-5 d-flex flex-column">
      <div className="card h-100 flex-grow-1">
      <div className="card-header">
      <h2 className="card-title">Product Overview</h2>
      <div className="dropdown">
      <button aria-expanded="false" aria-label="More Options" className="card-more-btn" data-bs-toggle="dropdown" id="btn-more-products" type="button">
      <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
      <li><a className="dropdown-item" href="#"><i className="bi bi-plus-lg"></i> Add Product</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Manage</a></li>
      </ul>
      </div>
      </div>
      <div className="progress-container">
      <div className="progress-label-row">
      <span className="progress-label">Product Launched</span>
      <span className="progress-value">233</span>
      </div>
      <div aria-label="Product Launched Progress" aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" className="progress" role="progressbar">
      <div className="progress-bar bg-lime-accent w-65"></div>
      </div>
      </div>
      <div className="progress-container">
      <div className="progress-label-row">
      <span className="progress-label">Ongoing Product</span>
      <span className="progress-value">23</span>
      </div>
      <div aria-label="Ongoing Product Progress" aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" className="progress" role="progressbar">
      <div className="progress-bar bg-lime-accent opacity-50 w-50"></div>
      </div>
      </div>
      <div className="progress-container">
      <div className="progress-label-row">
      <span className="progress-label">Product Sold</span>
      <span className="progress-value">482</span>
      </div>
      <div aria-label="Product Sold Progress" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" className="progress" role="progressbar">
      <div className="progress-bar bg-lime-accent w-85"></div>
      </div>
      </div>
      <div className="progress-container">
      <div className="progress-label-row">
      <span className="progress-label">Product Returned</span>
      <span className="progress-value">8</span>
      </div>
      <div aria-label="Product Returned Progress" aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" className="progress" role="progressbar">
      <div className="progress-bar bg-brand-orange w-38"></div>
      </div>
      </div>
      <div className="progress-container">
      <div className="progress-label-row">
      <span className="progress-label">Product In Stock</span>
      <span className="progress-value">1,420</span>
      </div>
      <div aria-label="Product In Stock Progress" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress" role="progressbar">
      <div className="progress-bar bg-lime-accent w-75"></div>
      </div>
      </div>
      <div className="progress-container">
      <div className="progress-label-row">
      <span className="progress-label">Pending Shipment</span>
      <span className="progress-value">64</span>
      </div>
      <div aria-label="Pending Shipment Progress" aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" className="progress" role="progressbar">
      <div className="progress-bar bg-lime-accent opacity-50 w-45"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      </div>
      
      <div className="col-xl-3 col-lg-4">
      <div className="right-panel-wrapper d-flex flex-column gap-4 h-100">
      
      <div className="card flex-grow-1 d-flex flex-column justify-content-between mb-0">
      <div className="card-header mb-1">
      <h2 className="card-title">Total View Performance</h2>
      </div>
      <div id="views-chart"></div>
      
      <div className="chart-legends-container">
      <div className="chart-legend-item">
      <span className="legend-dot bg-lime-accent"></span>
      <span className="text-muted-green">View Count</span>
      </div>
      <div className="chart-legend-item">
      <span className="legend-dot bg-forest-medium"></span>
      <span className="text-muted-green">Percentage</span>
      </div>
      <div className="chart-legend-item">
      <span className="legend-dot bg-brand-orange"></span>
      <span className="text-muted-green">Sales</span>
      </div>
      </div>
      </div>
      
      <div className="promo-banner-card">
      
      <svg className="promo-banner-bg-shape" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50,50)">
      <rect fill="#B4F105" height="90" rx="6" ry="6" width="12" x="-6" y="-45"></rect>
      <rect fill="#B4F105" height="90" rx="6" ry="6" transform="rotate(60)" width="12" x="-6" y="-45"></rect>
      <rect fill="#B4F105" height="90" rx="6" ry="6" transform="rotate(120)" width="12" x="-6" y="-45"></rect>
      </g>
      </svg>
      <h3 className="promo-title">Level up your sales managing to the next level.</h3>
      <p className="promo-desc">An easy way to manage sales with care and precision.</p>
      <button className="btn-promo" id="btn-promo-action">Check the updates now</button>
      </div>
      </div>
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
