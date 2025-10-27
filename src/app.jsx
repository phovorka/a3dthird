// src/App.js
// ToDo: add page for 3d configurators
import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Demo from "./pages/demo";
import Login from "./pages/Login";
import { useTranslation } from "react-i18next"; 
import { Helmet } from "react-helmet";
import "@google/model-viewer"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import i18n from "../i18n"; // never read but important for function
import Viewer from "./pages/viewer";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the `#`
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const MetaDescription = () => {
  const { t } = useTranslation();

  return (
      <Helmet>
          <meta name="description" content={t('meta.description')} />
      </Helmet>
  );
};

const AppContent = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <main>
      <MetaDescription />
      <div className="container py-3">
        <Header />
        <ScrollToHashElement />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
      <Footer />
    </main>
  );
};

function App() {
  const supportedLngs = ["en", "cs"];
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = supportedLngs.includes(browserLang) ? browserLang : "en";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />
        <Route path="/:lang/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
