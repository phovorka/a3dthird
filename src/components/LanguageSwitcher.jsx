import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="block w-full p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
      >
        <option value="cs" className="flex items-center">
          <img src="https://flagcdn.com/cz.svg" alt="Czech flag" className="inline-block w-4 h-4 mr-2" />
          Čeština
        </option>
        <option value="en" className="flex items-center">
          <img src="https://flagcdn.com/gb.svg" alt="English flag" className="inline-block w-4 h-4 mr-2" />
          English
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
