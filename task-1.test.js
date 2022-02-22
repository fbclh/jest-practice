const stringLength = require('./task-1');

test('string length', () => {
  expect(stringLength('me')).toBeGreaterThanOrEqual(2);
  expect(stringLength('hello')).toBeLessThanOrEqual(5);
  expect(() => stringLength('bananaBanana')).toThrow(Error);
});