/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectCard = ({ project, info, order }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 4 },
    [Autoplay(
      { delay: 7000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )]
  );

  if (process.browser) {
    const demo = document.querySelector(`.demo_${project}_modal`),
      overlay = document.querySelector('.demo_overlay'),
      video = document.querySelector(`.${project}_video`);

    const toggleDemo = () => {
      demo.classList.toggle('active');
      overlay.classList.toggle('active');
    }

    const stopDemo = () => {
      video.pause();
      video.currentTime = 0;
    }
  }

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
                <img className="project_image" alt={`Feature of ${info.title} project`} src={`/projects/${project}${i}.png`}/>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="project_card">
      <h2 className="title project_title">{info.title}</h2>
      <h3 className="project_tagline">{info.tagline}</h3>
      <div className={`project_media--${order} row`}>
        <div className="carousel">
          {renderImages()}
        </div>
        <div className="project_details">
          <p>{info.description}</p>
          <ul className="project_links row">
            {info.url ? <li><a href={info.url} rel="noopener noreferrer" target="_blank">Website</a></li> : null}
            <li><a href={info.github} rel="noopener noreferrer" target="_blank">Github</a></li>
            {info.hasDemo ? <li><a onClick={() => {
              if (toggleDemo) {
                toggleDemo();
              } else {
                alert('Please, try again')
              }
            }}>Demo</a></li> : null}
          </ul>
        </div>
      </div>
      {info.hasDemo ?
        <>
          <div className={`demo_${project}_modal`}>
            <video className={`${project}_video`} controls>
              <source src={`/media/${project}_demo.mp4`} type="video/mp4"/>
            </video>
          </div>
        </> :
      null
    }
    <div
      className="demo_overlay"
      onClick={() => {
        if (toggleDemo) {
          toggleDemo();
          stopDemo();
        } else {
          alert('Please, try again')
        }
      }}
    />
    </div>
  );
};

export default ProjectCard;