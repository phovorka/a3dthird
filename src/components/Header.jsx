// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <img
              src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/Assembly.svg?v=1715948982135"
              width="200px"
              alt="Assembly 3D"
            />
          </a>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none" href="#footer">O nás</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="demo.html">Demo</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#vyhody">Výhody</a>
            <a className="py-2 text-dark text-decoration-none" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;