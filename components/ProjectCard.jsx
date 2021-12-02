import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectCard = ({ project, info }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 4 },
    [Autoplay(
      { delay: 5000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )]
  );

  const renderImages = () => {
    const images = [...Array(info.photos).keys()];

    return (
      <div
        className="embla carousel"
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
      <h3>{info.title}</h3>
      <h5>{info.tagline}</h5>
      <div>
        {renderImages()}
        <div>
          <p>{info.description}</p>
          <menu>
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