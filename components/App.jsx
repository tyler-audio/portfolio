import React from 'react';

import Navbar from './Navbar';
import Title from './title/Title'
import Applications from './applications/Applications';
import About from './about/About';
import Background from './matter/Background';

const App = () => {
  return (
    <div id="scroll-snap-container">
      <Navbar />
      <Title />
      <Applications />
      <About />
      <Background />
    </div>
  );
};

export default App;