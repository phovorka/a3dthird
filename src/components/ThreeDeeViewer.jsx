import React from 'react';
import '@google/model-viewer'; 

const ThreeDeeViewer = ({ src }) => {
  return (
    <model-viewer
      src={src}
      alt="A 3D model"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      style={{width: '100%', height: '400px'}}
    >
    </model-viewer>
  );
};

export default ThreeDeeViewer;