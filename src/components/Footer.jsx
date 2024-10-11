// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink-0" id="footer">
      <div className="container py-4">
        <div className="m-auto" style={{ maxWidth: "600px" }}>
          {/* Logo Section */}
          <div className="m-auto text-center pb-4">
            <img
              src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/Assembly.svg?v=1715948982135"
              alt="Logo"
              style={{ width: "150px" }}
            />
          </div>

          <h5>O nás</h5>
          <p>
            Jsme malý tým kreativců, kteří se rozhodli změnit svět návodů a
            manuálů, tak jak jej známe dnes. 3D grafikou a webovými
            technologiemi jsme se zabývali již jako zaměstnanci nadnárodních
            firem a dnes se snažíme tuto technologickou novinku přenést i do
            českého prostředí.
          </p>
          <p>
            Díky naším letitým zkušenostem jsme vytvořily velmi efektivní systém
            pro tvorbu a prezentaci 3D návodů, který našim zakazníkům nabízíme
            za cenu, která mnohdy odpovídá pouhým nákladům tisku manuálů na
            papír. Tím tak šetříme nejen životní prostředí, ale také peneženku
            našich klientů.
          </p>

          <div className="m-auto row gy-3 mb-3">
            <div className="col">
              <h5 className="text mb-3">Rychlá navigace</h5>

              <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link className="me-3 py-2" to="/">
                  Hlavní strana
                </Link>
                  <Link className="me-3 py-2" to="/pages/demo#demo">
                  Demo
                </Link>

                <Link className="py-2" to="/#contact">
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>

          <p className="small m-auto text-center text-muted mb-0">
            Vytvořeno s ❤️ v Praze{" "}
            <a className="text-primary" href="#">
              ASSEMBLY3D.eu
            </a>
          </p>
        </div>
      </div>
       <LanguageSwitcher />
    </footer>
  );
};

export default Footer;
