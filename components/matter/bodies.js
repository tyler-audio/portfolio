import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';

Matter.use(MatterAttractors);

const options = ['mint', 'lite', 'drk'];
const selectOption = () => {
  return Matter.Common.choose(options);
};

export const createVinyl = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8),
) => {
  const vinyl = Matter.Bodies.circle(x, y, 51.2, {
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
        xScale: 0.2,
        yScale: 0.2,
      },
    },
  });

  return vinyl;
}

export const createNote = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8),
) => {
  const note = Matter.Bodies.rectangle(x, y, 102.4, 102.4, {
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
        xScale: 0.2,
        yScale: 0.2,
      }
    },
  });

  return note;
};

export const createBeamed = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8),
) => {
  const beamed = Matter.Bodies.rectangle(x, y, 102.4, 102.4, {
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
        xScale: 0.2,
        yScale: 0.2,
      }
    },
  });

  return beamed;
};