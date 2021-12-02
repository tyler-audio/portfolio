import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import Link from 'next/link';

import projectData from '../lib/projectData.js';

const AppsCard = ({ project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 4 },
    [Autoplay(
      { delay: 5000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )]
  );

  const renderImages = () => {
    const q = project === 'catwalk' ? 2 : 4;
    const images = [...Array(q).keys()];

    return (
      <div
        className="embla"
        ref={emblaRef}
        id={`embla-${project}`}
      >
        <div className="embla__container">
          {images.map((i) => (
            <div className="embla__slide" key={i}>
                <img className="app_image" src={`/projects/${project}${i}.png`} key={i}/>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className="apps_card"
      id={`apps_card_${project}`}
      onMouseEnter={(e) => {
        const projectInfo = document.querySelector(`.project_info-${project}`);
        const embla = document.querySelector(`#embla-${project}`);

        embla.classList.add('active');
        projectInfo.classList.remove('hidden');
      }}
      onMouseLeave={(e) => {
        const projectInfo = document.querySelector(`.project_info-${project}`);
        const embla = document.querySelector(`#embla-${project}`);

        embla.classList.remove('active');
        projectInfo.classList.add('hidden');

      }}
    >
      <Link href={projectData[project].github} passHref={true}>
        <a
          className={`project_info-${project} hidden`}
          target="_blank"
          onClick={(e) => {
            console.log(e.target);
          }}
        >
          <div className="app_card--title">{project}</div>
          <p className="app_tagline">{projectData[project].tagline}</p>
        </a>
      </Link>
      {renderImages()}
    </div>
  );
};

export default AppsCard;