export default class Figure {
  bindEvents(events) {
    Object.keys(events).forEach((event) => {
      const [selector, eventName] = event.split(' ');
      const { components: { [selector]: component } } = this;
      const { [event]: eventHandler } = events;

      component.el.addEventListener(eventName, (...args) => eventHandler.apply(this, args));
    });
  }

  init() {
    const { events } = this;

    if (events) {
      this.bindEvents(events);
    }
  }

  setProps(props) {
    Object.assign(this.props, props);
  }

  render() {
    const { components } = this;

    Object.keys(components).forEach((componentName) => {
      const { [componentName]: component } = components;

      component.render();
    });
  }
}
