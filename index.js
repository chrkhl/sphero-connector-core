const { Scanner } = require('spherov2.js');
const colorConvert = require('color-convert');

const supportedToys = [ 'SpheroMini', 'BB9E', 'LightningMcQueen', 'R2D2' ];

const isToySupported = toyType => {
  if (typeof toyType !== 'string') {
    return false;
  }

  return supportedToys.includes(toyType);
};

const isToyNameSupported = toyName => typeof toyName === 'string' && toyName.length > 0;

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

const connectLightningMcQueen = async () => {
  const toy = await Scanner.findLightningMcQueen();

  return toy ? createConnectorApi(toy) : null;
};

const connectR2D2 = async () => {
  const toy = await Scanner.findR2D2();

  return toy ? createConnectorApi(toy) : null;
};

const connectBB9E = async () => {
  const toy = await Scanner.findBB9E();

  return toy ? createConnectorApi(toy) : null;
};

const connectToy = (toyType, toyName) => {
  if (!isToySupported(toyType)) {
    throw new Error(`Toys of type '${toyType}' not supported!`);
  }

  switch (toyType) {
    case 'SpheroMini':
      return isToyNameSupported(toyName) ?
        connectSpheroMiniWithName(toyName) :
        connectSpheroMini();
    case 'BB9E':
      return connectBB9E();
    case 'LightningMcQueen':
      return connectLightningMcQueen();
    case 'R2D2':
      return connectR2D2();
    default:
      return null;
  }
};

module.exports = {
  connectSpheroMini,
  connectSpheroMiniWithName,
  connectLightningMcQueen,
  connectR2D2,
  connectBB9E,
  connectToy,
  isToySupported
};
