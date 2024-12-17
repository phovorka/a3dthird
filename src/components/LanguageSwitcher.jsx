import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Track the current language
  const currentLanguage = i18n.language || 'cs'; // Default to Czech if no language is set

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close dropdown after selection
  };

  // Set flag URL based on current language
  const getFlagUrl = (lng) => {
    return lng === 'cs'
      ? 'https://github.com/phovorka/GLB/blob/main/a3d/cz.png?raw=true' // Czech flag
      : 'https://github.com/phovorka/GLB/blob/main/a3d/eng.png?raw=true'; // English flag
  };

  return (
    <div className="dropdown">
      <button 
        className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" 
        type="button" 
        id="dropdownMenuButton" 
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
        loading="lazy"
          src={getFlagUrl(currentLanguage)} 
          alt={`${currentLanguage === 'cs' ? 'Czech' : 'English'} flag`} 
          width="18" height="18"
          className="me-2" // Use Bootstrap's `me-2` for right margin
        />
      </button>

      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item" onClick={() => changeLanguage('cs')}>
          <img 
          loading="lazy"
            src='https://github.com/phovorka/GLB/blob/main/a3d/cz.png?raw=true' 
            alt="Czech flag" 
            width="18" height="18"
            className="me-2"
          /> Čeština
        </li>
        <li className="dropdown-item" onClick={() => changeLanguage('en')}>
          <img 
          loading="lazy"
            src='https://github.com/phovorka/GLB/blob/main/a3d/eng.png?raw=true' 
            alt="English flag" 
            width="18" height="18"
            className="me-2"
          /> English
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
