import React from "react";
import { Link, useParams } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <header>
      <div className="container ">
        <div className="d-flex flex-column flex-md-row align-items-center mb-2 border-bottom">
          <Link
            to={`/${lang}`}
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/phovorka/GLB/refs/heads/main/a3d/Assembly-logo.svg"
              width="200px"
              alt="Assembly 3D"
            />
          </Link>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            {/* 
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={`/${lang}`}
            >
              {t("header.home")}
            </Link>
            */}
            
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={`/${lang}/pages/demo#demo`}
            >
              {t("header.demo")}
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={`/${lang}/login`}
            >
              Login
            </Link>
            <Link
              className="py-2 text-dark text-decoration-none"
              to={`/${lang}/#contact`}
            >
              {t("header.contact")}
            </Link>

            <div className="position-relative ms-4 ">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
