import React, { useEffect } from 'react';

import Title from './title/Title'
import Applications from './applications/Applications';
import About from './about/About';
import Background from './matter/Background';

const App = () => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const navbar = document.querySelector('#navbar');
      if (window.scrollY !== 0) {
        navbar.classList.add('collapsed');
      } else {
        navbar.classList.remove('collapsed');
      }
    });
  }, [])

  return (
    <div id="app">
      <Title />
      <About />
      <Applications />
      <Background />
    </div>
  );
};

export default App;