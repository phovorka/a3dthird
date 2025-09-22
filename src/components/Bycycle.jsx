// src/components/Bycycle.jsx
import React from 'react';
import ThreeDeeViewer from './ThreeDeeViewer';

const Bycycle = ({ heading, subheading, description, modelId }) => {
  return (
    <div className="container">
      <div className="row featurette pt-4">
        <div className="col-md-5" id={modelId}>
         <ThreeDeeViewer src="models/bike.glb" />
       </div>
     </div>
   </div>
 );
};

export default Bycycle;