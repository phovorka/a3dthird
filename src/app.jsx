// App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Featurette from './components/Featurette';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

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