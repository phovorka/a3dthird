//i18n.js
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    lng: "cs", // Default language
   supportedLngs: ['en', 'cs'], 
    fallbackLng: 'en',
    detection: {
      order: ["path", "cookie", "localStorage", "navigator", "htmlTag"],   
      lookupFromPathIndex: 1, // Bere jazyk z první části URL (např. /en/home)
      caches: ['cookie'],
    },
    backend: {
      loadPath: "/{{lng}}/translation.json", // Cesta k překladovým souborům
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
