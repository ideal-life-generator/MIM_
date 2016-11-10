import Path from '../core/Path';
import fps from '../utils/fps';

const counter = fps('main-button');

export default class MainButtonIcon extends Path {
  coords = [
    [42.5, 42.5],
    [67.5, 55],
    [67.5, 80],
    [42.5, 92.5],
    [67.5, 55],
    [92.5, 67.5],
    [92.5, 67.5],
    [67.5, 80],
  ];

  states = {
    play: [
      [42.5, 42.5],
      [67.5, 55],
      [67.5, 80],
      [42.5, 92.5],
      [67.5, 55],
      [92.5, 67.5],
      [92.5, 67.5],
      [67.5, 80],
    ],
    pause: [
      [42.5, 42.5],
      [60, 42.5],
      [60, 92.5],
      [42.5, 92.5],
      [75, 42.5],
      [92.5, 42.5],
      [92.5, 92.5],
      [75, 92.5],
    ],
  };

  render() {
    const { el, coords } = this;

    el.setAttribute('d', `
      M ${coords[0][0]} ${coords[0][1]}
      L ${coords[1][0]} ${coords[1][1]}
      L ${coords[2][0]} ${coords[2][1]}
      L ${coords[3][0]} ${coords[3][1]}
      L ${coords[0][0]} ${coords[0][1]},
      M ${coords[4][0]} ${coords[4][1]}
      L ${coords[5][0]} ${coords[5][1]}
      L ${coords[6][0]} ${coords[6][1]}
      L ${coords[7][0]} ${coords[7][1]}
      L ${coords[4][0]} ${coords[4][1]}
      z
    `);

    counter();
  }
}
