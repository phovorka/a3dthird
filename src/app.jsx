// App.js
import React from 'react';
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import Featurette from './src/components/Featurette';
import ContactForm from './src/components/ContactForm';
import Footer from './src/components/Footer';
import './src/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Featurette />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;