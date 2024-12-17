import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <footer className="w-100 py-4 flex-shrink-0" id="footer">
      <div className="container py-4">
       
        <div className="m-auto" style={{ maxWidth: "600px" }}>
          {/* Logo Section */}
          <div className="m-auto text-center pb-4">
            <img
              src="https://raw.githubusercontent.com/phovorka/GLB/refs/heads/main/a3d/Assembly-logo.svg"
              alt="Logo"
              style={{ width: "150px" }}
            />
          </div>

          <h5>{t('footer.aboutUs')}</h5> {/* Translated heading */}
          <p>{t('footer.aboutUsText1')}</p> {/* Translated text */}
          <p>{t('footer.aboutUsText2')}</p> {/* Translated text */}

          <div className="m-auto row gy-3 mb-3">
            <div className="col">
              <h5 className="text mb-3">{t('footer.quickNav')}</h5> {/* Translated quick nav */}

              <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link className="me-3 py-2" to="/">{t('footer.home')}</Link>
                <Link className="me-3 py-2" to="/pages/demo#demo">{t('footer.demo')}</Link>
                <Link className="py-2" to="/#contact">{t('footer.contact')}</Link>
          <div className="position-relative  ms-4 ">
              <LanguageSwitcher />
            </div>              </nav>
             
            </div>
          </div>

          <p className="small m-auto text-center text-muted mt-4 pt-4">
            {t('footer.createdWith')} <a className="text-primary" href="#">Assembly3D.cz</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
