if (typeof MathGenious === 'undefined') {
  // require module when in node
  MathGenious = require('../lib/math-genious.js').MathGenious;
  buster      = require('buster');
}

buster.spec.expose();

describe('math genious', function () {
 
  it('should sum two numbers', function () {
    var sum = MathGenious.sum(1, 2); 
    expect(sum).toEqual(3);
  });

  it('should sum all arguments', function () {
    var sum = MathGenious.sum(1, 2, 3, 4);
    expect(sum).toEqual(10);
  });

});

