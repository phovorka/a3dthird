// components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark mb-4">
      <div className="container">
        <div className="row justify-content-center p-0 p-sm-5">
          <div className="col-12 col-lg-8 col-xl-6 text-center p-4">
            <h1 className="text-white display-5 fw-bolder">
              3D animované montážní návody
            </h1>
            <p className="lead text-white-50 px-2 mb-4">
              Řekni sbohem tištěným návodům. Využij volnosti 3D. Bez otravné instalace.
            </p>
            <a href="demo.html">
              <button className="btn btn-primary btn-lg px-4 m-0 mb-3 mx-sm-3">
                Ukázka
              </button>
            </a>
            <button className="btn btn-outline-light btn-lg px-4 m-0 mb-3 mx-sm-3">
              Výhody
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
