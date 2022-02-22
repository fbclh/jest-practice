const capitalize = require('./task-4');

test('capitalize string', () => {
  expect(capitalize('me')).toBe('Me');
  expect(capitalize('hello')).toBe("Hello");
   expect(capitalize('banana')).toBe('Banana');
});
