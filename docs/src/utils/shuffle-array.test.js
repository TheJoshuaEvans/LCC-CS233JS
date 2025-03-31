import shuffleArray from './shuffle-array.js';

describe('shuffle-array', function() {
  it('should shuffle an array once', async () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = shuffleArray(input);

    // The returned array should not be the same as the provided array
    expect(result).not.toEqual(input);

    // The returned array should not be in the same order as the provided array, but the same length
    expect(result).toHaveLength(input.length);
    expect(result).not.toMatchObject(input);

    // The returned array should contain the same elements as the provided array
    expect(result).toEqual(expect.arrayContaining(input));
  });

  it('should be very random over multiple runs', async () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = [];

    for (let i=0; i<10; i++) {
      const result = shuffleArray(input);

      // Should not match the input
      expect(result).toHaveLength(input.length);
      expect(result).not.toMatchObject(input);

      // Check each previously found result to ensure it does not match the current result
      results.forEach((existingResult) => {
        // Should not match the current result
        expect(result).toHaveLength(existingResult.length);
        expect(result).not.toMatchObject(existingResult);
      });
    }
  });
});
