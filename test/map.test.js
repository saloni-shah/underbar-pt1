_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every numbers in an array of numbers to their cube', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el * el);
    expect(mappedArr).toEqual([1, 8, 27, 64, 125]);
  });

  it('maps every numbers in an array of numbers to decrement by 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el - 1);
    expect(mappedArr).toEqual([0, 1, 2, 3, 4]);
  });
});