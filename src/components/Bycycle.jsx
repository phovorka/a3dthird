// src/components/Bycycle.jsx
import React from 'react';
import ModelViewer from './ModelViewer';

const Bycycle = ({ heading, subheading, description, modelId }) => {
  return (
    <div className="container">
      <div className="row featurette pt-4">
        <div className="col-md-5" id={modelId}>
         <ModelViewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb" />
       </div>
     </div>
   </div>
 );
};

export default Bycycle;