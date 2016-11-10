export const object = 'Object';
export const array = 'Array';
export const number = 'Number';

export function get(data) {
  const typeString = Object.prototype.toString.call(data);
  const type = typeString.slice(8, -1);

  return type;
}
