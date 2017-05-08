const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the last 3 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 3)).toEqual(['a', 'b', 'c']);
  });

  it('returns the last null element of an array', () => {
    expect(_.last([null,null],1)).toEqual(null);
  });

  it('returns an empty array if you pass 0 as length', () => {
    expect(_.last(['a', 'b', 'c'], 0)).toEqual([]);
  });
});