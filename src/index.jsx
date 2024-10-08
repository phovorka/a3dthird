import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import '.src/styles/index.css'; // Import any global CSS styles
import '.src/styles/index3d.css'; // Import 


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
