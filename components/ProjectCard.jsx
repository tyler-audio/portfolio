import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectCard = ({ project, info, order }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 4 },
    [Autoplay(
      { delay: 5000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )]
  );
  useEffect(() => {
    if (order % 2 !== 0) {
      const projectMedia = document.querySelector(`.project_media--${order}`);
      projectMedia.classList.add('reverse');
    }
  })

  const renderImages = () => {
    const images = [...Array(info.photos).keys()];

    return (
      <div
        className="embla"
        ref={emblaRef}
      >
        <div className="embla__container">
          {images.map((i) => (
            <div className="embla__slide" key={i}>
                <img className="project_image" src={`/projects/${project}${i}.png`}/>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="project_card">
      <h3 className="title project_title">{info.title}</h3>
      <h5 className="project_tagline">{info.tagline}</h5>
      <div className={`row project_media--${order}`}>
        <div className="carousel">
          {renderImages()}
        </div>
        <div className="project_details">
          <p>{info.description}</p>
          <menu className="project_links row">
            {info.url ? <li><a href={info.url}>Website</a></li> : null}
            <li><a href={info.github}>Github</a></li>
            {info.hasDemo ? <li><a href="/projects">Demo</a></li> : null}
          </menu>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;