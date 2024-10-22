import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';



import { useTranslation } from 'react-i18next'; // Import useTranslation

const Header = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <header>
      
      <div className="container position-relative">
         <LanguageSwitcher  className="position-absolute top-0 end-0" />
        <div className="d-flex flex-column flex-md-row align-items-center mb-2 border-bottom">
          <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
            <img
              src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/Assembly.svg?v=1715948982135"
              width="200px"
              alt="Assembly 3D"
            />
          </Link>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link className="me-3 py-2 text-dark text-decoration-none" to="/">
              {t('header.home')} {/* Translated home link */}
            </Link>
            <Link className="me-3 py-2 text-dark text-decoration-none" to="/pages/demo#demo">
              {t('header.demo')} {/* Translated demo link */}
            </Link>
            <Link className="py-2 text-dark text-decoration-none" to="/#contact">
              {t('header.contact')} {/* Translated contact link */}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
