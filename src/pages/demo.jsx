// components/Demo.js
import React from 'react';
import Header from './components/Header';
import a3d from './components/A3D';
import Footer from './components/Footer';

const Demo = () => {
  return (
    <div className="demo-page">
      <Header />
      <a3d />
      <Footer />
    </div>
  );
};

export default Demo;