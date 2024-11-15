// components/Featurette.js
import React from 'react';
import ModelViewer from './ModelViewer';

const Featurette = ({ heading, subheading, description, modelSrc, modelId }) => {
  return (
    <div className="container">
      <div className="row featurette pt-5">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            {heading} <span className="text-muted ">{subheading}</span>
          </h2>
          <p className="lead ">
            {description}
          </p>
        </div>
        <div className="col-md-5" id={modelId}>
          <ModelViewer src={modelSrc} />
        </div>
      </div>
    </div>
  );
};

export default Featurette;
