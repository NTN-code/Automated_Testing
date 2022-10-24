const { add, subtract, multiply, divide, menu } = require("../lab7/calculator/functions.js");


test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  
test('adds 1 + 2 not to equal -1', () => {
    expect(add(1, 2)).not.toBe(-1);
  });


test('substract 1 - 1 to equal 2', () => {
    expect(subtract(1, -1)).toBe(2);
  });

  
test('substract 5 - 5 not to equal 1', () => {
    expect(subtract(5, 5)).not.toBe(1);
  });

  
test('multiply 1 * 1 to equal 1', () => {
    expect(multiply(1, 1)).toBe(1);
  });

  
test('multiply -1 * 1 to equal -1', () => {
    expect(multiply(1, -1)).toBe(-1);
  });


test('divide 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
  });


test('divide 4 / 8 to equal 0.5', () => {
    expect(divide(4, 8)).toBe(0.5);
  });
  

test('divide 4 / 0 raise warning!', () => {
    expect(divide(4, 0)).toBe("Divide by zero underfine!");
  });


test('test menu if operation not exists', () => {
    expect(menu("add1", 4, 8)).toBe(-1);
  });

  
test('test add in menu', () => {
    expect(menu("add", 4, 8)).toBe(12);
  });

  
test('test subtract in menu', () => {
    expect(menu("subtract", 4, 8)).toBe(-4);
  });

  
test('test multiply in menu', () => {
    expect(menu("multiply", 4, 4)).toBe(16);
  });

  
test('test divide by 0 in menu', () => {
    expect(menu("divide", 4, 0)).toBe("Divide by zero underfine!");
  });

  
test('test divide in menu', () => {
    expect(menu("divide", 4, 2)).toBe(2);
  });