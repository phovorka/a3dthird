// App.js
import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct v6 imports
import Home from "./home";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ModelViewer from "../components/ModelViewer";
import Demo from "./demo";

import '@google/model-viewer'; // Import the model-viewer library
import "../styles/index.css";
import "../styles/index3d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <Router>
         <main>
      <div class="container py-3">
        <Header />
           </div>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/demo" element={<Demo />} />
          </Routes>
     
        <Footer />
      
      </main>
    </Router>
  );
}

export default App;
