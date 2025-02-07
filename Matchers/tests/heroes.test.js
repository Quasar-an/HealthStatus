import { sortHeroesByHealth } from '../src/heroes';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expectedOutput = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle empty array', () => {
    const input = [];
    const expectedOutput = [];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(expectedOutput);
  });

  test('should throw error for non-array input', () => {
    expect(() => sortHeroesByHealth(null)).toThrowError('Input must be an array');
    expect(() => sortHeroesByHealth('string')).toThrowError('Input must be an array');
    expect(() => sortHeroesByHealth({})).toThrowError('Input must be an array');
  });
});