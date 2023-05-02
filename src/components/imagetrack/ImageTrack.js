import React, { useState } from 'react';
import './styles.css'; // path to the CSS file

function ImageTrack ({ header, images }) {
   const [mouseDownAt, setMouseDownAt] = useState(0);
   const [prevPercentage, setPrevPercentage] = useState(0);
   const [percentage, setPercentage] = useState(0);

   const handleMouseDown = e => setMouseDownAt(e.clientX);
   const handleMouseUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage);
   };
   const handleMouseMove = e => {
      if (mouseDownAt === 0) return;

      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const nextPercentageUnconstrained = parseFloat(prevPercentage) + (mouseDelta / maxDelta) * -100;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 18), -18);

      setPercentage(nextPercentage);
      track.current.animate(
         { transform: `translate(${nextPercentage}%, 0%)` },
         { duration: 1200, fill: 'forwards' }
      );

      const images = track.current.getElementsByClassName('image');
      for (const image of images) {
         image.animate(
         { objectPosition: `${100 + nextPercentage}% center` },
         { duration: 1200, fill: 'forwards' }
         );
      }
   };

   const track = React.createRef();

   return (
      <div className="image-track-container">
         <h1 className="image-track-title">{header}</h1>
         <div
         id="image-track"
         data-mouse-down-at={mouseDownAt}
         data-prev-percentage={prevPercentage}
         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
         onMouseMove={handleMouseMove}
         onTouchStart={e => handleMouseDown(e.touches[0])}
         onTouchEnd={e => handleMouseUp(e.touches[0])}
         onTouchMove={e => handleMouseMove(e.touches[0])}
         ref={track}
         >
         {images.map((image, index) => (
            <img key={index} alt={ image } className="image" src={image.url} draggable="false" />
         ))}
         </div>
      </div>
   );
}

export default ImageTrack;
