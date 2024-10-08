// App.js
import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

function App() {
  return (
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
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
