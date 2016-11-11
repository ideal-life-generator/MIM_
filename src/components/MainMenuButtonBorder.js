import Rect from '../core/Rect';

export default class MainMenuButtonBorder extends Rect {
  coords = {
    x: (window.innerWidth / 2) - 90,
    width: 180,
    rx: 0,
  };

  attributes = {
    y: 65,
    height: 50,
    'stroke-width': 3,
    fill: 'transparent',
    stroke: 'black',
  };

  render() {
    const { coords } = this;

    this.setAttributes(coords);
  }
}
