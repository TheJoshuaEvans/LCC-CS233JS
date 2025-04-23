//? Joshua Evans - 2025-04-22
import score from './score.js';

describe('score', () => {
  it('should correctly score several pre-set examples', async () => {
    let result = score([1, 1, 5]);
    expect(result).toBe(250);

    result = score([1, 1]);
    expect(result).toBe(200);

    result = score([1, 6, 6, 6]);
    expect(result).toBe(700);

    result = score([2, 3, 3, 4, 6, 6]);
    expect(result).toBe(0);

    result = score([3, 3, 3]);
    expect(result).toBe(300);

    result = score([1]);
    expect(result).toBe(100);

    result = score([5]);
    expect(result).toBe(50);

    result = score([3, 3, 3, 1, 5]);
    expect(result).toBe(450);

    result = score([1, 1, 1]);
    expect(result).toBe(1000);

    result = score([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(3000);
  });

  it('should handle core rules', async () => {
    let result = score([1]);
    expect(result).toBe(100);

    result = score([5]);
    expect(result).toBe(50);

    result = score([1, 1, 1]);
    expect(result).toBe(1000);

    result = score([2, 2, 2]);
    expect(result).toBe(200);

    result = score([3, 3, 3]);
    expect(result).toBe(300);

    result = score([4, 4, 4]);
    expect(result).toBe(400);

    result = score([5, 5, 5]);
    expect(result).toBe(500);

    result = score([6, 6, 6]);
    expect(result).toBe(600);
  });

  it('should handle combos with core rules', async () => {
    let result = score([1, 1, 5]);
    expect(result).toBe(250);

    result = score([1, 1, 1, 3, 3, 3]);
    expect(result).toBe(1300);

    result = score([1, 1, 1, 2, 2, 2]);
    expect(result).toBe(1200);

    result = score([5, 5, 5, 5, 5]);
    expect(result).toBe(600);
  });

  it('should handle extended rules', async () => {
    // Straight
    let result = score([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(3000);

    // Three pairs
    result = score([1, 1, 2, 2, 3, 3]);
    expect(result).toBe(1500);

    result = score([1, 1, 1, 1, 2, 2]);
    expect(result).toBe(1500);
  });

  it('should throw an error if there are too many dice values', async () => {
    expect(() => score([1, 1, 1, 1, 1, 1, 1])).toThrow();
  });

  it('should throw an error if invalid dice value is provided', async () => {
    expect(() => score([1, 1, 1, 1, 7, 1, 1])).toThrow();
  });
});
