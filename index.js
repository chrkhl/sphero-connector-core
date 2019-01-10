const { Scanner, Utils } = require('spherov2.js');
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

const connectSpheroMini = async () => {
  const toy = await Scanner.findSpheroMini();
  return toy ? createConnectorApi(toy) : null;
};

const connectSpheroMiniWithName = async name => {
  const toy = await Scanner.findSpheroMiniByName(name);
  return toy ? createConnectorApi(toy) : null;
};

module.exports = {
  connectSpheroMini,
  connectSpheroMiniWithName
};