const { createConnectorApi } = require('../src/connector-api-factory');

describe('connector-api-factory', () => {
  describe('createConnectorApi', () => {
    describe('when toy is invalid', () => {
      it('throws an error', () => {
        expect(createConnectorApi).toThrow('toy is invalid');
      });
    });

    describe('when toy is valid -> returns expected object ', () => {
      const toy = {
        wake: jest.fn(),
        sleep: jest.fn(),
        setMainLedColor: jest.fn()
      };

      beforeEach(() => {
        toy.wake.mockReset();
        toy.sleep.mockReset();
        toy.setMainLedColor.mockReset();
      });

      test('api.wake calls toy.wake', () => {
        const api = createConnectorApi(toy);

        api.wake();
        expect(toy.wake).toHaveBeenCalledTimes(1);
      });

      test('api.sleep calls toy.sleep', () => {
        const api = createConnectorApi(toy);

        api.sleep();
        expect(toy.sleep).toHaveBeenCalledTimes(1);
      });

      test('api.setMainLedColor calls toy.setMainLedColor', () => {
        const api = createConnectorApi(toy);

        api.setMainLedColor('#ACAB68');
        expect(toy.setMainLedColor).toHaveBeenCalledWith(172, 171, 104);
      });
    });
  });
});
