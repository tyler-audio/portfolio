import Matter, { Body, IEventCollision } from 'matter-js';

Matter.use('matter-attractors');

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Events = Matter.Events;

const engine = Engine.create();

const render = Render.create({
  element: document.querySelector('#background'),
  engine: engine,
  options: {
    wireframes: false,
    height: '100vh',
    width: '100vw',
  }
});

// engine.gravity

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);
