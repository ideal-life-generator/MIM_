import Element from './Element';

const mathX = (cx, radius) => angle => cx + (Math.cos(angle) * radius);
const mathY = (cy, radius) => angle => cy + (Math.sin(angle) * radius);

export default class Path extends Element {
  el = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  setProps(props) {
    Object.assign(this.props, props);

    // this.render();
  }

  bezierLine = (fromX, fromY, toX, toY) => [fromX, fromY, fromX, fromY, toX, toY, toX, toY];

  roundBezierAngleStepCurve = (radius, sides, cx, cy, fromAngle, toAngle) => {
    const bezierRound = (4 / 3) * Math.tan(Math.PI / (2 * sides));
    const bezierRoundAngle = Math.tanh((bezierRound * radius) / radius);
    const bezierPointRadius = Math.sqrt(Math.pow(radius, 2) + Math.pow(radius * bezierRound, 2));

    const getX = mathX(cx, radius);
    const getY = mathY(cy, radius);
    const fromVariableGetX = mathX(cx, bezierPointRadius);
    const fromVariableGetY = mathY(cy, bezierPointRadius);

    const fromX = getX(fromAngle);
    const fromY = getY(fromAngle);
    const toX = getX(toAngle);
    const toY = getY(toAngle);

    const fromVariableX = fromVariableGetX(fromAngle + bezierRoundAngle);
    const fromVariableY = fromVariableGetY(fromAngle + bezierRoundAngle);
    const toVariableX = fromVariableGetX(toAngle - bezierRoundAngle);
    const toVariableY = fromVariableGetY(toAngle - bezierRoundAngle);

    return [fromX, fromY, fromVariableX, fromVariableY, toVariableX, toVariableY, toX, toY];
  }

  bezierStepCircleSetup = (defaultRadius, defaultCx, defaultCy, defaultSides, startAngle) => (
    step,
    radius = defaultRadius,
    sides = defaultSides,
    cx = defaultCx,
    cy = defaultCy,
    optionalFromAngle,
    optionalFoAngle,
  ) => {
    const stepAngle = (2 * Math.PI) / sides;
    const fromAngle = optionalFromAngle || startAngle + (stepAngle * step);
    const toAngle = optionalFoAngle || fromAngle + stepAngle;

    return this.roundBezierAngleStepCurve(radius, sides, cx, cy, fromAngle, toAngle);
  };
}

// http://jsfiddle.net/AbdiasSoftware/8MYyg/
