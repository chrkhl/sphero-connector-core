const { Scanner } = require('spherov2.js');
const connector = require('../src/sphero-connector');

jest.mock('spherov2.js', () => ({
  Scanner: {
    findSpheroMini: jest.fn(),
    findSpheroMiniByName: jest.fn(),
    findLightningMcQueen: jest.fn(),
    findR2D2: jest.fn(),
    findR2Q5: jest.fn(),
    findBB9E: jest.fn()
  }
}));

const mockFindResult = value => {
  Scanner.findSpheroMini.mockReturnValue(value);
  Scanner.findSpheroMiniByName.mockReturnValue(value);
  Scanner.findLightningMcQueen.mockReturnValue(value);
  Scanner.findR2D2.mockReturnValue(value);
  Scanner.findR2Q5.mockReturnValue(value);
  Scanner.findBB9E.mockReturnValue(value);
};

const assertConnectorApi = candidate => {
  expect(candidate).not.toBe(null);
  expect(candidate.wake).toBeInstanceOf(Function);
  expect(candidate.sleep).toBeInstanceOf(Function);
  expect(candidate.setMainLedColor).toBeInstanceOf(Function);
};

describe('sphero-connector', () => {
  beforeEach(() => {
    Scanner.findSpheroMini.mockReset();
    Scanner.findSpheroMiniByName.mockReset();
    Scanner.findLightningMcQueen.mockReset();
    Scanner.findR2D2.mockReset();
    Scanner.findR2Q5.mockReset();
    Scanner.findBB9E.mockReset();
  });

  describe('toy not found', () => {
    beforeEach(() => {
      mockFindResult(null);
    });

    test('connectSpheroMini returns null', async () => {
      const actual = await connector.connectSpheroMini();

      expect(actual).toBe(null);
    });

    test('connectSpheroMiniWithName returns null', async () => {
      const actual = await connector.connectSpheroMiniWithName();

      expect(actual).toBe(null);
    });

    test('connectLightningMcQueen returns null', async () => {
      const actual = await connector.connectLightningMcQueen();

      expect(actual).toBe(null);
    });

    test('connectR2D2 returns null', async () => {
      const actual = await connector.connectR2D2();

      expect(actual).toBe(null);
    });

    test('connectR2Q5 returns null', async () => {
      const actual = await connector.connectR2Q5();

      expect(actual).toBe(null);
    });

    test('connectBB9E returns null', async () => {
      const actual = await connector.connectBB9E();

      expect(actual).toBe(null);
    });

    test('connectToy("SpheroMini") returns null', async () => {
      const actual = await connector.connectToy('SpheroMini');

      expect(actual).toBe(null);
    });

    test('connectToy("SpheroMini", "SM-0815") returns null', async () => {
      const actual = await connector.connectToy('SpheroMini', 'SM-0815');

      expect(actual).toBe(null);
    });

    test('connectToy("BB9E") returns null', async () => {
      const actual = await connector.connectToy('BB9E');

      expect(actual).toBe(null);
    });

    test('connectToy("LightningMcQueen") returns null', async () => {
      const actual = await connector.connectToy('LightningMcQueen');

      expect(actual).toBe(null);
    });

    test('connectToy("R2D2") returns null', async () => {
      const actual = await connector.connectToy('R2D2');

      expect(actual).toBe(null);
    });

    test('connectToy("R2Q5") returns null', async () => {
      const actual = await connector.connectToy('R2Q5');

      expect(actual).toBe(null);
    });
  });

  describe('toy found', () => {
    beforeEach(() => {
      const toy = {
        wake: jest.fn(),
        sleep: jest.fn(),
        setMainLedColor: jest.fn()
      };

      mockFindResult(toy);
    });

    test('connectSpheroMini returns expected object', async () => {
      const actual = await connector.connectSpheroMini();

      assertConnectorApi(actual);
    });

    test('connectSpheroMiniWithName returns expected object', async () => {
      const actual = await connector.connectSpheroMiniWithName();

      assertConnectorApi(actual);
    });

    test('connectLightningMcQueen returns expected object', async () => {
      const actual = await connector.connectLightningMcQueen();

      assertConnectorApi(actual);
    });

    test('connectR2D2 returns expected object', async () => {
      const actual = await connector.connectR2D2();

      assertConnectorApi(actual);
    });

    test('connectR2Q5 returns expected object', async () => {
      const actual = await connector.connectR2Q5();

      assertConnectorApi(actual);
    });

    test('connectBB9E returns expected object', async () => {
      const actual = await connector.connectBB9E();

      assertConnectorApi(actual);
    });

    test('connectToy("SpheroMini") returns expected object', async () => {
      const actual = await connector.connectToy('SpheroMini');

      assertConnectorApi(actual);
    });

    test('connectToy("SpheroMini", "SM-0815") returns expected object', async () => {
      const actual = await connector.connectToy('SpheroMini', 'SM-0815');

      assertConnectorApi(actual);
    });

    test('connectToy("BB9E") returns expected object', async () => {
      const actual = await connector.connectToy('BB9E');

      assertConnectorApi(actual);
    });

    test('connectToy("LightningMcQueen") returns expected object', async () => {
      const actual = await connector.connectToy('LightningMcQueen');

      assertConnectorApi(actual);
    });

    test('connectToy("R2D2") returns expected object', async () => {
      const actual = await connector.connectToy('R2D2');

      assertConnectorApi(actual);
    });

    test('connectToy("R2Q5") returns expected object', async () => {
      const actual = await connector.connectToy('R2Q5');

      assertConnectorApi(actual);
    });

    test('connectToy throws error for unsupported toy type', async () => {
      let thrownError = null;

      try {
        await connector.connectToy();
      } catch (error) {
        thrownError = error;
      }

      expect(thrownError).not.toBe(null);
    });
  });
});
