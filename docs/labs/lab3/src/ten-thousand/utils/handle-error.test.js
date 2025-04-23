//? Joshua Evans - 2025-04-22
import handleError from './handle-error.js';

describe('handle-error', function() {
  it('should handle some error', async () => {
    const messageString = 'Test error';
    let cbCalled = false;

    const method = () => {
      throw new Error(messageString);
    };
    const cb = (message) => {
      cbCalled = true;
      expect(message).toBe(messageString);
    };

    const result = handleError(method, cb);
    expect(result).toBeNull();
    expect(cbCalled).toBe(true);
  });
});
