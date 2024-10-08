// components/Featurette.js
import React from 'react';
import ModelViewer from './src/components/ModelViewer';

const Featurette = () => {
  return (
    <div className="container">
      <div className="row featurette py-5 px-3">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Zaujme na první pohled. <span className="text-muted">Volností 3D.</span>
          </h2>
          <p className="lead">
            Uživatelé mohou model zvětšit, rotovat, nebo posouvat tak jak potřebují. Díky takovéto volnosti se rapidně zkrátí doba nastudování jednotlivých operací.
          </p>
        </div>
        <div className="col-md-5" id="bon1">
          <ModelViewer src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436" />
        </div>
      </div>
    </div>
  );
};

export default Featurette;
