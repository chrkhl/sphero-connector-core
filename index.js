const spheroConnector = require('./src/sphero-connector');
const validation = require('./src/validation');
const configReader = require('./src/config-reader');

module.exports = {
  ...spheroConnector,
  ...validation,
  ...configReader
};
