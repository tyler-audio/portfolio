import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import path from 'path';

Matter.use(MatterAttractors);

export const createCircle = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8),
  radius = 40
) => {
  // const options = randomOption(circle.label);
  const circle = Matter.Bodies.circle(x, y, radius, {
    label: 'circle',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: 1,
    },
    render: {
      fillStyle: '#A4C2A5',
    },
  });
  circle.sound = 'pluck-04.wav';

  return circle;
}

export const createSquare = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8),
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
      group: 1,
    },
    render: {
      fillStyle: '#787876',
    },
  });

  return square;
};

export const createHexagon = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8),
  radius = 40
) => {
  const hexagon = Matter.Bodies.polygon(x, y, 6, radius, {
    label: 'hexagon',
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 0.8,
    collisionFilter: {
      group: 1,
    },
    render: {
      fillStyle: '#D8DAD3',
    },
  });

  return hexagon;
};

Matter.Common.setDecomp(require('poly-decomp'));

var select = function(root, selector) {
  return Array.prototype.slice.call(root.querySelectorAll(selector));
};

const loadSvg = (url) => {
  return fetch(url)
    .then((res) => res.text())
    .then((raw) => (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'));
};

export const createNote = (
  x = Math.random() * (window.innerWidth * 0.8),
  y = Math.random() * (window.innerHeight * 0.8)
) => {
  const svgPath = '/images/music-note.svg';
  loadSvg(path.join(__dirname, svgPath))
    .then((root) => {
      const color = Matter.Common.choose(['#D8DAD3', '#A4C2A5', '#4A4A48']);
      const vertexSets = select(root, 'path')
      .map((path) => {
        return Matter.Svg.pathToVertices(path, 30);
      });
      const body = Matter.Bodies.fromVertices(x, y, vertexSets, {
        render: {
          fillStyle: color,
        }
      });
      return body;
    });
};