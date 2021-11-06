import React from 'react';

import Title from './title/Title'
import Applications from './applications/Applications';
import About from './about/About';

const App = () => {
  return (
    <div id="scroll-snap-container">
      <Title />
      <Applications />
      <About />
    </div>
  );
};

export default App;