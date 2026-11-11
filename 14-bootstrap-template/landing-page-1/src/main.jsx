import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './assets/css/bootstrap.min.css'
import './assets/css/all.min.css'
import './assets/css/aos.css'
import './assets/css/magnific-popup.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/style.css'

import './assets/js/jquery-3.7.1.min.js'
import './assets/js/bootstrap.bundle.min.js'
// import './assets/js/aos.js'
import './assets/js/swiper-bundle.min.js'
import './assets/js/jquery.magnific-popup.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
