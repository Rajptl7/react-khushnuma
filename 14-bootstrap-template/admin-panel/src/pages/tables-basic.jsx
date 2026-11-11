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
      <a className="sidebar-menu-link active" href="tables-basic.html" id="menu-basictables" title="Basic Tables">
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
      <h1 className="page-title">Basic Tables</h1>
      <p className="page-subtitle">Highly customizable, responsive tabular data component templates.</p>
      </div>
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item"><a className="text-decoration-none text-muted-green" href="index.html">Home</a></li>
      <li className="breadcrumb-item text-muted-green">Components</li>
      <li aria-current="page" className="breadcrumb-item active text-main">Basic Tables</li>
      </ol>
      </nav>
      </div>
      
      
      <div className="table-card-custom">
      
      <div className="table-header-control">
      
      <div className="table-search-box">
      <i className="bi bi-search table-search-icon"></i>
      <input className="table-search-input" placeholder="Search orders or products..." type="text"/>
      </div>
      
      <div className="table-filter-group">
      <div className="dropdown">
      <button aria-expanded="false" className="btn-table-action dropdown-toggle" data-bs-toggle="dropdown" id="dropdownFilterStatus" type="button">
      <i className="bi bi-funnel"></i> Status Filter
                  </button>
      <ul aria-labelledby="dropdownFilterStatus" className="dropdown-menu">
      <li><a className="dropdown-item" href="#">All Statuses</a></li>
      <li><a className="dropdown-item" href="#">Paid / Success</a></li>
      <li><a className="dropdown-item" href="#">Processing</a></li>
      <li><a className="dropdown-item" href="#">Cancelled / Failed</a></li>
      </ul>
      </div>
      <button className="btn-table-action" type="button">
      <i className="bi bi-file-earmark-arrow-down"></i> Export
                </button>
      </div>
      </div>
      
      <div className="table-responsive">
      <table className="table-custom">
      <thead>
      <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Product Info</th>
      <th>Category</th>
      <th>Amount</th>
      <th>Order Date</th>
      <th>Status</th>
      <th className="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      
      <tr>
      <td className="table-order-id">#ORD-9982</td>
      <td>
      <div className="table-user-cell">
      <img alt="Eleanor Pena" className="table-user-avatar" src="/assets/images/user_1.jpg"/>
      <div>
      <div className="table-user-name">Eleanor Pena</div>
      <div className="table-user-sub">eleanor.pena@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Oversized Hoodie</td>
      <td>Apparel</td>
      <td className="table-amount">$89.90</td>
      <td>Feb 14, 2026</td>
      <td><span className="badge-table success">Paid</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9981</td>
      <td>
      <div className="table-user-cell">
      <img alt="Wade Warren" className="table-user-avatar" src="/assets/images/user_2.jpg"/>
      <div>
      <div className="table-user-name">Wade Warren</div>
      <div className="table-user-sub">wade.warren@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Gaming Console</td>
      <td>Electronics</td>
      <td className="table-amount">$499.00</td>
      <td>Feb 13, 2026</td>
      <td><span className="badge-table pending">Processing</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9980</td>
      <td>
      <div className="table-user-cell">
      <img alt="Jane Cooper" className="table-user-avatar" src="/assets/images/user_3.jpg"/>
      <div>
      <div className="table-user-name">Jane Cooper</div>
      <div className="table-user-sub">jane.cooper@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Premium T-Shirt</td>
      <td>Apparel</td>
      <td className="table-amount">$35.00</td>
      <td>Feb 12, 2026</td>
      <td><span className="badge-table success">Paid</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9979</td>
      <td>
      <div className="table-user-cell">
      <img alt="Robert Fox" className="table-user-avatar" src="/assets/images/user_4.jpg"/>
      <div>
      <div className="table-user-name">Robert Fox</div>
      <div className="table-user-sub">robert.fox@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Wireless Headset</td>
      <td>Accessories</td>
      <td className="table-amount">$129.99</td>
      <td>Feb 11, 2026</td>
      <td><span className="badge-table failed">Failed</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9978</td>
      <td>
      <div className="table-user-cell">
      <img alt="Albert Flores" className="table-user-avatar" src="/assets/images/user_5.jpg"/>
      <div>
      <div className="table-user-name">Albert Flores</div>
      <div className="table-user-sub">albert.flores@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Leather Wallet</td>
      <td>Accessories</td>
      <td className="table-amount">$45.00</td>
      <td>Feb 10, 2026</td>
      <td><span className="badge-table success">Paid</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9977</td>
      <td>
      <div className="table-user-cell">
      <img alt="Kristin Watson" className="table-user-avatar" src="/assets/images/user_6.jpg"/>
      <div>
      <div className="table-user-name">Kristin Watson</div>
      <div className="table-user-sub">kristin.watson@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Ergonomic Chair</td>
      <td>Furniture</td>
      <td className="table-amount">$249.00</td>
      <td>Feb 09, 2026</td>
      <td><span className="badge-table pending">Processing</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9976</td>
      <td>
      <div className="table-user-cell">
      <img alt="Cody Fisher" className="table-user-avatar" src="/assets/images/user_7.jpg"/>
      <div>
      <div className="table-user-name">Cody Fisher</div>
      <div className="table-user-sub">cody.fisher@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Mechanical Keyboard</td>
      <td>Accessories</td>
      <td className="table-amount">$119.00</td>
      <td>Feb 08, 2026</td>
      <td><span className="badge-table success">Paid</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9975</td>
      <td>
      <div className="table-user-cell">
      <img alt="Bessie Cooper" className="table-user-avatar" src="/assets/images/user_8.jpg"/>
      <div>
      <div className="table-user-name">Bessie Cooper</div>
      <div className="table-user-sub">bessie.cooper@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Fitness Tracker</td>
      <td>Electronics</td>
      <td className="table-amount">$79.99</td>
      <td>Feb 07, 2026</td>
      <td><span className="badge-table failed">Cancelled</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9974</td>
      <td>
      <div className="table-user-cell">
      <img alt="Dianne Russell" className="table-user-avatar" src="/assets/images/user_1.jpg"/>
      <div>
      <div className="table-user-name">Dianne Russell</div>
      <div className="table-user-sub">dianne.russell@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Coffee Mug Set</td>
      <td>Home</td>
      <td className="table-amount">$24.50</td>
      <td>Feb 06, 2026</td>
      <td><span className="badge-table success">Paid</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      
      <tr>
      <td className="table-order-id">#ORD-9973</td>
      <td>
      <div className="table-user-cell">
      <img alt="Devon Lane" className="table-user-avatar" src="/assets/images/user_2.jpg"/>
      <div>
      <div className="table-user-name">Devon Lane</div>
      <div className="table-user-sub">devon.lane@example.com</div>
      </div>
      </div>
      </td>
      <td className="table-product-name">Desk Organizer</td>
      <td>Office</td>
      <td className="table-amount">$39.99</td>
      <td>Feb 05, 2026</td>
      <td><span className="badge-table success">Paid</span></td>
      <td>
      <div className="d-flex justify-content-center gap-1">
      <a className="table-btn-action" href="#" title="View details"><i className="bi bi-eye"></i></a>
      <a className="table-btn-action" href="#" title="Edit row"><i className="bi bi-pencil"></i></a>
      <a className="table-btn-action delete" href="#" title="Delete row"><i className="bi bi-trash"></i></a>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="table-footer-control">
      <span className="table-pagination-info">Showing 1 to 10 of 50 entries</span>
      <nav aria-label="Page navigation">
      <ul className="pagination mb-0 gap-1">
      <li className="page-item disabled"><a className="page-link border-0" href="#"><i className="bi bi-chevron-left"></i></a>
      </li>
      <li className="page-item active"><a className="page-link border-0" href="#">1</a></li>
      <li className="page-item"><a className="page-link border-0" href="#">2</a></li>
      <li className="page-item"><a className="page-link border-0" href="#">3</a></li>
      <li className="page-item"><a className="page-link border-0" href="#"><i className="bi bi-chevron-right"></i></a></li>
      </ul>
      </nav>
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
