//* Joshua Evans - 2025-04-19
import getDiceCounts from './get-dice-counts.js';

describe('get-dice-counts', function() {
  it('should get some dice counts', async () => {
    let result = getDiceCounts([1, 1, 5]);
    expect(result).toEqual({1: 2, 2: 0, 3: 0, 4: 0, 5: 1, 6: 0});

    result = getDiceCounts([1, 1]);
    expect(result).toEqual({1: 2, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});

    result = getDiceCounts([1, 6, 6, 6]);
    expect(result).toEqual({1: 1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 3});

    result = getDiceCounts([2, 3, 3, 4, 6, 6]);
    expect(result).toEqual({1: 0, 2: 1, 3: 2, 4: 1, 5: 0, 6: 2});

    result = getDiceCounts([4, 5, 2, 3, 1, 6]);
    expect(result).toEqual({1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1});
  });

  it('should count pairs correctly', async () => {
    let result = getDiceCounts([1, 1, 2, 2, 3, 3]);
    expect(result.countPairs()).toEqual({1: 1, 2: 1, 3: 1, 4: 0, 5: 0, 6: 0});

    result = getDiceCounts([1, 1, 1, 1, 3, 3]);
    expect(result.countPairs()).toEqual({1: 2, 2: 0, 3: 1, 4: 0, 5: 0, 6: 0});

    result = getDiceCounts([1, 1, 1, 1, 1, 1]);
    expect(result.countPairs()).toEqual({1: 2, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});

    result = getDiceCounts([1, 1]);
    expect(result.countPairs()).toEqual({1: 1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
  });

  it('should total pairs correctly', async () => {
    let result = getDiceCounts([1, 1, 2, 2, 3, 3]);
    expect(result.getTotalPairs()).toEqual(3);

    result = getDiceCounts([1, 1, 1, 1, 3, 3]);
    expect(result.getTotalPairs()).toEqual(3);

    result = getDiceCounts([1, 1, 1, 1, 1, 1]);
    expect(result.getTotalPairs()).toEqual(2);

    result = getDiceCounts([1, 1]);
    expect(result.getTotalPairs()).toEqual(1);
  });

  it('should detect straights correctly', async () => {
    const result = getDiceCounts([1, 2, 3, 4, 5, 6]);
    expect(result.containsStraight()).toEqual(true);
  });
});
