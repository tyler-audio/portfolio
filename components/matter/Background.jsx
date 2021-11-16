import React, { useEffect } from 'react';
import Matter, { Body, IEventCollision } from 'matter-js';

// import MatterAttractors from 'matter-attractors';

import { createVinyl, createNote, createBeamed } from './bodies.js';


// Matter.use(MatterAttractors);

const Background = () => {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite;

    const engine = Engine.create();

  useEffect(() => {
    const bg = document.querySelector('#background');
    // bg.height = bg * 1.5;

    const render = Render.create({
      canvas: bg,
      engine: engine,
      options: {
        background: 'transparent',
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });

    // const select = function(root, selector) {
    //   return Array.prototype.slice.call(root.querySelectorAll(selector));
    // };

    // const loadSvg = (url) => {
    //   return fetch(url)
    //     .then((res) => res.text())
    //     .then((raw) => (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'));
    // };

    // setInterval(() => {
    //   const x = Math.random() * (window.innerWidth * 0.8),
    //     y = Math.random() * (window.innerHeight * 0.8);
    //   (['/images/musical-note.svg', '/images/music-note-beamed.svg', '/images/iconmonstr-disc-3.svg'])
    //     .forEach((svgPath) => {
    //       loadSvg(path.join(__dirname, svgPath))
    //         .then((root) => {
    //           const color = Common.choose(['#D8DAD3', '#A4C2A5', '#4A4A48']);

    //           const vertexSets = select(root, 'path')
    //             .map((p) => Vertices.scale(Svg.pathToVertices(p, 20), 0.3, 0.3));

    //           Composite.add(engine.world, Bodies.fromVertices(x, y, vertexSets, {
    //             render: {
    //               fillStyle: color,
    //             }
    //           }, true));
    //         });
    //     })
    // }, 750);

    // const circle = createCircle(),
    //   square = createSquare(),
    //   hexagon = createHexagon();
    // Composite.add(engine.world, [circle, hexagon, square]);
    // Composite.add(engine.world, [createNote()]);
    // console.log(createNote());

    // ================= Checks amount of bodies in composite ==================

    // setInterval(() => {
    //   console.log(Composite.allBodies(engine.world).length);
    // }, 50);

    setInterval(() => {
      Composite.add(engine.world, [createVinyl()]);
    }, 1500);

    setInterval(() => {
      Composite.add(engine.world, [createNote()]);
    }, 900);

    setInterval(() => {
      Composite.add(engine.world, [createBeamed()]);
    }, 1300);

    setInterval(() => {
      const bodies = Composite.allBodies(engine.world);
      for (let i = 0; i < bodies.length; i++) {
        if (bodies[i].position.y < 0 ) Composite.remove(engine.world, bodies[i]);
      }
    }, 5000);

    engine.gravity.y = -0.05;

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  }, []);




  return (
    <canvas id="background"></canvas>
  );
};

export default Background;