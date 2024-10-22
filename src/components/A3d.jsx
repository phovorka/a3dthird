import React, { useState, useEffect, useRef } from "react";
import style from "../styles/A3d.css"; // Import only for this component
import "@google/model-viewer"; // Import the model-viewer library
import { useTranslation } from 'react-i18next'; // Importing useTranslation for translations

const A3d = () => {
  const modelViewerRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toolsVisible, setToolsVisible] = useState(false);
  const [animationToolbarVisible, setAnimationToolbarVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // Slider value as a percentage
  const [isDragging, setIsDragging] = useState(false); // Track if the slider is being dragged
  const { t } = useTranslation(); // T function for translations

  const slides = [
    {
      src: "https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/1st.glb?v=1725631156649",
      cameraOrbit: "30deg 70deg 3m",
      cameraTarget: "2m 12m 2m",
      minOrbit: "auto auto 35m",
      minFov: "20deg",
      description: t('instruction.slides.0'), // Using translation keys
      backgroundImage:
        "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/1pic.png?v=1670265590781", // Background image URL for the first slide
     tools: [

       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%204.svg?v=1670953163342', label: '101351' },
      ],
    },
    {
      src: "https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436",
      cameraOrbit: "40deg 70deg 3m",
      cameraTarget: "-6m 10m 2m",
      minOrbit: "auto auto 40m",
      minFov: "20deg",
      description: t('instruction.slides.1'), // Using translation keys
      backgroundImage: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/2pic.png?v=1670265590116", // Background image URL for the second slide
          tools: [
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%202%20(1).svg?v=1670781334505', label: '100108' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%2010.svg?v=1670953165642', label: '100514' },
      ],
    },
    
        {
      src: "https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436",
      cameraOrbit: "214deg 72deg 3m",
      cameraTarget: "-0,04m 9,59m -2,64",
      minOrbit: "auto auto 40m",
      minFov: "20deg",
      description: t('instruction.slides.2'), // Using translation keys
      backgroundImage: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/3pic.png?v=1670265587955", // Background image URL for the second slide
          tools: [
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%202%20(1).svg?v=1670781334505', label: '100108' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%2010.svg?v=1670953165642', label: '100514' },
      ],
    },
    
        {
      src: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/5thAnim.glb?v=1670264284954",
      cameraOrbit: "113deg 75deg 3m",
      cameraTarget: "-6m 5m 14m",
      minOrbit: "auto auto 35m",
      minFov: "20deg",
      description: t('instruction.slides.3'), // Using translation keys
      backgroundImage: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/5pic.png?v=1670265588553", // Background image URL for the second slide
          tools: [
         { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%208.svg?v=1670953164890', label: '105657' },
      ],
    },
    
    
 
    
        {
      src: "https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/5th.glb?v=1725622326906",
      cameraOrbit: "108deg 65deg 3m",
      cameraTarget: "3m 7m 14m",
      minOrbit: "auto auto 22m",
      minFov: "20deg",
      description: t('instruction.slides.4'), // Using translation keys
      backgroundImage: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/6pic.png?v=1670265587394", // Background image URL for the second slide
          tools: [
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%203%20(1).svg?v=1670781338517', label: '105111' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%207.svg?v=1670781455416', label: '100829' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%206.svg?v=1670781455759', label: '100716' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%209.svg?v=1670953165258', label: '108184' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%205.svg?v=1670953163724', label: '100001' },
      ],
    },
    
        {
      src: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/BEDBlenderNoAnim.glb?v=1664801803206",
      cameraOrbit: "54.31deg 66.45deg auto",
      cameraTarget: "",
      minOrbit: "auto auto auto",
      minFov: "20deg",
      description: t('instruction.slides.5'), // Using translation keys
      backgroundImage: "https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/6pic.png?v=1670265587394", // Background image URL for the second slide
     tools: [
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%202%20(1).svg?v=1670781334505', label: '100108' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%203%20(1).svg?v=1670781338517', label: '105111' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%207.svg?v=1670781455416', label: '100829' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%206.svg?v=1670781455759', label: '100716' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%2010.svg?v=1670953165642', label: '100514' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%209.svg?v=1670953165258', label: '108184' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%208.svg?v=1670953164890', label: '105657' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%205.svg?v=1670953163724', label: '100001' },
       { imgSource: 'https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/Frame%204.svg?v=1670953163342', label: '101351' },
      ],
    },
  
  ];

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    // Hide progress bar after model loads and check if there are available animations
    const handleLoad = () => {
      const progress = modelViewer.querySelector(".progress");
      if (progress) progress.style.display = "none";

      const animToolbar = modelViewer.querySelector(".animation-Toolbar");
      setAnimationToolbarVisible(modelViewer.availableAnimations.length > 0);

      // Start syncing the slider with the animation's time
      const slider = modelViewer.querySelector(".anim-Range");
      const updateSlider = () => {
        if (!isDragging) {
          const currentTime = modelViewer.currentTime;
          const duration = modelViewer.duration;
          if (duration > 0) {
            const newValue = (currentTime / duration) * 100;
            setSliderValue(newValue); // Update React state for slider
          }
        }
          requestAnimationFrame(updateSlider); // Call updateSlider again in the next frame

      };

    
      const interval =   requestAnimationFrame(updateSlider); // Call updateSlider again in the next frame


      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    };

    // Add event listener for model load
    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
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
      <div className="assembly-Instruction px-2 pb-5" id="demo">
        <div className="header">
          <img
            src="https://cdn.glitch.global/82e9051b-34b9-4596-8cb8-f6f8421193ef/ikea.svg?v=1665664365999"
            className="header-image p-1"
            alt="IKEA Logo" // Adding alt text for accessibility
          />
          <h5>
            <p className="ps-2 btn">
              <b>{t('instruction.ikea')}</b> {t('instruction.gulliverCot')}
            </p>
          </h5>
        </div>
        <div className="viewer" >
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
  {/* Fullscreen Button */}
  <button 
    className={isFullScreen ? "exitFullscreen" : "fullScreen"} 
    onClick={isFullScreen ? exitFullscreen : openFullscreen}
  >
   
  </button>
       <div id="usedTools" className="btn3 A3d__btn" onClick={toggleTools}></div>
          
            {toolsVisible && (
              <div  >
                 <p class="usedName">{t('instruction.usedParts')}</p>
                <div id="tools" class="d-flex flex-row gap-4">
                {slides[currentSlide].tools.map((tool, index) => (
                  <div key={index} className="tool-item d-flex flex-column align-items-center">
                    <p class="text-muted small">{tool.label}</p>
                      <img src={tool.imgSource} className="img-tools" alt={tool.label} />
                   
                  </div>
                ))}
                  </div>
              </div>
            )}

            {/* Animation Toolbar */}
            {animationToolbarVisible && (
              <div className="animation-Toolbar">
                <button
                  className="A3d__btn play"
                  onClick={() => modelViewerRef.current.play()}
                ></button>
                <button
                  className="A3d__btn pause"
                  onClick={() => modelViewerRef.current.pause()}
                ></button>
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
                  className={`slide-Picture ${
                    currentSlide === index ? "selected" : ""
                  }`}
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
