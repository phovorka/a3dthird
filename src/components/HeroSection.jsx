import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const HeroSection = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <section className="bg-dark mb-4">
      <div className="container">
        <div className="row justify-content-center p-0 p-sm-5">
          <div className="col-12 col-lg-8 col-xl-6 text-center p-4">
            <h1 className="lead text-primary-500 display-5 fw-bolder">
              {t('heroSection.title')} {/* Translated title */}
            </h1>
            <p className="lead text-white text-white-50 px-2 mb-4">
              {t('heroSection.subtitle')} {/* Translated subtitle */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
