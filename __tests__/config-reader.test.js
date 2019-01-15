const { readConnectOnStartConfig } = require('../src/config-reader');

describe('config-reader', () => {
  describe('readConnectOnStartConfig', () => {
    it('returns null when config falsy', () => {
      const config = null;

      expect(readConnectOnStartConfig(config)).toBe(null);
    });

    it('returns null when config.connectOnStart falsy', () => {
      const config = { };

      expect(readConnectOnStartConfig(config)).toBe(null);
    });

    it('returns null when config.connectOnStart.toyType is not a string', () => {
      const config = {
        connectOnStart: {}
      };

      expect(readConnectOnStartConfig(config)).toBe(null);
    });

    it('returns null when config.connectOnStart.toyType is a string but not supported', () => {
      const config = {
        connectOnStart: {
          toyType: 'unsupported'
        }
      };

      expect(readConnectOnStartConfig(config)).toBe(null);
    });

    it('returns expected object when config.connectOnStart.toyType supported', () => {
      const config = {
        connectOnStart: {
          toyType: 'SpheroMini'
        }
      };

      const expected = {
        toyType: 'SpheroMini',
        toyName: ''
      };

      expect(readConnectOnStartConfig(config)).toEqual(expected);
    });

    it('returns expected object when config.connectOnStart.toyType supported and toyName is not a string', () => {
      const config = {
        connectOnStart: {
          toyType: 'SpheroMini',
          toyName: 666
        }
      };

      const expected = {
        toyType: 'SpheroMini',
        toyName: ''
      };

      expect(readConnectOnStartConfig(config)).toEqual(expected);
    });

    it('returns expected object when config.connectOnStart.toyType supported and toyName is a string', () => {
      const config = {
        connectOnStart: {
          toyType: 'SpheroMini',
          toyName: 'SM-0815'
        }
      };

      const expected = {
        toyType: 'SpheroMini',
        toyName: 'SM-0815'
      };

      expect(readConnectOnStartConfig(config)).toEqual(expected);
    });
  });
});
