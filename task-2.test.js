const reverseString = require('./task-2');

test('reverse string', () => {
  expect(reverseString('spinach')).toBe('hcanips');
  expect(reverseString('kale')).toBe('elak');
});

