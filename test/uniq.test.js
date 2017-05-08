const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5];
    expect(_.uniq(nums)).toEqual([2, 4, 5]);
  });

  it('de-dups a list of strings', () => {
    const nums = ['abc','xyz', 'rst', 'abc', 'xyz'];
    expect(_.uniq(nums)).toEqual(['abc','xyz', 'rst']);
  });
});