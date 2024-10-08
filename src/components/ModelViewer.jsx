// components/ModelViewer.js
import React, { useEffect } from 'react';

const ModelViewer = ({ src }) => {
  useEffect(() => {
    const initializeModelViewer = (modelViewer) => {
      // Your logic from a3dviewer.js to bind model viewers goes here
    };
    document.querySelectorAll('.model').forEach(initializeModelViewer);
  }, []);

  return (
    <model-viewer
      src={src}
      shadow-intensity="1"
      camera-controls
      enable-pan
      camera-orbit="54.31deg 66.45deg auto"
      min-camera-orbit="auto 0deg auto"
      max-camera-orbit="auto 180deg auto"
      touch-action="none"
      className="model"
      autoplay
    >
      <div className="animation-Toolbar">
        <button className="btn play"></button>
        <button className="btn pause"></button>
        <input type="range" min="0" value="0" step="0.1" className="anim-Range" />
      </div>
      <div className="progress" slot="progress-bar">
        <div className="bar"></div>
      </div>
    </model-viewer>
  );
};

export default ModelViewer;
