import Path from '../core/Path';

export default class MainButtonShape extends Path {
  render() {
    const { el } = this;

    el.setAttribute('d', `
      M 135 67.5
      c 0 37.3-30.2 67.5-67.5 67.5
      S 0 104.8 0 67.5
      S 30.2 0 67.5 0
      S 135 30.2 135 67.5
      z
      M 67.5 2.5
      c -35.9 0-65 29.1-65 65
      s 29.1 65 65 65
      s 65-29.1 65-65
      S 103.4 2.5 67.5 2.5
      z
    `);
  }
}
