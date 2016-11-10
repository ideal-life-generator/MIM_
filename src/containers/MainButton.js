import SVG from '../core/SVG';
import MainButtonIcon from '../components/MainButtonIcon';
import MainButtonShape from '../components/MainButtonShape';

const state = {
  mainButton: 'play',
};

export default class MainButton extends SVG {
  mainButtonShape = new MainButtonShape();
  mainButtonIcon = new MainButtonIcon();

  attributes = {
    width: 135,
    height: 135,
  };

  style = {
    position: 'absolute',
    left: '50%',
    marginLeft: '-67.5px',
    bottom: '55px',
  };

  events = {
    touchstart() {
      const { mainButtonIcon } = this;
      const { mainButton: previousState } = state;

      switch (state.mainButton) {
        case 'play': {
          state.mainButton = 'pause';

          break;
        }
        case 'pause': {
          state.mainButton = 'play';

          break;
        }
        default: {
          state.mainButton = 'play';
        }
      }

      mainButtonIcon.fromStateToState(previousState, state.mainButton, 200);
    },
  };

  afterInit() {
    const { el, mainButtonShape, mainButtonIcon } = this;

    el.appendChild(mainButtonShape.el);
    el.appendChild(mainButtonIcon.el);
  }

  render() {
    const { mainButtonShape, mainButtonIcon } = this;

    mainButtonShape.render();
    mainButtonIcon.render();
  }
}
