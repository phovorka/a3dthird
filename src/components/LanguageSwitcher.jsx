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
      ? 'https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197576.png?v=1729355093877' // Czech flag
      : 'https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197374.png?v=1729355093877'; // English flag
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between  p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
      >
        <img 
          src={getFlagUrl(currentLanguage)} 
          alt={`${currentLanguage === 'cs' ? 'Czech' : 'English'} flag`} 
          style={{ width: '18px', height: '18px' }} // Set image size to 36x36 pixels
          className="mr-2" // Add margin to the right
        />

      </button>

      {isOpen && (
        <div className="fixed right-4  z-10  mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div 
            onClick={() => changeLanguage('cs')} 
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          >
            <img 
              src='https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197576.png?v=1729355093877' 
              alt="Czech flag" 
              style={{ width: '18px', height: '18px' }} // Set image size to 36x36 pixels
              className="m-2" // Add margin to the right
            />
          </div>
          <div 
            onClick={() => changeLanguage('en')} 
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          >
            <img 
              src='https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197374.png?v=1729355093877' 
              alt="English flag" 
              style={{ width: '18px', height: '18px' }} // Set image size to 36x36 pixels
              className="m-2" // Add margin to the right
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
