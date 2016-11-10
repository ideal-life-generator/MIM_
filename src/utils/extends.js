Array.prototype.findOne = (condition) => {
  for (let i = 0; i < this.length; i += 1) {
    const item = this[i];

    if (condition(item)) {
      return item;
    }
  }

  return undefined;
};
