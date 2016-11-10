export default class Element {
  setAttributes(attributes) {
    const { el } = this;

    Object.keys(attributes).forEach((attributeName) => {
      const { [attributeName]: attributeValue } = attributes;

      el.setAttribute(attributeName, attributeValue);
    });
  }

  setStyle(style) {
    const { el } = this;

    Object.keys(style).forEach((styleName) => {
      const { [styleName]: styleValue } = style;

      el.style[styleName] = styleValue;
    });
  }

  bindEvents(events) {
    const { el } = this;

    Object.keys(events).forEach((eventName) => {
      const { [eventName]: eventHandler } = events;

      el.addEventListener(eventName, (...args) => eventHandler.apply(this, args));
    });
  }

  init() {
    const { attributes, style, events, afterInit } = this;

    if (attributes) {
      this.setAttributes(attributes);
    }

    if (style) {
      this.setStyle(style);
    }

    if (events) {
      this.bindEvents(events);
    }

    if (afterInit) {
      this.afterInit();
    }
  }
}
