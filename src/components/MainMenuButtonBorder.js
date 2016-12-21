import clone from 'clone';
import Path from '../core/Path';

const params = {
  normal: {
    width: 180,
    height: 45,
  },
};

export default class MainMenuButtonBorder extends Path {
  normal = {
    cx: window.innerWidth / 2,
    cy: 65 + this.height,
    width: params.normal.width,
    height: params.normal.height,
  };

  mini = {
    radius: 22.5,
    cx: this.miniX + this.radius,
    cy: this.miniY + this.radius,
    startAngle: Math.PI * (3 / 4),
    sides: 4,
  };

  helpers = {
    halfWidth: this.normal.width / 2,
    halfHeight: this.normal.height / 2,
  };

  bezierStepCircle = this.bezierStepCircleSetup(this.radius, this.miniCx, this.miniCy, this.sides, this.startAngle);

  states = {
    normal: [
      this.bezierLine(this.normal.cx - (this.normal.width / 2), this.normalY + this.height, this.normalX, this.normalY),
      this.bezierLine(this.normalX, this.normalY, this.normalX + this.normalWidth, this.normalY),
      this.bezierLine(this.normalX + this.normalWidth, this.normalY, (this.normalX + this.normalWidth) - 10, this.normalY + this.height),
      this.bezierLine(this.normalX + this.normalWidth, this.normalY + this.height, this.normalX - 10, this.normalY + this.height),
    ],
    mini: [
      this.bezierStepCircle(0),
      this.bezierStepCircle(1),
      this.bezierStepCircle(2),
      this.bezierStepCircle(3),
    ],
  };

  coords = clone(this.states.normal);

  attributes = {
    fill: 'transparent',
    stroke: '#FFFFFF',
    'stroke-width': 1.5,
  };

  render() {
    console.log(this);

    const { el, coords } = this;

    el.setAttribute('d', `
      M ${coords[0][0]} ${coords[0][1]}
      C ${coords[0][2]} ${coords[0][3]} ${coords[0][4]} ${coords[0][5]} ${coords[0][6]} ${coords[0][7]}
      C ${coords[1][2]} ${coords[1][3]} ${coords[1][4]} ${coords[1][5]} ${coords[1][6]} ${coords[1][7]}
      C ${coords[2][2]} ${coords[2][3]} ${coords[2][4]} ${coords[2][5]} ${coords[2][6]} ${coords[2][7]}
      C ${coords[3][2]} ${coords[3][3]} ${coords[3][4]} ${coords[3][5]} ${coords[3][6]} ${coords[3][7]}
    `);
  }
}
