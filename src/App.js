// Init
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Files
import Index from "./routes/index";
import "./css/index.css";

// Component
function App() {
  let { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer
        position="bottom-right"
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
