import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';

Matter.use(MatterAttractors);

const options = ['mint', 'lite', 'drk'];
const selectOption = () => {
  return Matter.Common.choose(options);
};

const rotateBody = (body) => {
  Matter.Body.rotate(body, Math.random() * 360);
};

export const createVinyl = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = window.innerHeight + 150,
) => {
  const vinyl = Matter.Bodies.circle(x, y, 25.6, {
    label: 'vinyl',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: 1,
    },
    render: {
      sprite: {
        texture: `/images/vinyl-${selectOption()}.png`,
        xScale: 0.1,
        yScale: 0.1,
      },
    },
  });

  rotateBody(vinyl)
  return vinyl;
}

export const createNote = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = window.innerHeight + 150,
) => {
  const note = Matter.Bodies.rectangle(x, y, 51.2, 51.2, {
    label: 'note',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: 1,
    },
    render: {
      sprite: {
        texture: `/images/music-note-${selectOption()}.png`,
        xScale: 0.1,
        yScale: 0.1,
      }
    },
  });

  // rotateBody(note);
  return note;
};

export const createBeamed = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = window.innerHeight + 150,
) => {
  const beamed = Matter.Bodies.rectangle(x, y, 51.2, 51.2, {
    label: 'beamed',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: 1,
    },
    render: {
      sprite: {
        texture: `/images/music-beam-${selectOption()}.png`,
        xScale: 0.1,
        yScale: 0.1,
      }
    },
  });

  // rotateBody(beamed);
  return beamed;
};