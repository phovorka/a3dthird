// components/Demo.js
import React from 'react';
import Header from '../components/Header';
import A3d from '../components/A3d';
import Footer from '../components/Footer';

const Demo = () => {
  return (
    <div className="demo-page">
      <Header />
      <main>
      <a3d />
      </main>
      <Footer />
    </div>
  );
};

export default Demo;