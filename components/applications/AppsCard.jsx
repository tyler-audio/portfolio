import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import projectData from '../lib/projectData.js';

const AppsCard = ({ project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 4 },
    [Autoplay(
      { delay: 4000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )]
  );

  const renderImages = () => {
    const q = project === 'catwalk' ? 2 : 4;
    const images = [...Array(q).keys()];

    return (
      <div className="embla" ref={emblaRef} id={`embla-${project}`}>
        <div className="embla__container">
          {images.map((i) => (
            <div className="embla__slide" key={i}>
              <img
                src={`https://tj-portfolio-media.s3.us-west-1.amazonaws.com/${project}/${project}${i}.png`}
                key={i}
                width="200"
                height="200"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="apps-card" id={`apps-card-${project}`}>
      {renderImages()}
    </div>
  );
};

export default AppsCard;