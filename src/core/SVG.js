import Element from './Element';
import Path from './Path';
import Rect from './Rect';
import Figure from './Figure';

export default class SVG extends Element {
  el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  attachComponents(components) {
    const { el } = this;

    Object.keys(components).forEach((componentName) => {
      const { [componentName]: component } = components;

      if (component instanceof Path || component instanceof Rect) {
        component.init();

        el.appendChild(component.el);
      } else if (component instanceof Figure) {
        const { components: childrenComponents } = component;

        component.init();

        if (childrenComponents) {
          this.attachComponents(childrenComponents);
        }
      }
    });
  }

  init() {
    super.init();

    const { components } = this;

    if (components) {
      this.attachComponents(components);
    }
  }

  render() {
    const { components } = this;

    Object.keys(components).forEach((componentName) => {
      const { [componentName]: component } = components;

      component.render();
    });
  }
}
