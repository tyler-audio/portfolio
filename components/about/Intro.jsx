import React from 'react';

import Picture from './Picture';

const Intro = () => {
  return (
    <div id="intro">
      <h3>Hey, I'm Tyler!</h3>
      <div id="blurb">
        <Picture />
        <p>I am a full stack software developer and audio engineer with a passion for the intersection between technology and art. Through my background in music production, I have developed strong creative intuition and a unique, versatile skill set. This perspective enables me to confidently navigate and find solutions in ambiguous situations.</p>
        <p>My initial pursuit of a career in the music industry led me to discovering the world of software engineering, where I instantly found a love for creating striking, intuitive, and innovative user interfaces. I am motivated by my ambitious nature as well as a desire to explore my passions and continue my growth both professionally and personally.</p>
        <p>When I am not coding or creating, you will find me lost in a novel or laughing and enjoying time with loved ones.</p>
      </div>
    </div>
  );
};

export default Intro;