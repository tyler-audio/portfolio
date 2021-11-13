import React from 'react';

import Intro from './Intro';
import Links from './Links';

const About = () => {
  return (
    <section className="about_wrapper" id="about">
      <div>
        <Intro />
        <Links />
      </div>
    </section>
  );
};

export default About;