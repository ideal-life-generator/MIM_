import Figure from '../core/Figure';
import Transform from '../core/Transform';
import MainMenuButtonBorder from '../components/MainMenuButtonBorder';
// import fps from '../utils/fps';

// const counter = fps('main-menu-button');

export default class MainMenuButton extends Figure {
  components = {
    mainMenuButtonBorder: new MainMenuButtonBorder(),
  };

  transform = new Transform({ duration: 250 });

  events = {
    'mainMenuButtonBorder touchstart': () => {
      const {
        components: {
          mainMenuButtonBorder,
          mainMenuButtonBorder: {
            props: { stateName },
          },
        },
        transfrom,
      } = this;

      mainMenuButtonBorder.setProps({
        previousStateName: stateName,
        stateName: stateName === 'normal' ? 'icon' : 'normal',
      });

      transfrom.start((stage) => {
        mainMenuButtonBorder.setProps({ stage });
      });
    },
  };
}
