import React, { useEffect } from 'react';
import Matter, { Body, IEventCollision } from 'matter-js';
// import MatterAttractors from 'matter-attractors';


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
      element: document.querySelector('#background'),
      engine: engine,
      options: {
        wireframes: false,
      }
    });

    // engine.gravity

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  }, [Composite, Engine, Events, Render, Runner, engine]);




  return (
    <canvas id="background" width="500" height="500"></canvas>
  );
};

export default Background;