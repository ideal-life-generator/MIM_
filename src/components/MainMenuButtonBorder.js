import Path from '../core/Path';

const startX = 0;
const startY = 0;

const width = 150;
const height = 50;

const radius = height / 2;
const doubleRadius = radius * 2;
const outside = Math.sqrt(2) - 1;
const diference = Math.sqrt(Math.pow(outside * radius, 2) / 2);

const corner = Math.sqrt(Math.pow(radius, 2) + Math.pow(radius, 2), 2);

const n = (4 / 3) * Math.tan(Math.PI / 8);

function pointOnVector(startCoord, endCoord, range) {
  const result = startCoord + ((endCoord - startCoord) * range);

  return result;
}

export default class MainMenuButtonBorder extends Path {
  coords = [
    [startX, startY, startX, startY, startX + width, startY, startX + width, startY],
    [startX + width, startY, startX + width, startY, startX + width, startY + height, startX + width, startY + height],
    [startX + width, startY + height, startX + width, startY + height, startX, startY + height, startX, startY + height],
    [startX, startY + height, startX, startY + height, startX, startY, startX, startY],
  ];

  states = {
    normal: [
      [startX, startY, startX, startY, startX + width, startY, startX + width, startY],
      [startX + width, startY, startX + width, startY, startX + width, startY + height, startX + width, startY + height],
      [startX + width, startY + height, startX + width, startY + height, startX, startY + height, startX, startY + height],
      [startX, startY + height, startX, startY + height, startX, startY, startX, startY],
    ],
    mini: [
      [
        startX + diference, startY + diference,
        startX + pointOnVector(diference, radius, n), startY + pointOnVector(diference, radius - corner, n),
        startX + pointOnVector((radius * 2) - diference, radius, n), startY + pointOnVector(diference, radius - corner, n),
        startX + ((radius * 2) - diference), startY + diference,
      ],
      [
        startX + (doubleRadius - diference), startY + diference,
        startX + pointOnVector(doubleRadius - diference, radius + corner, n), startY + pointOnVector(diference, radius, n),
        startX + pointOnVector(doubleRadius - diference, radius + corner, n), startY + pointOnVector(doubleRadius - diference, radius, n),
        startX + (doubleRadius - diference), startY + (doubleRadius - diference),
      ],
      [
        startX + (doubleRadius - diference), startY + (doubleRadius - diference),
        startX + pointOnVector(doubleRadius - diference, radius, n), startY + pointOnVector(doubleRadius - diference, radius + corner, n),
        startX + pointOnVector(diference, radius, n), startY + pointOnVector(doubleRadius - diference, radius + corner, n),
        startX + diference, startY + (doubleRadius - diference),
      ],
      [
        startX + diference, startY + (doubleRadius - diference),
        startX + pointOnVector(diference, radius - corner, n), startY + pointOnVector(doubleRadius - diference, radius, n),
        startX + pointOnVector(diference, radius - corner, n), startY + pointOnVector(diference, radius, n),
        startX + diference, startY + diference,
      ],
    ],
  }

  style = {
    fill: 'red',
    stroke: '#1d1d1b',
    'stroke-width': 5,
  }

  toMini(stage) {
    this.states.normal.forEach((previousCoords, previousStateIndex) => {
      previousCoords.forEach((previousCoord, previousCoordIndex) => {
        const newCoord = this.states.mini[previousStateIndex][previousCoordIndex];

        this.coords[previousStateIndex][previousCoordIndex] = previousCoord + ((newCoord - previousCoord) * stage);
      });
    });

    this.render();
  }

  toNormal(stage) {
    this.states.mini.forEach((previousCoords, previousStateIndex) => {
      previousCoords.forEach((previousCoord, previousCoordIndex) => {
        const newCoord = this.states.normal[previousStateIndex][previousCoordIndex];

        this.coords[previousStateIndex][previousCoordIndex] = previousCoord + ((newCoord - previousCoord) * stage);
      });
    });

    this.render();
  }

  render(params) {
    const { el, coords } = this;

    console.log(params);

    el.setAttribute('d', `
      M ${coords[0][0]} ${coords[0][1]}
      C ${coords[0][2]} ${coords[0][3]} ${coords[0][4]} ${coords[0][5]} ${coords[0][6]} ${coords[0][7]}
      M ${coords[1][0]} ${coords[1][1]}
      C ${coords[1][2]} ${coords[1][3]} ${coords[1][4]} ${coords[1][5]} ${coords[1][6]} ${coords[1][7]}
      M ${coords[2][0]} ${coords[2][1]}
      C ${coords[2][2]} ${coords[2][3]} ${coords[2][4]} ${coords[2][5]} ${coords[2][6]} ${coords[2][7]}
      M ${coords[3][0]} ${coords[3][1]}
      C ${coords[3][2]} ${coords[3][3]} ${coords[3][4]} ${coords[3][5]} ${coords[3][6]} ${coords[3][7]}
      Z
    `);
  }

  events = {
    touchstart() {
      console.log('border path');
    },
  };
}
