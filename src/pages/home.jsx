// Home.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct v6 imports
import HeroSection from "../components/HeroSection";
import Featurette from "../components/Featurette";
import ContactForm from "../components/ContactForm";
import "../styles/index.css"; // Import any global CSS styles
import "../styles/index3d.css"; // Import

const Home = () => {
  return (
    <section>
      <div className="Home container py-3">
        <HeroSection />
      </div>
      <Featurette
        heading="Zaujme na první pohled."
        subheading="Volností 3D."
        description="Uživatelé mohou model zvětšit, rotovat, nebo posouvat tak jak potřebují. Díky takovéto volnosti se rapidně zkrátí doba nastudování jednotlivých operací."
        modelSrc="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436"
        modelId="bon1"
      />

      <Featurette
        heading="Poznejte detaily."
        subheading="Interaktivní vizualizace."
        description="Tento model vám umožní prozkoumat každý aspekt zblízka a pochopit složitost konstrukce."
        modelSrc="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436"
        modelId="bon2"
      />

      <ContactForm />
    </section>
  );
};

export default Home;
