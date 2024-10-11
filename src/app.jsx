// App.js
import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; // Correct v6 imports
import Home from "./pages/home";
import Featurette from "./components/Featurette";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ModelViewer from "./components/ModelViewer";
import Demo from "./pages/demo";

import i18n from "./i18n";

import "@google/model-viewer"; // Import the model-viewer library
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the `#`
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};


console.log(navigator.language); // detect language of your browser

function App() {
  return (
    <Router>
      <main>
        <div class="container py-3">
          <Header />
          {/* This handles scrolling to #hash elements */}
          <ScrollToHashElement />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
