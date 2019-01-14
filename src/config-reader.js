const { isToySupported } = require('./validation');

const readConnectOnStartConfig = config => {
  if (!config) {
    console.warn(`config is invalid (not an object)`);

    return null;
  }

  const connectOnStart = config.connectOnStart;

  if (typeof connectOnStart !== 'object') {
    console.warn(`connectOnStart is invalid (not an object)`);

    return null;
  }

  if (typeof connectOnStart.toyType !== 'string') {
    console.warn(`connectOnStart.toyType is invalid (not a string)`);

    return null;
  }

  if (!isToySupported(connectOnStart.toyType)) {
    console.warn(`connectOnStart.toyType with value '${connectOnStart.toyType}' not supported`);

    return null;
  }

  return {
    toyType: connectOnStart.toyType,
    toyName: typeof connectOnStart.toyName === 'string' ? connectOnStart.toyName : ''
  };
};

module.exports = {
  readConnectOnStartConfig
};
