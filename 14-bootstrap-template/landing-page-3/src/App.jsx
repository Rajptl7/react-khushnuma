import React from 'react'

export default function App() {
  return (
    <>

 Navbar 
<nav className="navbar navbar-expand-md bg-white border-bottom sticky-top">
<div className="container">
<a className="navbar-brand d-inline-flex gap-2 align-items-center lh-1" href="index.html">
<img alt="MediCloud Logo" className="img-fluid logo" src="/assets/images/medicloud-logo.svg" />
</a>
<button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mx-auto mb-2 mb-md-0">
<li className="nav-item"><a className="nav-link fw-semibold text-dark" href="#features">Features</a></li>
<li className="nav-item"><a className="nav-link fw-semibold text-dark" href="#howItWork">How It Work</a></li>
<li className="nav-item"><a className="nav-link fw-semibold text-dark" href="#testimonials">Testimonails</a></li>
<li className="nav-item"><a className="nav-link fw-semibold text-dark" href="#pricing">Pricing</a></li>
<li className="nav-item"><a className="nav-link fw-semibold text-dark" href="#faq">Faq</a></li>
</ul>
<div className="d-flex gap-3 align-items-center">
<a className="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" href="#">Get a Demo</a>
</div>
</div>
</div>
</nav>
 Hero 
<section className="hero-section overflow-hidden">
<div className="container pt-5">
<div className="row align-items-center">
{/* Left Content */}
<div className="col-lg-6 hero-left">
<span className="badge text-bg-secondary rounded-pill fw-normal d-inline-flex gap-1">
<span>
<svg fill="none" height="12" viewbox="0 0 10 12" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M4.05417 7.90417L7.35 4.60833L6.51875 3.77708L4.05417 6.24167L2.82917 5.01667L1.99792 5.84792L4.05417 7.90417ZM4.66667 11.6667C3.31528 11.3264 2.19965 10.551 1.31979 9.34062C0.439931 8.13021 0 6.78611 0 5.30833V1.75L4.66667 0L9.33333 1.75V5.30833C9.33333 6.78611 8.8934 8.13021 8.01354 9.34062C7.13368 10.551 6.01806 11.3264 4.66667 11.6667ZM4.66667 10.4417C5.67778 10.1208 6.51389 9.47917 7.175 8.51667C7.83611 7.55417 8.16667 6.48472 8.16667 5.30833V2.55208L4.66667 1.23958L1.16667 2.55208V5.30833C1.16667 6.48472 1.49722 7.55417 2.15833 8.51667C2.81944 9.47917 3.65556 10.1208 4.66667 10.4417Z" fill="white"></path>
</svg>
</span>
<span>HIPAA Compliant &amp; Secure</span>
</span>
<h1 className="display-3 my-4">Run Your Virtual Clinic Effortlessly</h1>
<p className="lead">
          All-in-one telehealth platform designed for modern practices.
          Manage patients, clinical notes, and secure HD video consultations
          in one unified workspace.
        </p>
<div className="mt-7 d-flex gap-3">
<a className="btn btn-primary" href="#">Get a Demo</a>
<a className="btn btn-outline-secondary" href="#">Take a Quick tour</a>
</div>
</div>
{/* Right Image */}
<div className="col-lg-6 d-flex justify-content-center hero-right">
<div className="position-relative">
<img alt="MediCloud Hero Image" className="img-fluid" src="/assets/images/dr-img.png" />
<div className="position-absolute top-25 start-0 ms-7 floating-badge">
<span className="badge text-bg-secondary fw-normal rounded-pill p-4 py-3">
              EHR
            </span>
</div>
<div className="position-absolute top-50 start-0 floating-badge">
<span className="badge text-bg-secondary fw-normal rounded-pill p-4 py-3">
              Billing and Payments
            </span>
</div>
<div className="position-absolute top-25 end-0 mt-8 me-10 floating-badge">
<span className="badge text-bg-primary fw-normal rounded-pill p-4 py-3">
              Patients Experience
            </span>
</div>
</div>
</div>
</div>
</div>
</section>
 Clients 
<section className="bg-light py-7 clients-section overflow-hidden">
<div className="container">
<div className="row align-items-center gy-5">
{/* Left Content */}
<div className="col-xl-4 clients-content">
<h2 className="mb-4">Trusted by</h2>
<p className="mb-0 small">
          We safeguard your practice with full security and HIPAA compliance.
        </p>
</div>
{/* Logos */}
<div className="col-xl-2 col-lg-3 col-md-6 client-logo">
<div>
<img alt="" className="img-fluid opacity-75" src="/assets/images/client-logo/logo-1.svg" />
</div>
</div>
<div className="col-xl-2 col-lg-3 col-md-6 client-logo">
<div>
<img alt="" className="img-fluid opacity-75" src="/assets/images/client-logo/logo-2.svg" />
</div>
</div>
<div className="col-xl-2 col-lg-3 col-md-6 client-logo">
<div>
<img alt="" className="img-fluid opacity-75" src="/assets/images/client-logo/logo-3.svg" />
</div>
</div>
<div className="col-xl-2 col-lg-3 col-md-6 client-logo">
<div>
<img alt="" className="img-fluid opacity-75" src="/assets/images/client-logo/logo-4.svg" />
</div>
</div>
</div>
</div>
</section>
 Features 
<section className="py-lg-12 py-8 features-section overflow-hidden" id="features">
<div className="container">
<div className="row justify-content-center">
<div className="col-xl-6">
<div className="text-center features-heading">
<h2 className="display-6">Clinical Excellence Integrated</h2>
<p className="mb-0">Everything you need to provide top-tier care from anywhere in the world.</p>
</div>
</div>
<div className="row g-6">
<div className="col-xl-4 col-md-6 col-12 feature-card">
<div className="card bg-light border-0 h-100">
<div className="card-body p-8">
<div className="mb-6 feature-icon">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-video-plus" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4"></path>
<path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8"></path>
<path d="M7 12l4 0"></path>
<path d="M9 10l0 4"></path>
</svg>
</div>
<h3 className="h2 mb-4">Video Consultations</h3>
<p className="mb-0">HD, peer-to-peer encrypted video calls
                  with built-in waiting rooms and screen
                  sharing.</p>
</div>
</div>
</div>
<div className="col-xl-4 col-md-6 col-12 feature-card">
<div className="card bg-light border-0 h-100">
<div className="card-body p-8">
<div className="mb-6 feature-icon">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-check" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path>
<path d="M16 3v4"></path>
<path d="M8 3v4"></path>
<path d="M4 11h16"></path>
<path d="M15 19l2 2l4 -4"></path>
</svg>
</div>
<h3 className="h2 mb-4">Scheduling</h3>
<p className="mb-0">Automated booking, timezone detection,
                  and calendar sync with Google and
                  Outlook.</p>
</div>
</div>
</div>
<div className="col-xl-4 col-md-6 col-12 feature-card">
<div className="card bg-light border-0 h-100">
<div className="card-body p-8">
<div className="mb-6 feature-icon">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-heart" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
<path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"></path>
<path d="M11.993 16.75l2.747 -2.815a1.9 1.9 0 0 0 0 -2.632a1.775 1.775 0 0 0 -2.56 0l-.183 .188l-.183 -.189a1.775 1.775 0 0 0 -2.56 0a1.899 1.899 0 0 0 0 2.632l2.738 2.825l.001 -.009"></path>
</svg>
</div>
<h3 className="h2 mb-4">Digital EHR</h3>
<p className="mb-0">Structured clinical notes, ICD-10 coding,
                  and longitudinal patient health records.</p>
</div>
</div>
</div>
<div className="col-xl-4 col-md-6 col-12 feature-card">
<div className="card bg-light border-0 h-100">
<div className="card-body p-8">
<div className="mb-6 feature-icon">
<svg fill="none" height="56" viewbox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_35_71)">
<path d="M14 44.3333V7H24.5C27.2848 7 29.9555 8.10625 31.9246 10.0754C33.8938 12.0445 35 14.7152 35 17.5C35 20.2848 33.8938 22.9555 31.9246 24.9246C29.9555 26.8938 27.2848 28 24.5 28H14" stroke="#003A43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667"></path>
<path d="M44.3334 49L23.3334 28" stroke="#003A43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667"></path>
<path d="M30.3334 49L44.3334 35" stroke="#003A43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667"></path>
</g>
<defs>
<clippath id="clip0_35_71">
<rect fill="white" height="56" width="56"></rect>
</clippath>
</defs>
</svg>
</div>
<h3 className="h2 mb-4">ePrescriptions</h3>
<p className="mb-0">Securely send prescriptions directly to
                  pharmacies with automated interactions
                  check.</p>
</div>
</div>
</div>
<div className="col-xl-4 col-md-6 col-12 feature-card">
<div className="card bg-light border-0 h-100">
<div className="card-body p-8">
<div className="mb-6 feature-icon">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"></path>
<path d="M3 10h18"></path>
<path d="M16 19h6"></path>
<path d="M19 16l3 3l-3 3"></path>
<path d="M7.005 15h.005"></path>
<path d="M11 15h2"></path>
</svg>
</div>
<h3 className="h2 mb-4">Payments</h3>
<p className="mb-0">Integrated billing, insurance claims
                  processing, and direct patient payments.</p>
</div>
</div>
</div>
<div className="col-xl-4 col-md-6 col-12 feature-card">
<div className="card bg-light border-0 h-100">
<div className="card-body p-8">
<div className="mb-6 feature-icon">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
<path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
<path d="M12 12l0 2.5"></path>
</svg>
</div>
<h3 className="h2 mb-4">Secure &amp; Compliant</h3>
<p className="mb-0">SOC2 Type II, HIPAA, and GDPR compliant with data residency options.</p>
</div>
</div>
</div>
</div>
</div>
</div></section>
 How it Works 
<section className="py-lg-12 py-8 bg-secondary text-white how-section overflow-hidden" id="howItWork">
<div className="container">
{/* Heading */}
<div className="row justify-content-center text-center mb-10">
<div className="col-xl-8">
<div className="how-heading">
<h2 className="display-6 text-white mb-4">
            Get started with MediCloud in 3 easy steps
          </h2>
<p className="mb-0 px-xl-10">
            Simple, supported, and designed to fit the way you work.
            From setup to go-live, we’ll guide you every step so your
            practice sees value from day one.
          </p>
</div>
</div>
</div>
{/* Steps */}
<div className="row position-relative">
{/* Step 1 */}
<div className="col-xl-4 col-md-6 col-12 how-step">
<div className="text-center">
<span className="icon-shape how-number icon-xl rounded-circle bg-white text-dark border border-4 border-primary border-opacity-25 fw-bold fs-4">
            1
          </span>
<div className="mt-6 mx-6">
<h3 className="fs-2 text-white">Sign Up</h3>
<p>
              Create your provider profile and customize your
              clinic branding.
            </p>
</div>
</div>
</div>
{/* Step 2 */}
<div className="col-xl-4 col-md-6 col-12 how-step">
<div className="text-center">
<span className="icon-shape how-number icon-xl rounded-circle bg-white text-dark border border-4 border-primary border-opacity-25 fw-bold fs-4">
            2
          </span>
<div className="mt-6 mx-6">
<h3 className="fs-2 text-white">Add Staff</h3>
<p>
              Invite your team of doctors, specialists,
              and front-desk admins.
            </p>
</div>
</div>
</div>
{/* Step 3 */}
<div className="col-xl-4 col-md-6 col-12 how-step">
<div className="text-center">
<span className="icon-shape how-number icon-xl rounded-circle bg-primary text-white border border-4 border-white fw-bold fs-4">
            3
          </span>
<div className="mt-6 mx-6">
<h3 className="fs-2 text-white">Start Consults</h3>
<p>
              Begin hosting secure consultations and
              managing patient care.
            </p>
</div>
</div>
</div>
{/* Buttons */}
<div className="col-12 mt-8 d-flex gap-3 justify-content-center how-buttons">
<a className="btn btn-primary" href="#">Get a Demo</a>
<a className="btn btn-white" href="#">Take a Quick tour</a>
</div>
</div>
</div>
</section>
 About Medicloud 
<section className="py-lg-12 py-8 about-section overflow-hidden">
<div className="container">
<div className="row gy-6">
{/* Image */}
<div className="col-xl-7 col-12">
<div className="about-image-wrapper position-relative">
<img alt="" className="img-fluid w-100 about-image" src="/assets/images/about-img.png" />
</div>
</div>
{/* Content */}
<div className="col-xl-4 col-12">
<div className="mt-xl-8 about-content">
<h2 className="display-6 mb-4">
            Crystal Clear Care
          </h2>
<p className="lead">
            Experience zero-latency video consultations designed for clinical accuracy.
            Share medical records and record sessions with one click.
          </p>
<ul className="list-unstyled mt-5">
<li className="d-flex gap-2 align-items-center mb-3 about-item">
<span className="about-check">
<svg className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-success" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path> </svg>
</span>
<span>4K Resolution Video Support</span>
</li>
<li className="d-flex gap-2 align-items-center mb-3 about-item">
<span className="about-check">
<svg className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-success" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path> </svg>
</span>
<span>Built-in AI Scribe for clinical notes</span>
</li>
<li className="d-flex gap-2 align-items-center mb-3 about-item">
<span className="about-check">
<svg className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-success" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path> </svg>
</span>
<span>Integrated vitals monitoring</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
 Testimonials 
<section className="py-lg-12 py-8 bg-light testimonial-section overflow-hidden" id="testimonials">
<div className="container">
<div className="row justify-content-center">
<div className="col-xl-6 col-12">
<div className="text-center mb-8 testimonial-heading">
<h2 className="display-6">What success looks like with Tebra</h2>
<p>Our clients don't just work with us, they grow with us. Here's what a few of our satisfied customers had
              to say about their experience with MediCloud.</p>
</div>
</div>
</div>
<div className="row g-6">
<div className="col-xl-4 col-12 testimonial-card">
<div className="card h-100 border-0 testimonial-inner">
<div className="card-body p-6">
<div>
<div>
<span className="testimonial-quote">
<svg fill="none" height="30" viewbox="0 0 43 30" width="43" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" fill="#0EA5E9" fill-opacity="0.2"></path>
</svg>
</span>
<p className="lead fst-italic fw-medium mt-n6 mb-6">"MediCloud transformed how I manage
                    my pediatric practice. The patient
                    experience is seamless, and my no-show
                    rates dropped by 40%."</p>
<div className="d-flex align-items-center gap-3 testimonial-user">
<img alt="" className="avatar avatar-md rounded-circle testimonial-avatar" src="/assets/images/avatar/avatar-1.jpg" />
<div>
<h3 className="fs-4 mb-0 fw-semibold">Dr. Sarah Jenkins</h3>
<small>Pediatrician</small>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-xl-4 col-12 testimonial-card">
<div className="card h-100 border-0 testimonial-inner">
<div className="card-body p-6">
<div>
<div>
<span className="testimonial-quote"><svg fill="none" height="30" viewbox="0 0 43 30" width="43" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" fill="#0EA5E9" fill-opacity="0.2"></path>
</svg>
</span>
<p className="lead fst-italic fw-medium mt-n6 mb-6">"The HIPAA compliance and security were
                    non-negotiable for my clinic. MediCloud
                    delivered peace of mind and excellent
                    UX."</p>
<div className="d-flex align-items-center gap-3 testimonial-user">
<img alt="" className="avatar avatar-md rounded-circle testimonial-avatar" src="/assets/images/avatar/avatar-2.jpg" />
<div>
<h3 className="fs-4 mb-0 fw-semibold">Dr. Mark Thompson</h3>
<small>Cardiologist</small>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-xl-4 col-12 testimonial-card">
<div className="card h-100 border-0 testimonial-inner">
<div className="card-body p-6">
<div>
<div>
<span className="testimonial-quote"><svg fill="none" height="30" viewbox="0 0 43 30" width="43" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" fill="#0EA5E9" fill-opacity="0.2"></path>
</svg>
</span>
<p className="lead fst-italic fw-medium mt-n6 mb-6">"Scaling my mental health practice across
                    state lines was only possible because of
                    their robust licensing and scheduling
                    tools."</p>
<div className="d-flex align-items-center gap-3 testimonial-user">
<img alt="" className="avatar avatar-md rounded-circle testimonial-avatar" src="/assets/images/avatar/avatar-3.jpg" />
<div>
<h3 className="fs-4 mb-0 fw-semibold">Dr. Elena Rodriguez</h3>
<small>Psychiatrist</small>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
 Pricing 
<section className="py-lg-12 py-8 pricing-section overflow-hidden" id="pricing">
<div className="container">
<div className="row justify-content-center">
<div className="col-xl-6 col-12">
<div className="text-center mb-8 pricing-heading">
<h2 className="display-6">Flexible Plans for Every Scale</h2>
<p>Everything you need to provide top-tier care from anywhere in the world.</p>
</div>
</div>
</div>
<div className="row">
<div className="offset-xl-1 col-xl-10 col-12">
<div className="row g-6">
<div className="col-xl-4 col-12 pricing-card">
<div className="card bg-light pricing-inner h-100">
<div className="card-body p-6">
<span className="small fw-medium ls-md pricing-label">STARTER</span>
<div className="mb-4 pricing-price">
<span className="fs-1 fw-bold">$49</span>
<small>/mo</small>
</div>
<ul className="list-unstyled mb-0">
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>1 Provider</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Unlimited Consultations</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Basic EHR</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M18 6l-12 12"></path>
<path d="M6 6l12 12"></path>
</svg></span><span>AI Note Assistant</span></li>
</ul>
<div className="d-grid mt-6">
<a className="btn btn-outline-secondary pricing-btn" href="#!">Select Plan</a>
</div>
</div>
</div>
</div>
<div className="col-xl-4 col-12 pricing-card">
<div className="card border-primary pricing-inner h-100">
<div className="position-absolute top-0 start-50 translate-middle-x mt-n3">
<span className="small badge text-bg-primary text-white rounded-pill fw-medium">MOST POPULAR</span>
</div>
<div className="card-body p-6">
<span className="small fw-medium ls-md pricing-label">PROFESSIONAL</span>
<div className="mb-4 pricing-price">
<span className="fs-1 fw-bold">$129</span>
<small>/mo</small>
</div>
<ul className="list-unstyled mb-0">
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-primary" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Up to 5 Providers</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-primary" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Full EHR &amp; ePrescriptions</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-primary" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Custom Branding</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-primary" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>AI Clinical Assistant</span></li>
</ul>
<div className="d-grid mt-6">
<a className="btn btn-primary pricing-btn" href="#!">Get Started</a>
</div>
</div>
</div>
</div>
<div className="col-xl-4 col-12 pricing-card">
<div className="card bg-light pricing-inner h-100">
<div className="card-body p-6">
<span className="small fw-medium ls-md pricing-label">ENTERPRISE</span>
<div className="mb-4 pricing-price">
<span className="fs-1 fw-bold">Custom</span>
</div>
<ul className="list-unstyled mb-0">
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Unlimited Providers</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>Dedicated Success Manager</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>API &amp; Webhook Access</span></li>
<li className="d-flex align-items-center gap-2 mb-2"><span><svg className="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M5 12l5 5l10 -10"></path>
</svg></span><span>On-Prem Data Hosting</span></li>
</ul>
<div className="d-grid mt-6">
<a className="btn btn-outline-secondary pricing-btn" href="#!">Contact Sales</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
 FAQ 
<section className="py-lg-12 py-8 bg-light faq-section overflow-hidden" id="faq">
<div className="container">
<div className="row justify-content-center">
<div className="col-xl-6 col-12">
<div className="text-center mb-8 faq-heading">
<h2 className="display-6">Frequently Asked Questions</h2>
<p>Simple, supported, and designed to fit the way you work. From setup to go-live, we’ll guide you every
              step so your practice sees value from day one.</p>
</div>
</div>
</div>
<div className="row">
<div className="offset-xl-3 col-xl-6 col-12">
<div className="accordion faq-wrapper" id="accordionExample">
<div className="border mb-2 rounded-4 p-5 bg-white faq-item">
<h2 className="h4 mb-0">
<a aria-controls="collapseOne" aria-expanded="false" className="text-reset d-flex justify-content-between align-items-center faq-toggle" data-bs-target="#collapseOne" data-bs-toggle="collapse" href="#">
                  Is MediCloud HIPAA compliant?
                  <span className="chevron-arrow faq-icon"><svg className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M6 9l6 6l6 -6"></path>
</svg></span>
</a>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseOne">
<div className="mt-3 faq-content">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quae harum adipisci
                  possimus et. Iusto pariatur iste nam
                  incidunt ratione modi.
                </div>
</div>
</div>
<div className="border mb-2 rounded-4 p-5 bg-white faq-item">
<h2 className="h4 mb-0">
<a aria-controls="collapseTwo" aria-expanded="true" className="text-reset d-flex justify-content-between align-items-center faq-toggle" data-bs-target="#collapseTwo" data-bs-toggle="collapse" href="#">
                  Do patients need to download an app?
                  <span className="chevron-arrow faq-icon"><svg className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M6 9l6 6l6 -6"></path>
</svg></span>
</a>
</h2>
<div className="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseTwo">
<div className="mt-3 faq-content">
                  Sed urna felis, dapibus quis leo nec, luctus
                  auctor augue. Nam gravida placerat sem vitae
                  rutrum. Integer accumsan, enim et facilisis
                  eleifend, ante ligula
                  ornare nulla, sed pharetra tortor diam eget
                  magna.
                </div>
</div>
</div>
<div className="border mb-2 rounded-4 p-5 bg-white faq-item">
<h2 className="h4 mb-0">
<a aria-controls="collapseThree" aria-expanded="false" className="text-reset d-flex justify-content-between align-items-center faq-toggle" data-bs-target="#collapseThree" data-bs-toggle="collapse" href="#">
                  How does billing and payment work?
                  <span className="chevron-arrow faq-icon"><svg className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M6 9l6 6l6 -6"></path>
</svg></span>
</a>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
<div className="mt-3 faq-content">
                  Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Inventore tenetur cum
                  doloremque iusto molestiae. Minus beatae
                  quam cumque modi quidem asperiores
                  aliquam pariatur in iste.
                </div>
</div>
</div>
<div className="border mb-2 rounded-4 p-5 bg-white faq-item">
<h2 className="h4 mb-0">
<a aria-controls="collapseFour" aria-expanded="false" className="text-reset d-flex justify-content-between align-items-center faq-toggle" data-bs-target="#collapseFour" data-bs-toggle="collapse" href="#">
                  Can I integrate my current EHR?
                  <span className="chevron-arrow faq-icon"><svg className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M6 9l6 6l6 -6"></path>
</svg></span>
</a>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFour">
<div className="mt-3 faq-content">
                  Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Inventore tenetur cum
                  doloremque iusto molestiae. Minus beatae
                  quam cumque modi quidem asperiores
                  aliquam pariatur in iste.
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
 Footer 
<footer className="bg-secondary pt-lg-10 pt-8 text-white-50">
<div className="container">
<div className="row">
<div className="col-lg-3 col-12">
<div>
<h2 className="text-white">MediCloud</h2>
<p>Empowering healthcare providers with
              modern, secure, and intuitive digital clinic
              tools.</p>
</div>
</div>
<div className="col-lg-3 col-6">
<div>
<h3 className="text-white">Product</h3>
<ul className="list-unstyled lh-lg">
<li><a className="text-reset" href="#">Telehealth Video</a></li>
<li><a className="text-reset" href="#">Patient Portal</a></li>
<li><a className="text-reset" href="#">Smart Billing</a></li>
<li><a className="text-reset" href="#">ePrescriptions</a></li>
</ul>
</div>
</div>
<div className="col-lg-3 col-6">
<div>
<h3 className="text-white">Company</h3>
<ul className="list-unstyled lh-lg">
<li><a className="text-reset" href="#">About Us</a></li>
<li><a className="text-reset" href="#">Careers</a></li>
<li><a className="text-reset" href="#">Press Kit</a></li>
<li><a className="text-reset" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="col-lg-3 col-6">
<div>
<h3 className="text-white">Legal</h3>
<ul className="list-unstyled lh-lg">
<li><a className="text-reset" href="#">Privacy Policy</a></li>
<li><a className="text-reset" href="#">Terms of Service</a></li>
<li><a className="text-reset" href="#">HIPAA Compliance</a></li>
<li><a className="text-reset" href="#">GDPR</a></li>
</ul>
</div>
</div>
</div>
<div className="row border-top py-4 mt-lg-10 mt-6 g-md-0 gy-2 small border-opacity-10 border-white">
<div className="col-md-6">
<p className="mb-0">© 2026 MediCloud. HIPAA Compliant &amp; Secure.</p>
<p className="mb-0">All rights reserved by <a className="text-reset" href="https://codescandy.com" target="_blank">Codescandy</a> • Distributed by <a className="text-reset" href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
</div>
<div className="col-md-6 d-flex flex-col flex-md-row justify-content-md-end">
<p className="mb-0"><span>System Status:</span> <span className="text-white">Operational</span> </p>
</div>
</div>
</div>
</footer>
 Bootstrap JS 


    </>
  )
}
