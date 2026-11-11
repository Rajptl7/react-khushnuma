import React from "react";

export default function Page() {
  return (
    <>
      
       ==========================================
               START: 404 Error Page Container & Card
               ========================================== 
      <div className="login-wrapper">
      
      <div className="login-bg-shape login-bg-shape-1"></div>
      <div className="login-bg-shape login-bg-shape-2"></div>
      
      <div className="login-card text-center">
      
      <a className="login-brand text-decoration-none" href="index.html">
      <i className="bi bi-asterisk"></i>
      <span>Spark Admin</span>
      </a>
      
      <div className="error-title-huge">
      <span>4</span>
      <i className="bi bi-asterisk"></i>
      <span>4</span>
      </div>
      <h2 className="error-subtitle">Page Not Found</h2>
      <p className="error-desc">
                      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                  </p>
      <div className="error-actions-group">
      <a className="btn-custom btn-custom-primary" href="index.html">
      <i className="bi bi-house"></i> Back to Dashboard
                      </a>
      </div>
      </div>
      </div>
       END: 404 Error Page Container 
       Local Third-Party Libraries Script dependencies 
      
    </>
  );
}
