// components/ModelViewer.js
import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer'; // Import the model-viewer library

const ModelViewer = ({ src }) => {
  const modelViewerRef = useRef(null); // Create a ref for the model-viewer element
  const [sliderValue, setSliderValue] = useState(0); // Track the slider value
  const [isDragging, setIsDragging] = useState(false); // Track if the user is interacting with the slider

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    if (modelViewer) {
      initializeModelViewer(modelViewer);
    }

    return () => {
      // Cleanup listeners if necessary
    };
  }, []);

  const initializeModelViewer = (modelViewer) => {
    // Play and Pause buttons
    const playBtn = modelViewer.querySelector('.play');
    const pauseBtn = modelViewer.querySelector('.pause');

    playBtn.addEventListener('click', () => {
      modelViewer.play();
    });

    pauseBtn.addEventListener('click', () => {
      modelViewer.pause();
    });

    // Progress bar
    const progress = modelViewer.querySelector('.progress');
    const bar = progress.querySelector('.bar');

    // Listen to model-viewer progress updates
    modelViewer.addEventListener('progress', (event) => {
      const { totalProgress } = event.detail;
      progress.classList.toggle('show', totalProgress < 1);
      bar.style.transform = `scaleX(${totalProgress})`;
    });

    // Update the slider based on the model's current time
    const slider = modelViewer.querySelector('.anim-Range');
    const updateSlider = () => {
      if (!isDragging) {
        const currentTime = modelViewer.currentTime;
        const duration = modelViewer.duration;
        const newValue = (currentTime / duration) * 100;
        setSliderValue(newValue); // Update the React state for the slider
      }
        requestAnimationFrame(updateSlider); // Call updateSlider again in the next frame

    };

    // Sync slider value with model-viewer's currentTime
    slider.addEventListener('input', (event) => {
      const value = event.target.value;
      const duration = modelViewer.duration;
      modelViewer.currentTime = (value / 100) * duration;
    });

    // Set an interval to update the slider every 100ms
    const interval = requestAnimationFrame(updateSlider);

    // Handle the cleanup of the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  };

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value); // Update the slider's state

    const modelViewer = modelViewerRef.current;
    const duration = modelViewer.duration;
    modelViewer.currentTime = (value / 100) * duration; // Sync with model viewer's current time
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
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={sliderValue}
          onChange={handleSliderChange}
          onMouseDown={() => setIsDragging(true)} // Set dragging to true
          onMouseUp={() => setIsDragging(false)} // Set dragging to false
          className="anim-Range"
        />
      </div>
      <div className="progress" slot="progress-bar">
        <div className="bar"></div>
      </div>
    </model-viewer>
  );
};

export default ModelViewer;