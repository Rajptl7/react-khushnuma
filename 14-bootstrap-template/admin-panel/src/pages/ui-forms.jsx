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
      <a className="sidebar-menu-link active" href="ui-forms.html" id="menu-uiforms" title="Forms and Input">
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
      <h1 className="page-title">Forms &amp; Input Elements</h1>
      <p className="page-subtitle">Premium layout elements, toggle switches, and input decorators.</p>
      </div>
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item"><a className="text-decoration-none text-muted-green" href="index.html">Home</a></li>
      <li className="breadcrumb-item text-muted-green">Components</li>
      <li aria-current="page" className="breadcrumb-item active text-main">Forms &amp; Input</li>
      </ol>
      </nav>
      </div>
      
      
      <div className="row g-4 mb-4">
      
      <div className="col-12 col-lg-6">
      <div className="card border-light shadow-sm p-4 h-100">
      <h5 className="card-title mb-4">Basic Fields</h5>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="basicText">Username</label>
      <input className="form-control-custom" id="basicText" placeholder="Enter username" type="text"/>
      </div>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="basicEmail">Email Address</label>
      <input className="form-control-custom" id="basicEmail" placeholder="name@example.com" type="email"/>
      <span className="text-muted">We'll never share your email with anyone else.</span>
      </div>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="basicPassword">Password</label>
      <input className="form-control-custom" id="basicPassword" placeholder="Enter your secure password" type="password"/>
      </div>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="basicDisabled">Disabled Input</label>
      <input className="form-control-custom" disabled="" id="basicDisabled" type="text" value="This input field is disabled"/>
      </div>
      
      <div className="mb-0">
      <label className="form-label-custom" htmlFor="basicReadonly">Read-only Input</label>
      <input className="form-control-custom" id="basicReadonly" readOnly="" type="text" value="This field is read-only"/>
      </div>
      </div>
      </div>
      
      <div className="col-12 col-lg-6">
      <div className="card border-light shadow-sm p-4 h-100">
      <h5 className="card-title mb-4">Selection &amp; Validation</h5>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="selectControl">Preferred Theme</label>
      <select className="form-select-custom" id="selectControl">
      <option disabled="" selected="">Choose a visual theme...</option>
      <option value="light">Spark Light Theme</option>
      <option value="dark">Spark Dark Green Theme</option>
      <option value="forest">Forest Breeze Accent</option>
      </select>
      </div>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="textareaControl">Description Bio</label>
      <textarea className="form-control-custom" id="textareaControl" placeholder="Tell us about yourself..." rows="3"></textarea>
      </div>
      
      <div className="mb-3">
      <label className="form-label-custom" htmlFor="validInput">Valid State Field</label>
      <input className="form-control-custom is-valid-custom" id="validInput" type="text" value="spark_admin_user"/>
      <div className="form-feedback-custom valid-custom">
      <i className="bi bi-check-circle-fill"></i> Username is available!
                  </div>
      </div>
      
      <div className="mb-0">
      <label className="form-label-custom" htmlFor="invalidInput">Invalid State Field</label>
      <input className="form-control-custom is-invalid-custom" id="invalidInput" type="email" value="invalid-email-format"/>
      <div className="form-feedback-custom invalid-custom">
      <i className="bi bi-exclamation-circle-fill"></i> Please enter a valid email address.
                  </div>
      </div>
      </div>
      </div>
      
      <div className="col-12 col-lg-6">
      <div className="card border-light shadow-sm p-4 h-100">
      <h5 className="card-title mb-4">Input Sizing &amp; Decorator Groups</h5>
      
      <div className="mb-4">
      <div className="mb-2">
      <label className="form-label-custom">Large Control</label>
      <input className="form-control-custom form-control-custom-lg" placeholder="Large text box input" type="text"/>
      </div>
      <div className="mb-2">
      <label className="form-label-custom">Default Control</label>
      <input className="form-control-custom" placeholder="Default text box input" type="text"/>
      </div>
      <div>
      <label className="form-label-custom">Small Control</label>
      <input className="form-control-custom form-control-custom-sm" placeholder="Small text box input" type="text"/>
      </div>
      </div>
      <h6 className="mb-3">Input Groups</h6>
      
      <div className="mb-3">
      <div className="input-group-custom">
      <span className="input-group-text-custom">@</span>
      <input className="form-control-custom" placeholder="Username" type="text"/>
      </div>
      </div>
      
      <div className="mb-3">
      <div className="input-group-custom">
      <input className="form-control-custom" placeholder="Recipient username" type="text"/>
      <span className="input-group-text-custom">@sparkadmin.web.id</span>
      </div>
      </div>
      
      <div className="mb-0">
      <div className="input-group-custom">
      <span className="input-group-text-custom"><i className="bi bi-wallet2"></i></span>
      <input className="form-control-custom" placeholder="Billing Amount" type="text"/>
      <span className="input-group-text-custom">USD</span>
      </div>
      </div>
      </div>
      </div>
      
      <div className="col-12 col-lg-6">
      <div className="card border-light shadow-sm p-4 h-100">
      <h5 className="card-title mb-4">Checkboxes, Radios &amp; Switches</h5>
      <h6 className="mb-3">Custom Checkboxes</h6>
      <div className="mb-4">
      <div className="form-check-custom">
      <input checked="" className="form-check-input-custom" id="checkActive" type="checkbox"/>
      <label className="form-check-label" htmlFor="checkActive">Checked custom option</label>
      </div>
      <div className="form-check-custom">
      <input className="form-check-input-custom" id="checkInactive" type="checkbox"/>
      <label className="form-check-label" htmlFor="checkInactive">Unchecked custom option</label>
      </div>
      <div className="form-check-custom">
      <input checked="" className="form-check-input-custom" disabled="" id="checkDisabled" type="checkbox"/>
      <label className="form-check-label" htmlFor="checkDisabled">Disabled checked option</label>
      </div>
      </div>
      <h6 className="mb-3">Custom Radio Elements</h6>
      <div className="mb-4">
      <div className="form-check-custom">
      <input checked="" className="form-check-input-custom" id="radioOne" name="radioGroup" type="radio"/>
      <label className="form-check-label" htmlFor="radioOne">Radio option selection A</label>
      </div>
      <div className="form-check-custom">
      <input className="form-check-input-custom" id="radioTwo" name="radioGroup" type="radio"/>
      <label className="form-check-label" htmlFor="radioTwo">Radio option selection B</label>
      </div>
      </div>
      <h6 className="mb-3">Premium Switch Controls (iOS Style)</h6>
      <div>
      <div className="form-switch-custom">
      <input checked="" className="form-switch-input-custom" id="switchOne" type="checkbox"/>
      <label className="form-switch-label" htmlFor="switchOne">Enable email notifications</label>
      </div>
      <div className="form-switch-custom">
      <input className="form-switch-input-custom" id="switchTwo" type="checkbox"/>
      <label className="form-switch-label" htmlFor="switchTwo">Keep profile visibility public</label>
      </div>
      <div className="form-switch-custom">
      <input className="form-switch-input-custom" disabled="" id="switchThree" type="checkbox"/>
      <label className="form-switch-label" htmlFor="switchThree">Enable background synchronization (Disabled)</label>
      </div>
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
