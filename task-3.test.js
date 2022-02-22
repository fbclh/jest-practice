const calculate = require('./task-3');

describe('class Calculator', () => {
  // Add test
  test('add method', () => {
    expect(new calculate(2, 1).add()).toBe(3);
  });

  test('add method', () => {
    expect(new calculate(2, 2).add()).toBe(4);
  });

  test('add method', () => {
    expect(new calculate(2, 4).add()).toBe(6);
  });

  // Subtract test
  test('subtract method', () => {
    expect(new calculate(2, 1).subtract()).toBe(1);
  });

  test('subtract method', () => {
    expect(new calculate(2, 2).subtract()).toBe(0);
  });

  test('subtract method', () => {
    expect(new calculate(4, 2).subtract()).toBe(2);
  });

  // Divide test
  test('divide method', () => {
    expect(new calculate(4, 2).divide()).toBe(2);
  });

  test('divide method', () => {
    expect(new calculate(10, 2).divide()).toBe(5);
  });

  test('divide method', () => {
    expect(new calculate(2, 2).divide()).toBe(1);
  });

  // Multiply test
  test('multiply method', () => {
    expect(new calculate(2, 1).multiply()).toBe(2);
  });

  test('multiply method', () => {
    expect(new calculate(2, 2).multiply()).toBe(4);
  });

  test('multiply method', () => {
    expect(new calculate(2, 4).multiply()).toBe(8);
  });
});
