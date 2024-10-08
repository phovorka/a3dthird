// Home.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct v6 imports
import HeroSection from "../components/HeroSection";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";
import '../styles/index.css'; // Import any global CSS styles
import '../styles/index3d.css'; // Import 

const Home = () => {
  return (
    <section>
      <div className="Home container py-3">
          <HeroSection />
      </div>
          <Featurette />
          <ContactForm />
     </section>
    
  );
}

export default Home;