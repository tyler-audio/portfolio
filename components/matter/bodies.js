import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';

Matter.use(MatterAttractors);

/**
 * SHAPES
 * - circles : plucks : music notes + beamed notes
 * - squares : chords : guitar
 * - hexagons : drones : piano / synth
 * SWAP SHAPES FOR MUSIC NOTE SVGs?
 */

export const createCircle = (
  x = 400,
  y = 200,
  radius = 40
) => {
  const circle = Matter.Bodies.circle(x, y, radius, {
    label: 'circle',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: -1,
    },
    render: {
      fillStyle: '#84A98C',
    },
  });
  return circle;
}

export const createSquare = (
  x = 600,
  y = 200,
  width = 70,
  height = 70
) => {
  const square = Matter.Bodies.rectangle(x, y, width, height, {
    label: 'square',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: -3,
    },
    render: {
      fillStyle: '#52796F ',
    },
  });

  return square;
};

export const createHexagon = (
  x = 200,
  y = 200,
  radius = 40
) => {
  const hexagon = Matter.Bodies.polygon(x, y, 6, radius, {
    label: 'hexagon',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: -2,
    },
    render: {
      fillStyle: '#354F52',
    },
  });

  return hexagon;
};

// export const createTitle = () => {};

// export const createAppCard = () => {};

// export const createAbout = () => {};

// export const createLinks = () => {};