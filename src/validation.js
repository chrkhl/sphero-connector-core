const supportedToys = [ 'SpheroMini', 'BB9E', 'LightningMcQueen', 'R2D2' ];

const isToySupported = toyType => {
  if (typeof toyType !== 'string') {
    return false;
  }

  return supportedToys.includes(toyType);
};

const isToyNameSupported = toyName => typeof toyName === 'string' && toyName.length > 0;

module.exports = {
  isToySupported,
  isToyNameSupported
};
