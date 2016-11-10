import Figure from '../core/Figure';
import Transform from '../core/Transform';
import MainMenuButtonBorder from '../components/MainMenuButtonBorder';
// import fps from '../utils/fps';

// const counter = fps('main-menu-button');

let state = 'normal';

export default class MainMenuButton extends Figure {
  params = {
    width: 180,
    height: 50,
    alignX: 0.5,
    alignY: 0,
    mountX: 0.5,
    transformX: 0,
    transformY: 65,
    stroke: 5,
    strokeColor: 'rgba(0, 0, 0, 1)',
    radius: 0,
  };

  states = {
    normal: {
      width: 180,
      alignX: 0.5,
      mountX: 0.5,
      x: 0,
      radius: 0,
    },
    mini: {
      width: 50,
      alignX: 0,
      mountX: 0,
      x: 15,
      radius: 1,
    },
  };

  components = {
    mainMenuButtonBorder: new MainMenuButtonBorder(),
  };

  transform = new Transform({ duration: 250 });

  events = {
    touchstart() {
      console.log('touchstart in figure');

      const { states: { [state]: previousState } } = this;

      state = state === 'normal' ? 'mini' : 'normal';

      const { states: { [state]: newState } } = this;

      this.transfrom.fromTo(previousState, newState, (params) => {
        this.updateParams(params);
      });
    },
  };

  onEmit(screen, point) {
    const {
      params: { width, height, alignX, alignY, transformX, transformY, mountX, mountY, radius },
    } = this;

    let x = 0;
    let y = 0;

    if (alignX) {
      x = alignX * screen.width;
    }

    if (alignY) {
      y = alignY * screen.height;
    }

    if (transformX) {
      x += transformX;
    }

    if (transformY) {
      y += transformY;
    }

    if (mountX) {
      x -= mountX * width;
    }

    if (mountY) {
      y -= mountY * height;
    }

    if ((x >= point.x || x <= point.x + width) && (y >= point.y || y <= point.y + height)) {
      console.log('ok');
    }

    console.log(x, y, screen, point);
  }
}
