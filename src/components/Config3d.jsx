// src/components/Config3D.jsx
// content for Configurator page 

import React, { useState, useEffect, useRef,useMemo } from "react";
import "@google/model-viewer"; 
import { useTranslation } from 'react-i18next'; 
import './config3d.module.css';

const Config3d = () => {
  const { t } = useTranslation();
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold text-primary">{t("configurator.title")}</h2>
    </div>
  );
};

    export default Config3d;