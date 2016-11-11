import Element from './Element';

export default class Rect extends Element {
  el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
}
