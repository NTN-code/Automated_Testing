const { checkValidity } = require("../lab7/triangleFinder/functions.js");


test('Valid triangle', () => {
    expect(checkValidity(2, 2, 2)).toBe(true);
  });


  
test('Unvalid triangle', () => {
    expect(checkValidity(2, 10, 2)).toBe(false);
  });

