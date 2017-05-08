const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just name, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'name');
    expect(result).toEqual(['Harriet', 'Lazarus', 'Bethany']);
  });

  it('returns an array of first index, given an array of arrays', () => {
    const data = [['banana', 'apple', 'water-melon'],['potato','tomato','lemon'],['chips','drinks','burger']];
    const result = _.pluck(data, 1);
    expect(result).toEqual(['apple', 'tomato', 'drinks']);
  });

});