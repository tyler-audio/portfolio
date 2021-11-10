import React, { useEffect } from 'react';
import Matter, { Body, IEventCollision } from 'matter-js';
// import MatterAttractors from 'matter-attractors';

import { createCircle, createHexagon, createSquare } from './bodies.js';


// Matter.use(MatterAttractors);

const Background = () => {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Events = Matter.Events;

  const engine = Engine.create();

  useEffect(() => {
    const render = Render.create({
      canvas: document.querySelector('#background'),
      engine: engine,
      options: {
        background: '#171F23',
        wireframes: false,
      }
    });

    Composite.add(engine.world, [createCircle(), createHexagon(), createSquare()]);

    // engine.gravity

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  }, []);




  return (
    <canvas id="background"></canvas>
  );
};

export default Background;