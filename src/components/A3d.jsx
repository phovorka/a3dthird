import React, { useState, useEffect, useRef } from 'react';
import style from '../styles/A3d.css'; // Import only for this component
import '@google/model-viewer'; // Import the model-viewer library


const A3d = () => {
  const modelViewerRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toolsVisible, setToolsVisible] = useState(false);
  const [animationToolbarVisible, setAnimationToolbarVisible] = useState(false);
   const [sliderValue, setSliderValue] = useState(0); // Slider value as a percentage
  const [isDragging, setIsDragging] = useState(false); // Track if the slider is being dragged

  const slides = [
    {
      src: 'https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/1st.glb?v=1725631156649',
      cameraOrbit: '30deg 70deg 3m',
      cameraTarget: '2m 12m 2m',
      minOrbit: 'auto auto 35m',
      minFov: '20deg',
      description: '1) Vlož dřevěné kolíky',
      backgroundImage: 'https://cdn.glitch.com/2f80c958-3bc4-4f47-8e97-6a5c8684ac2c%2Fillustration.svg?v=1618196579405', // Background image URL for the first slide
    },
    {
      src: 'https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436',
      cameraOrbit: '40deg 70deg 3m',
      cameraTarget: '-6m 10m 2m',
      minOrbit: 'auto auto 40m',
      minFov: '20deg',
      description: '2) Přišroubuj přední čelo',
      backgroundImage: 'https://example.com/path/to/slide2-image.png', // Background image URL for the second slide

    },
    // Add more slides as needed...
  ];

useEffect(() => {
    const modelViewer = modelViewerRef.current;

    // Hide progress bar after model loads and check if there are available animations
    const handleLoad = () => {
      const progress = modelViewer.querySelector('.progress');
      if (progress) progress.style.display = 'none';

      const animToolbar = modelViewer.querySelector('.animation-Toolbar');
      setAnimationToolbarVisible(modelViewer.availableAnimations.length > 0);

      // Start syncing the slider with the animation's time
      const slider = modelViewer.querySelector('.anim-Range');
      const updateSlider = () => {
        if (!isDragging) {
          const currentTime = modelViewer.currentTime;
          const duration = modelViewer.duration;
          if (duration > 0) {
            const newValue = (currentTime / duration) * 100;
            setSliderValue(newValue); // Update React state for slider
          }
        }
      };

      // Set interval to update the slider every 100ms
      const interval = setInterval(updateSlider, 100);

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    };

    // Add event listener for model load
    modelViewer.addEventListener('load', handleLoad);

    return () => {
      modelViewer.removeEventListener('load', handleLoad);
    };
  }, [isDragging]); // Add isDragging dependency to ensure proper updates

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

  const toggleTools = () => {
    setToolsVisible(!toolsVisible);
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

  // Handle the user dragging the slider
  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value); // Update the slider's state

    const modelViewer = modelViewerRef.current;
    const duration = modelViewer.duration;
    modelViewer.currentTime = (value / 100) * duration; // Sync with model viewer's current time
  };

  // Start dragging
  const handleSliderDragStart = () => {
    setIsDragging(true);
  };

  // End dragging
  const handleSliderDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <main>
    <div className="assembly-Instruction pt-4">
    <div className="header">
      <img
        src="https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/ikea.svg?v=1665664365999"
        className="header-image p-1"
        alt="IKEA Logo" // Adding alt text for accessibility
      />
      <h5>
        <p className="ps-2 btn">
          <b>IKEA</b> GULLIVER Cot
        </p>
      </h5>
    </div>
        <div className="viewer" id="viewer">
          <model-viewer
            ref={modelViewerRef}
            ar
            camera-controls
            enable-pan
            autoplay
            shadow-intensity="1"
            className="model"
            id="A3d__viewer"
            src={slides[0].src}
            camera-orbit={slides[0].cameraOrbit}
            min-camera-orbit={slides[0].minOrbit}
            camera-target={slides[0].cameraTarget}
           
          >
            <button className="fullScreen" onClick={openFullscreen}></button>
            {isFullScreen && <button className="exit-Fullscreen" onClick={exitFullscreen}></button>}

            {/* Tools Visibility Toggle */}
            <div id="usedTools" className="btn3 A3d__btn" onClick={toggleTools}></div>
            {toolsVisible && (
              <div id="tools">
                <p>Použité díly</p>
                <img id="tool1" className="img-tools" alt="tool" src="https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%202%20(1).svg?v=1670781334505" />
                <img id="tool2" className="img-tools" alt="tool" src="tool2-image-url" />
                {/* Add more tool images here... */}
              </div>
            )}

            {/* Animation Toolbar */}
            {animationToolbarVisible && (
                 <div className="animation-Toolbar">
                <button className="A3d__btn play" onClick={() => modelViewerRef.current.play()}></button>
                <button className="A3d__btn pause" onClick={() => modelViewerRef.current.pause()}></button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={sliderValue} // Bind slider value to state
                  className="anim-Range"
                  onChange={handleSliderChange} // Handle user sliding
                  onMouseDown={handleSliderDragStart} // Start dragging
                  onMouseUp={handleSliderDragEnd} // End dragging
                />
              </div>
            )}
          </model-viewer>

          {/* Slides */}
          <div className="slides">
            {slides.map((slide, index) => (
              <div key={index} className="slide-Card">
                <button
                  className={`slide-Picture ${currentSlide === index ? 'selected' : ''}`}
                  onClick={() => switchSrc(index)}
        style={{ backgroundImage: `url(${slide.backgroundImage})` }} // Using the backgroundImage for each slide
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
      </div>
</main>
     
   
  );
};

export default A3d;
