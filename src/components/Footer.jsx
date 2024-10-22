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
              src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/Assembly.svg?v=1715948982135"
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
                <LanguageSwitcher className="position-top-right " />
              </nav>
             
            </div>
          </div>

          <p className="small m-auto text-center text-muted mb-0">
            {t('footer.createdWith')} <a className="text-primary" href="#">ASSEMBLY3D.eu</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
