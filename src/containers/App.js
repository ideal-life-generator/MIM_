import SVG from '../core/SVG';
import MainMenuButton from '../containers/MainMenuButton';
// import MainButton from '../containers/MainButton';

export default class App extends SVG {
  attributes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  components = {
    mainMenuButton: new MainMenuButton(),
    // mainButton: new MainButton(),
  };
}
