import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
const FeatureComparison = () => {
    const { t } = useTranslation();
  
    return (
      <div className="container text-center my-5">
        <h2 className="fw-bold text-primary">{t("comparison.title")}</h2>
        <h2 className="fw-bold text-primary">{t("comparison.subtitle")}</h2>
        <p className="text-muted">
          {t("comparison.description")}
        </p>
        <div className="row mt-4">
          <div className="col-md-5 offset-md-1 bg-light p-4 rounded shadow">
            <h4 className="fw-bold">{t("comparison.goFromTitle")}</h4>
            <ul className="list-unstyled text-start">
              <li className="text-danger">❌ {t("comparison.staticManuals")}</li>
              <li className="text-danger">❌ {t("comparison.videos")}</li>
              <li className="text-danger">❌ {t("comparison.explodedDiagrams")}</li>
              <li className="text-danger">❌ {t("comparison.figuringOut")}</li>
              <li className="text-danger">❌ {t("comparison.customerSupport")}</li>
            </ul>
          </div>
          <div className="col-md-5 bg-light p-4 rounded shadow">
            <h4 className="fw-bold">{t("comparison.toTitle")}</h4>
            <ul className="list-unstyled text-start">
              <li className="text-success">✔️ {t("comparison.360Views")}</li>
              <li className="text-success">✔️ {t("comparison.touchInteraction")}</li>
              <li className="text-success">✔️ {t("comparison.animatedGuides")}</li>
              <li className="text-success">✔️ {t("comparison.immersiveReality")}</li>
              <li className="text-success">✔️ {t("comparison.mobileApp")}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeatureComparison;
  