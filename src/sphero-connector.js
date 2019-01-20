const { Scanner } = require('spherov2.js');
const { createConnectorApi } = require('./connector-api-factory');
const { isToySupported, isToyNameSupported } = require('./validation');

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

const connectR2Q5 = async () => {
  const toy = await Scanner.findR2Q5();

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
    case 'R2Q5':
      return connectR2Q5();
    /* istanbul ignore next */
    default:
      return null;
  }
};

module.exports = {
  connectSpheroMini,
  connectSpheroMiniWithName,
  connectLightningMcQueen,
  connectR2D2,
  connectR2Q5,
  connectBB9E,
  connectToy
};
