// Home.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct v6 imports
import HeroSection from "../components/HeroSection";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
      <div className="Home">
          <HeroSection />
          <Featurette />
          <ContactForm />
      </div>
    
  );
}

export default Home;