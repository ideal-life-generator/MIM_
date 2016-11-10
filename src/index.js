import App from './containers/App';
import './styles/common.scss';

const app = new App();

app.init();

app.render();

document.body.appendChild(app.el);

document.addEventListener('app.Ready', () => {
  if (navigator.splashscreen && navigator.splashscreen.hide) {
    navigator.splashscreen.hide();
  }
});
