import pad from './pad.js';

describe('pad', function() {
  it('should pad a number to two digits as default', async () => {
    const input = 5;
    const expected = '05';

    const result = pad(input);
    expect(result).toBe(expected);
  });

  it('should allow a number of digits to be set', async () => {
    const input = 5;
    const expected = '00005';

    const result = pad(input, 5);
    expect(result).toBe(expected);
  });
});
