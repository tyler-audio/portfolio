import React from 'react';

import Navbar from './Navbar';
import Title from './title/Title'
import Applications from './applications/Applications';
import About from './about/About';

const App = () => {
  return (
    <div id="scroll-snap-container">
      <Navbar />
      <Title />
      <Applications />
      <About />
    </div>
  );
};

export default App;