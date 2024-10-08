// Home.js
import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct v6 imports
import HeroSection from "../components/HeroSection";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ModelViewer from "../components/ModelViewer";
import Demo from "./demo";
import "bootstrap/dist/css/bootstrap.min.css";
import '@google/model-viewer'; // Import the model-viewer library

import "../styles/index.css";

function Home() {
  return (
      <div className="Home">
          <HeroSection />
          <Featurette />
          <ContactForm />
      </div>
    
  );
}

export default Home;