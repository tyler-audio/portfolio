import React from 'react';

import Navbar from './Navbar';
import TitleCard from './TitleCard';

const Title = () => {
  return (
    <section className="title_wrapper" id="title">
      <Navbar />
      <TitleCard />
    </section>
  );
};

export default Title;