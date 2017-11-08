import { removeItemFromItems } from '../'

const exampleItems = [
    { id: 1, content: 'Call mum' },
    { id: 2, content: 'Buy cat food' },
    { id: 3, content: 'Water the plants' },
];

it('can remove the first item by id', () => {
  expect(removeItemFromItems(exampleItems, 1)).toEqual([
      { id: 2, content: 'Buy cat food' },
      { id: 3, content: 'Water the plants' },
  ]);
});

it('can remove the second item by id', () => {
  expect(removeItemFromItems(exampleItems, 2)).toEqual([
      { id: 1, content: 'Call mum' },
      { id: 3, content: 'Water the plants' },
  ]);
});

it('can remove the third  item by id', () => {
  expect(removeItemFromItems(exampleItems, 3)).toEqual([
      { id: 1, content: 'Call mum' },
      { id: 2, content: 'Buy cat food' },
  ]);
});

it('removing an item which does not exist returns the same list', () => {
  expect(removeItemFromItems(exampleItems, 4)).toEqual(exampleItems);
});

it('an empty list returns empty list', () => {
  expect(removeItemFromItems([], 1)).toEqual([]);
});

it('a falsy list returns an empty list', () => {
  expect(removeItemFromItems(false, 1)).toEqual([]);
  expect(removeItemFromItems(null, 1)).toEqual([]);
  expect(removeItemFromItems(undefined, 1)).toEqual([]);
  expect(removeItemFromItems(NaN, 1)).toEqual([]);
  expect(removeItemFromItems(0, 1)).toEqual([]);
});

it('a list with a falsy value returns the list', () => {
  const sampleArray = ['a', 'b', 'c'];
  expect(removeItemFromItems(sampleArray, false)).toEqual(sampleArray);
  expect(removeItemFromItems(sampleArray, null)).toEqual(sampleArray);
  expect(removeItemFromItems(sampleArray, undefined)).toEqual(sampleArray);
  expect(removeItemFromItems(sampleArray, NaN)).toEqual(sampleArray);
  expect(removeItemFromItems(sampleArray, 0)).toEqual(sampleArray);
});