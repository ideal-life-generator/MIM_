import Figure from '../core/Figure';
import Transform from '../core/Transform';
import MainMenuButtonBorder from '../components/MainMenuButtonBorder';
import fps from '../utils/fps';

const counter = fps('main-menu-button');

export default class MainMenuButton extends Figure {
  props = {
    previousState: null,
    state: 'normal',
  };

  components = {
    mainMenuButtonBorder: new MainMenuButtonBorder(),
  };

  transform = new Transform({ duration: 250 });

  events = {
    'mainMenuButtonBorder touchstart': () => {
      let { props: { state } } = this;
      const { transform } = this;

      const previousState = state;
      state = state === 'normal' ? 'mini' : 'normal';

      const {
        components: {
          mainMenuButtonBorder: {
            coords,
            states: {
              [previousState]: previousBorderState,
              [state]: nextBorderState,
            },
          },
        },
      } = this;

      this.setProps({ previousState, state });

      transform.start((stage) => {
        previousBorderState.forEach((previousCoords, previousStateIndex) => {
          previousCoords.forEach((previousCoord, previousCoordIndex) => {
            const newCoord = nextBorderState[previousStateIndex][previousCoordIndex];

            coords[previousStateIndex][previousCoordIndex] = previousCoord + ((newCoord - previousCoord) * stage);
          });
        });

        this.render();

        counter();
      });
    },
  };
}
