import React from "react";

import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from "./pages/app.jsx";
import './styles/index.css'; // Import any global CSS styles
import './styles/index3d.css'; // Import 


// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new createRoot method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
