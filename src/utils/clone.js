import { get, object, array } from './type';

export default function clone(data) {
  const dataType = get(data);

  switch (dataType) {
    case object: {
      const result = {};
      const keys = Object.keys(data);

      keys.forEach((key) => {
        const value = data[key];

        result[key] = clone(value);
      });

      return result;
    }
    case array: {
      const result = [];

      data.forEach((value, index) => {
        result[index] = clone(value);
      });

      return result;
    }
    default: {
      return data;
    }
  }
}
