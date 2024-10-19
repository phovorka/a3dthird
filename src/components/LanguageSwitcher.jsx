import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
      >
        <img 
          src="https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197576.png?v=1729355093877" 
          alt="Czech flag" 
          className="w-4 h-4 mr-2" // Adjust size as needed
        />
        {/* Show the current language based on state */}
        <span className="ml-2">Language</span> {/* Placeholder text */}
        <span className="ml-2">&#9662;</span> {/* Dropdown arrow */}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div 
            onClick={() => changeLanguage('cs')} 
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          >
            <img 
              src="https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197576.png?v=1729355093877" 
              alt="Czech flag" 
              className="w-4 h-4 mr-2" // Adjusted size for flags
            />
          </div>
          <div 
            onClick={() => changeLanguage('en')} 
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          >
            <img 
              src="https://cdn.glitch.global/ebbb9f99-0d27-421b-a7b8-431daef53028/197374.png?v=1729355086595" 
              alt="English flag" 
              className="w-4 h-4 mr-2" // Adjusted size for flags
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
