import { toggleItemStatus } from '../'

const exampleItems = () => [
    { id: 1, complete: false },
    { id: 2, complete: true },
    { id: 3, complete: false },
];

it('can mark the first item as complete', () => {
  expect(toggleItemStatus(exampleItems(), 1)).toEqual([
    { id: 1, complete: true },
    { id: 2, complete: true },
    { id: 3, complete: false },
  ]);
});


it('can mark the first item as complete, and then incomplete', () => {
  const items = exampleItems();
  expect(toggleItemStatus(items, 1)).toEqual([
    { id: 1, complete: true },
    { id: 2, complete: true },
    { id: 3, complete: false },
  ]);
  expect(toggleItemStatus(items, 1)).toEqual([
    { id: 1, complete: false },
    { id: 2, complete: true },
    { id: 3, complete: false },
  ]);
});

it('can mark the second item as incomplete', () => {
  expect(toggleItemStatus(exampleItems(), 2)).toEqual([
    { id: 1, complete: false },
    { id: 2, complete: false },
    { id: 3, complete: false },
  ]);
});

it('can mark the third item as complete', () => {
  expect(toggleItemStatus(exampleItems(), 3)).toEqual([
    { id: 1, complete: false },
    { id: 2, complete: true },
    { id: 3, complete: true },
  ]);
});

it('marking an item which does not exist returns the same list', () => {
  expect(toggleItemStatus(exampleItems(), 4)).toEqual(exampleItems());
});

it('an empty list returns empty list', () => {
  expect(toggleItemStatus([], 1)).toEqual([]);
});

it('a falsy list returns an empty list', () => {
  expect(toggleItemStatus(false, 1)).toEqual([]);
  expect(toggleItemStatus(null, 1)).toEqual([]);
  expect(toggleItemStatus(undefined, 1)).toEqual([]);
  expect(toggleItemStatus(NaN, 1)).toEqual([]);
  expect(toggleItemStatus(0, 1)).toEqual([]);
});

it('a list with a falsy value returns the list', () => {
  const sampleArray = ['a', 'b', 'c'];
  expect(toggleItemStatus(sampleArray, false)).toEqual(sampleArray);
  expect(toggleItemStatus(sampleArray, null)).toEqual(sampleArray);
  expect(toggleItemStatus(sampleArray, undefined)).toEqual(sampleArray);
  expect(toggleItemStatus(sampleArray, NaN)).toEqual(sampleArray);
  expect(toggleItemStatus(sampleArray, 0)).toEqual(sampleArray);
});