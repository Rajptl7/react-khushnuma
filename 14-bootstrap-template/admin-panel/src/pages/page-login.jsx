import React from "react";

export default function Page() {
  return (
    <>
      
       ==========================================
               START: Authentication Container & Login Card
               ========================================== 
      <div className="login-wrapper">
      
      <div className="login-bg-shape login-bg-shape-1"></div>
      <div className="login-bg-shape login-bg-shape-2"></div>
      
      <div className="login-card">
      
      <a className="login-brand text-decoration-none" href="index.html">
      <i className="bi bi-asterisk"></i>
      <span>Spark Admin</span>
      </a>
      <p className="login-subtitle">Please sign in to access your dashboard</p>
      
      <form action="index.html" className="needs-validation" id="loginForm" method="GET" noValidate="">
      
      <div className="login-form-group">
      <label className="login-form-label" htmlFor="email">Email Address</label>
      <div className="login-input-group">
      <i className="bi bi-envelope input-icon"></i>
      <input className="login-input" id="email" placeholder="name@company.com" required="" type="email"/>
      </div>
      </div>
      
      <div className="login-form-group">
      <label className="login-form-label" htmlFor="password">Password</label>
      <div className="login-input-group">
      <i className="bi bi-shield-lock input-icon"></i>
      <input className="login-input login-input-password" id="password" placeholder="••••••••" required="" type="password"/>
      <button aria-label="Show password" className="password-toggle-btn" id="toggle-password" type="button">
      <i className="bi bi-eye"></i>
      </button>
      </div>
      </div>
      
      <div className="login-options">
      <label className="custom-control-label">
      <input className="custom-checkbox-input" id="rememberMe" type="checkbox"/>
      <span>Remember Me</span>
      </label>
      <a className="forgot-password-link" href="#">Forgot Password?</a>
      </div>
      
      <button className="btn-login" id="btn-submit" type="submit">
      <span>Sign In to Dashboard</span>
      <i className="bi bi-arrow-right"></i>
      </button>
      </form>
      
      <div className="login-divider">Or sign in with</div>
      
      <div className="social-login-grid">
      <button className="btn-social" id="btn-google" type="button">
      <i className="bi bi-google text-danger"></i>
      <span>Google</span>
      </button>
      <button className="btn-social" id="btn-github" type="button">
      <i className="bi bi-github"></i>
      <span>GitHub</span>
      </button>
      </div>
      
      <p className="login-footer-text">
                      Don't have an account? <a href="#" id="link-register">Register Now</a>
      </p>
      </div>
      </div>
       END: Authentication Container 
       Local Bootstrap bundle 
      
       Custom Authentication interactions script 
      
    </>
  );
}
