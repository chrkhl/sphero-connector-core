const { isToySupported, isToyNameSupported } = require('../src/validation');

describe('validation', () => {
  describe('isToySupported', () => {
    it('returns false for undefined', () => {
      expect(isToySupported(undefined)).toBe(false);
    });

    it('returns false for unsupported toy type', () => {
      expect(isToySupported('unsupported')).toBe(false);
    });

    it('returns true for "SpheroMini"', () => {
      expect(isToySupported('SpheroMini')).toBe(true);
    });

    it('returns true for "BB9E"', () => {
      expect(isToySupported('BB9E')).toBe(true);
    });

    it('returns true for "LightningMcQueen"', () => {
      expect(isToySupported('LightningMcQueen')).toBe(true);
    });

    it('returns true for "R2D2"', () => {
      expect(isToySupported('R2D2')).toBe(true);
    });
  });

  describe('isToyNameSupported', () => {
    it('returns fals for undefined', () => {
      expect(isToyNameSupported(undefined)).toBe(false);
    });

    it('returns fals for empty string', () => {
      expect(isToyNameSupported('')).toBe(false);
    });

    it('returns fals for string with length > 0', () => {
      expect(isToyNameSupported('SM-0815')).toBe(true);
    });
  });
});
