const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any number is even', () => {
    const nums = [2, 4, 5, 8, 9];
    expect(_.some(nums, num => num % 2 === 0)).toBe(true);
  });

  it('returns false if any array is empty', () => {
    const nums = [];
    expect(_.some(nums, num => num > 0)).toBe(false);
  });

  it('returns true if any array contains null', () => {
    const nums = [2, 4, null, 9, 8];
    expect(_.some(nums, num => num === null)).toBe(true);
  });
});