import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();

  const currentLanguage = lang || 'cs';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);

    const newPath = location.pathname.substring(lang ? `/${lang}`.length : 0);
    navigate(`/${lng}${newPath || '/'}${location.hash}`);
  };

  const getFlagUrl = (lng) => {
    return lng === 'cs'
      ? 'https://github.com/phovorka/GLB/blob/main/a3d/cz.png?raw=true'
      : 'https://github.com/phovorka/GLB/blob/main/a3d/eng.png?raw=true';
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={getFlagUrl(currentLanguage)}
          alt={currentLanguage}
          style={{ width: '20px', marginRight: '5px' }}
        />
        {currentLanguage.toUpperCase()}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          <li>
            <button className="dropdown-item" onClick={() => changeLanguage('en')}>
              <img
                src={getFlagUrl('en')}
                alt="English"
                style={{ width: '20px', marginRight: '5px' }}
              />
              English
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => changeLanguage('cs')}>
              <img
                src={getFlagUrl('cs')}
                alt="Czech"
                style={{ width: '20px', marginRight: '5px' }}
              />
              Čeština
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
