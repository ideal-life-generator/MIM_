export default class Figure {
  updateParams(params) {
    Object.assign(this, params);

    this.render();
  }

  render() {
    const { params, components } = this;

    Object.keys(components).forEach((componentName) => {
      const { [componentName]: component } = components;

      component.render(params);
    });
  }
}
