const colorConvert = require('color-convert');

const isToyValid = toy => typeof toy === 'object' &&
  typeof toy.wake === 'function' &&
  typeof toy.sleep === 'function' &&
  typeof toy.setMainLedColor === 'function';

const createConnectorApi = toy => {
  if (!isToyValid(toy)) {
    throw new Error('toy is invalid');
  }

  return {
    wake: () => {
      toy.wake();
    },
    sleep: () => {
      toy.sleep();
    },
    setMainLedColor: hexColor => {
      const [ red, green, blue ] = colorConvert.hex.rgb(hexColor);

      toy.wake();
      toy.setMainLedColor(red, green, blue);
    }
  };
};

module.exports = {
  createConnectorApi
};
