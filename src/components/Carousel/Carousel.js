import React, { useState, useEffect } from 'react';
import imgCarousel1 from "assets/img/carousel1.jpg";
import imgCarousel2 from "assets/img/carousel2.jpg";
import imgCarousel3 from "assets/img/carousel3.jpg";

const images = [
  imgCarousel1,
  imgCarousel2,
  imgCarousel3
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Jump to a specific image based on the indicator
  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      {/* Image display */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${images[currentImage]}')` }}
      >
        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>

      {/* Left and Right Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute text-2xl ml-2 left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg z-2"
      >
        ❮  
      </button>
      <button
        onClick={nextImage}
        className="absolute text-2xl mr-2 right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg z-2"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
