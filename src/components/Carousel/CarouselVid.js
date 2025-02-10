import React from 'react';

const YouTubeVideoCarousel = () => {
  const youtubeVideoId = "0nqAvMrFy4U";
  
  const youtubeParams = [
    'autoplay=1',
    'mute=1',
    'loop=1',
    'controls=0',
    'modestbranding=1',
    'rel=0',
    'disablekb=1',
    'fs=0',
    'iv_load_policy=3',
    'playlist=' + youtubeVideoId,
    'widget_referrer=https://tanjungkaryajaya.co.id'
  ].join('&');

  return (
    <>
      {/* Video Background Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* YouTube Iframe Wrapper */}
        <div className="relative h-full w-full" style={{ 
          pointerEvents: 'none' 
        }}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?${youtubeParams}`}
            className="absolute top-1/2 left-1/2 w-screen h-screen"
            style={{
              transform: 'translate(-50%, -50%) scale(1.2)',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              aspectRatio: '16/9'
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="YouTube Video Player"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      </div>
    </>
  );
};

export default YouTubeVideoCarousel;