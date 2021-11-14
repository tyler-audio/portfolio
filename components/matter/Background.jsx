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
    const bg = document.querySelector('#background');
    // bg.height = bg * 1.5;

    const render = Render.create({
      canvas: bg,
      engine: engine,
      options: {
        background: '#171F23',
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });

    Composite.add(engine.world, [createCircle(), createHexagon(), createSquare()]);
    // Composite.add(engine.world, [createCircle()]);

    // ================= Checks amount of bodies in composite ==================

    // setInterval(() => {
    //   console.log(Composite.allBodies(engine.world).length);
    // }, 50);

    setInterval(() => {
      Composite.add(engine.world, [createCircle()]);
    }, 4000);

    setInterval(() => {
      Composite.add(engine.world, [createHexagon()]);
    }, 7000);

    setInterval(() => {
      Composite.add(engine.world, [createSquare()]);
    }, 9000);

    setInterval(() => {
      const bodies = Composite.allBodies(engine.world);
      for (let i = 0; i < bodies.length; i++) {
        if (bodies[i].position.y > bg.height ) Composite.remove(engine.world, bodies[i]);
      }
    }, 5000);

    engine.gravity.y = 0.05;

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  }, []);




  return (
    <canvas id="background"></canvas>
  );
};

export default Background;