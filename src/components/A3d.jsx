import React, { useState, useEffect, useRef } from 'react';
import '../styles/A3d.css'; // Import 

import '@google/model-viewer'; // Import the model-viewer library

const A3d = () => {
  const modelViewerRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: 'https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/1st.glb?v=1725631156649',
      cameraOrbit: '30deg 70deg 3m',
      cameraTarget: '2m 12m 2m',
      minOrbit: 'auto auto 35m',
      minFov: '20deg',
      description: '1) Vlož dřevěné kolíky',
    },
    {
      src: 'https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436',
      cameraOrbit: '40deg 70deg 3m',
      cameraTarget: '-6m 10m 2m',
      minOrbit: 'auto auto 40m',
      minFov: '20deg',
      description: '2) Přišroubuj přední čelo',
    },
    // Add more slides as needed...
  ];

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = () => {
      // Hide the progress bar when the model loads
      const progress = modelViewer.querySelector('.progress');
      progress.style.display = 'none';
    };

    const handlePlay = () => modelViewer.play();
    const handlePause = () => modelViewer.pause();
    const handleSliderChange = (event) => {
      modelViewer.currentTime = event.target.value;
    };

    // Event listeners for the model viewer
    modelViewer.addEventListener('load', handleLoad);

    return () => {
      modelViewer.removeEventListener('load', handleLoad);
    };
  }, []);

  const openFullscreen = () => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer.requestFullscreen) {
      modelViewer.requestFullscreen();
    }
    setFullScreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setFullScreen(false);
  };

  const switchSrc = (slideIndex) => {
    const slide = slides[slideIndex];
    const modelViewer = modelViewerRef.current;

    modelViewer.src = slide.src;
    modelViewer.cameraOrbit = slide.cameraOrbit;
    modelViewer.cameraTarget = slide.cameraTarget;
    modelViewer.minCameraOrbit = slide.minOrbit;
    modelViewer.minFieldOfView = slide.minFov;

    setCurrentSlide(slideIndex);
  };

  return (
    <main>
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <img
            src="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/Assembly.svg?v=1715948982135"
            alt="Assembly 3D"
            width="150px"
          />
          <span className="ps-3">DEMO</span>
        </a>
    

      <div className="assembly-Instruction pt-4">
        <div className="viewer" id="viewer">
          <model-viewer
            ref={modelViewerRef}
            ar
            camera-controls
            enable-pan
            autoplay
            shadow-intensity="1"
            src={slides[0].src}
            camera-orbit={slides[0].cameraOrbit}
            min-camera-orbit={slides[0].minOrbit}
            camera-target={slides[0].cameraTarget}
            style={{ width: '100%', height: '500px' }}
          >
            <button className="fullScreen" onClick={openFullscreen}></button>
            {isFullScreen && <button className="exit-Fullscreen" onClick={exitFullscreen}></button>}

            {/* Animation Toolbar */}
            <div className="animation-Toolbar">
              <button className="btn play" onClick={() => modelViewerRef.current.play()}></button>
              <button className="btn pause" onClick={() => modelViewerRef.current.pause()}></button>
              <input
                type="range"
                min="0"
                step="0.1"
                className="anim-Range"
                onChange={handleSliderChange}
              />
            </div>
          </model-viewer>
        </div>

        {/* Slide Cards */}
        <div className="slides">
          {slides.map((slide, index) => (
            <div key={index} className="slide-Card">
              <button
                className={`slide-Picture ${currentSlide === index ? 'selected' : ''}`}
                onClick={() => switchSrc(index)}
                style={{ backgroundImage: `url('path/to/slide/image.png')` }}
              >
                <span className="arrow-Slide"></span>
              </button>
              <small>
                <span className="slide-Describe">{slide.description}</span>
              </small>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default A3d;
