const colorConvert = require('color-convert');

const createConnectorApi = toy => ({
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
});

module.exports = {
  createConnectorApi
};
