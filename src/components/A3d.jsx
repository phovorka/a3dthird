// components/A3D.js
import React from 'react';
import ModelViewer from './ModelViewer';

const A3d= () => {
  return (
    <div className="a3d-section container text-center my-5">
      <h1 className="display-4">3D Demo</h1>
      <p className="lead">Explore our 3D model in this interactive viewer.</p>
      <ModelViewer
        src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436"
        alt="Demo 3D Model"
      />
    </div>
  );
};

export default A3d;