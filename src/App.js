// Init
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './utils/i18n';
import { useTranslation } from 'react-i18next';
// Files
import Index from './routes/index';
import './css/index.css';

// Component
function App() {
  const { i18n } = useTranslation();
  let { pathname } = useLocation();

  useEffect(() => {
    const { host } = window.location;
    if (host === 'falconconsulting.fr') {
      i18n.changeLanguage('fr');
    }
  }, []);

  useEffect(() => {
    let temp = localStorage.getItem('open');
    if (!temp) {
      localStorage.setItem('open', true);
    }
  }, []);

  useEffect(() => {
    // Scroll to top logic
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 800);
  }, [pathname]);
  return (
    <div className='App'>
      {/* toastify Container for Notification */}
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />

      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
