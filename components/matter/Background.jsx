import React, { useEffect } from 'react';
import Matter, { Body, IEventCollision } from 'matter-js';
import path from 'path';

// import MatterAttractors from 'matter-attractors';

import { createCircle, createHexagon, createSquare, createNote } from './bodies.js';


// Matter.use(MatterAttractors);

const Background = () => {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Events = Matter.Events,
    Svg = Matter.Svg,
    Vertices = Matter.Vertices,
    Common = Matter.Common,
    Vector = Matter.Vector;

  const engine = Engine.create();

  Matter.Common.setDecomp(require('poly-decomp'));


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

    const select = function(root, selector) {
      return Array.prototype.slice.call(root.querySelectorAll(selector));
    };

    const loadSvg = (url) => {
      return fetch(url)
        .then((res) => res.text())
        .then((raw) => (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'));
    };

    setInterval(() => {
      const x = Math.random() * (window.innerWidth * 0.8),
      y = Math.random() * (window.innerHeight * 0.8);
      (['/images/music-note.svg', '/images/music-note-beamed.svg', '/images/iconmonstr-disc-3.svg'])
        .forEach((svgPath) => {
          loadSvg(path.join(__dirname, svgPath))
            .then((root) => {
              const color = Common.choose(['#D8DAD3', '#A4C2A5', '#4A4A48']);

              const vertexSets = select(root, 'path')
              .map((p) => {
                return Vertices.scale(Svg.pathToVertices(p, 30), 4, 4);
              });
              const body = Bodies.fromVertices(x, y, vertexSets, {
                render: {
                  fillStyle: color,
                }
              });
              Composite.add(engine.world, body);
            });
        })
    }, 750);

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

    // setInterval(() => {
    //   Composite.add(engine.world, [createNote()]);
    // }, 1000);

    // setInterval(() => {
    //   Composite.add(engine.world, [createHexagon()]);
    // }, 1200);

    // setInterval(() => {
    //   Composite.add(engine.world, [createSquare()]);
    // }, 1400);

    setInterval(() => {
      const bodies = Composite.allBodies(engine.world);
      for (let i = 0; i < bodies.length; i++) {
        if (bodies[i].position.y > bg.height ) Composite.remove(engine.world, bodies[i]);
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