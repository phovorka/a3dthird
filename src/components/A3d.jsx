
 
import React, { useEffect, useRef } from 'react';
import '@google/model-viewer'; // Import the model-viewer library


const A3d = ({ src }) => {
  const modelViewerRef = useRef(null); // Create a ref for the model-viewer element

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    if (modelViewer) {
      // Bind the model-viewer logic from a3dviewer.js here
      initializeModelViewer(modelViewer);
    }

    return () => {
      // Cleanup if necessary when component unmounts
    };
  }, []);

  const initializeModelViewer = (modelViewer) => {
    // Play and Pause buttons
    const playBtn = modelViewer.querySelector('.play');
    const pauseBtn = modelViewer.querySelector('.pause');

    playBtn.addEventListener('click', function () {
      this.play();
    }.bind(modelViewer));

    pauseBtn.addEventListener('click', function () {
      this.pause();
    }.bind(modelViewer));

    // Progress bar
    const progress = modelViewer.querySelector('.progress');
    const bar = progress.querySelector('.bar');

    modelViewer.addEventListener('progress', function (event) {
      const { totalProgress } = event.detail;
      progress.classList.toggle('show', totalProgress < 1);
      bar.style.transform = `scaleX(${totalProgress})`;
    });

    // Slider animation
    const slider = modelViewer.querySelector('.anim-Range');
    const updateSlider = function () {
      slider.max = Math.floor(this.duration * 100) / 100;
      slider.value = this.currentTime;
    }.bind(modelViewer);

    slider.addEventListener('input', function (event) {
      this.currentTime = event.target.value;
    }.bind(modelViewer));

    setInterval(updateSlider, 100);

    // Hide animation toolbar when no animation appears
    modelViewer.addEventListener('load', function () {
      const animations = this.availableAnimations;
      const numberOfAnimations = animations.length;
      const animToolbar = this.querySelector('.animation-Toolbar');
      animToolbar.style.display = numberOfAnimations ? 'block' : 'none';
    }.bind(modelViewer));
  };

  return (
    <model-viewer
      ref={modelViewerRef}
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


export default A3d;