import Element from './Element';
import Path from './Path';
import Figure from './Figure';

export default class SVG extends Element {
  el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  attachComponents(components) {
    const { el } = this;

    Object.keys(components).forEach((componentName) => {
      const { [componentName]: component } = components;

      if (component instanceof Path) {
        component.init();

        el.appendChild(component.el);
      } else if (component instanceof Figure) {
        const { components: childrenComponents } = component;

        if (childrenComponents) {
          this.attachComponents(childrenComponents);
        }
      }
    });
  }

  init() {
    super.init();

    const { el, components, attributes: { width, height } } = this;

    if (components) {
      this.attachComponents(components);
    }

    el.addEventListener('touchstart', ({ pageX: x, pageY: y }) => {
      Object.keys(components).forEach((componentName) => {
        const { [componentName]: component } = components;

        if (component instanceof Figure) {
          component.onEmit({ width, height }, { x, y });
        }
      });
    });
  }

  render() {
    const { components } = this;

    Object.keys(components).forEach((componentName) => {
      const { [componentName]: component } = components;

      component.render();
    });
  }
}
