// App.js
import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct v6 imports
import HeroSection from "../components/HeroSection";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Demo from "./demo";
import '@google/model-viewer'; // Import the model-viewer library
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

function App() {
  return (
    <Router>
      {" "}
      {/* Ensure your Router wraps everything */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/features" element={<Featurette />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <HeroSection />
          <Featurette />
          <ModelViewer/>
          <ContactForm />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
