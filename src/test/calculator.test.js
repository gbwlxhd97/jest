const calculator = require('../calculator.js');

const cal = new calculator

test('init', () => {
    expect(cal.value).toBe(0);
})

test('set', () => {
    cal.set(5)
    expect(cal.value).toBe(5);
})

test('clear', () => {
    cal.clear()
    expect(cal.value).toBe(0);
})

test('add', () => {
    cal.add(10)
    expect(cal.value).toBe(10);
})

test('subtract', () => {
    cal.subtract(5)
    expect(cal.value).toBe(5);
})

test('multiply', () => {
    cal.multiply(5)
    expect(cal.value).toBe(25);
})

test('divide', () => {
    cal.divide(5)
    expect(cal.value).toBe(5);
})