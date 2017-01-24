var should = require('should');
var vm = require('vm');
var fs = require('fs');

// if this test is being run on a server it should be ONLY to test the
// provided solutions
if(typeof window === 'undefined'){
  // looks for a file with the same name as this one but with
  // `.test.js` replaced with `.js`
  var filename = __filename.replace(/\.test\.js$/, '.js');
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

describe('multiply', function(){
  it('should be defined', function(){
    should.exist(multiply);
  });

  it('should be a function', function(){
    multiply.should.be.a.Function;
  });

  it('should multiply small integers', function(){
    multiply(2, 5).should.be.below(2 * 5 + 0.001);
    multiply(2, 5).should.be.above(2 * 5 - 0.001);

    multiply(13, 45).should.be.below(13 * 45 + 0.001);
    multiply(13, 45).should.be.above(13 * 45 - 0.001);

    multiply(25, 2).should.be.below(25 * 2 + 0.001);
    multiply(25, 2).should.be.above(25 * 2 - 0.001);

    multiply(2, 5).should.be.below(2 * 5 + 0.001);
    multiply(2, 5).should.be.above(2 * 5 - 0.001);

    multiply(13, 45).should.be.below(13 * 45 + 0.001);
    multiply(13, 45).should.be.above(13 * 45 - 0.001);

    multiply(25, 2).should.be.below(25 * 2 + 0.001);
    multiply(25, 2).should.be.above(25 * 2 - 0.001);
  });

  it('should multiply larger integers', function(){

    multiply(703, 1035).should.be.below(703 * 1035 + 0.001);
    multiply(703, 1035).should.be.above(703 * 1035 - 0.001);

    multiply(2053, 4013).should.be.below(2053 * 4013 + 0.001);
    multiply(2053, 4013).should.be.above(2053 * 4013 - 0.001);

    multiply(3195, 3296).should.be.below(3195 * 3296 + 0.001);
    multiply(3195, 3296).should.be.above(3195 * 3296 - 0.001);
  });

  it('should multiply by zero', function(){
    multiply(0, 5).should.be.below(0 * 5 + 0.001);
    multiply(0, 5).should.be.above(0 * 5 - 0.001);

    multiply(5, 0).should.be.below(5 * 0 + 0.001);
    multiply(5, 0).should.be.above(5 * 0 - 0.001);
  });

  it('should multiply negatives', function(){
    multiply(5, -6).should.be.below(5 * -6 + 0.001);
    multiply(5, -6).should.be.above(5 * -6 - 0.001);

    multiply(-13, 25).should.be.below(-13 * 25 + 0.001);
    multiply(-13, 25).should.be.above(-13 * 25 - 0.001);

    multiply(-17, -36).should.be.below(-17 * -36 + 0.001);
    multiply(-17, -36).should.be.above(-17 * -36 - 0.001);
  });
});

describe('divide', function(){
  it('should be defined', function(){
    should.exist(divide);
  });
  it('should be a function', function(){
    divide.should.be.a.Function;
  });
  it('should divide whole numbers', function(){
    divide(4, 2).should.be.below(2 + 0.001);
    divide(4, 2).should.be.above(2 - 0.001);

    divide(15, 5).should.be.below(3 + 0.001);
    divide(15, 5).should.be.above(3 - 0.001);

    divide(765, 17).should.be.below(765 / 17 + 0.001);
    divide(765, 17).should.be.above(765 / 17 - 0.001);
  });

  it('should handle zero in the numerator', function(){
    divide(0, 10).should.be.below(0.001);
    divide(0, 10).should.be.above(-0.001);
  });

  it('should divide negative numbers', function(){

    divide(-4, 2).should.be.below(-2 + 0.001);
    divide(-4, 2).should.be.above(-2 - 0.001);

    divide(-15, -5).should.be.below(-15 / -5 + 0.001);
    divide(-15, -5).should.be.above(-15 / -5 - 0.001);

    divide(-765, -17).should.be.below(-765 / -17 + 0.001);
    divide(-765, -17).should.be.above(-765 / -17 - 0.001);
  });

  it('should divide to 3 places', function(){

    divide(0, 10).should.be.below(0 / 10 + 0.001);
    divide(0, 10).should.be.above(0 / 10 - 0.001);

    divide(2, 3).should.be.below(2 / 3 + 0.001);
    divide(2, 3).should.be.above(2 / 3 - 0.001);

    divide(5, 2).should.be.below(5 / 2 + 0.001);
    divide(5, 2).should.be.above(5 / 2 - 0.001);

    divide(6, 4).should.be.below(6 / 4 + 0.001);
    divide(6, 4).should.be.above(6 / 4 - 0.001);

    divide(35, 8).should.be.below(35 / 8 + 0.001);
    divide(35, 8).should.be.above(35 / 8 - 0.001);

    divide(45, 12).should.be.below(45 / 12 + 0.001);
    divide(45, 12).should.be.above(45 / 12 - 0.001);

    divide(3782, 80).should.be.below(3782 / 80 + 0.001);
    divide(3782, 80).should.be.above(3782 / 80 - 0.001);
  });

  it('should divide to 3 places for negative numbers', function(){
    divide(-83, 12).should.be.below(-83 / 12 + 0.001);
    divide(-83, 12).should.be.above(-83 / 12 - 0.001);
  });
});

describe('modulo', function(){
  it('should be defined', function(){
    should.exist(modulo);
  });
  it('should be a function', function(){
    modulo.should.be.a.Function;
  });
  it('should return remainders for whole numbers', function(){
    modulo(0, 10).should.be.equal(0 % 10);
    modulo(5, 2).should.be.equal(5 % 2);
    modulo(6, 4).should.be.equal(6 % 4);
    modulo(35, 8).should.be.equal(35 % 8);
    modulo(45, 12).should.be.equal(45 % 12);
    modulo(3782, 80).should.be.equal(3782 % 80);
    modulo(1, 20).should.be.equal(1 % 20);
    modulo(7, 2643).should.be.equal(7 % 2643);
  });
});

  describe('multiply extra credit', function () {
    it('should multiply floats', function(){
      multiply(2.5, 2).should.be.below(5 + 0.001);
      multiply(2.5, 2).should.be.above(5 - 0.001);

      multiply(2.5, 2.5).should.be.below(2.5 * 2.5 + 0.001);
      multiply(2.5, 2.5).should.be.above(2.5 * 2.5 - 0.001);

      multiply(0.2, 0.21).should.be.below(0.2 * 0.21 + 0.001);
      multiply(0.2, 0.21).should.be.above(0.2 * 0.21 - 0.001);

      multiply(2.28, 3.10).should.be.below(2.28 * 3.10 + 0.001);
      multiply(2.28, 3.10).should.be.above(2.28 * 3.10 - 0.001);

      multiply(0.001, 501).should.be.below(0.001 * 501 + 0.001);
      multiply(0.001, 501).should.be.above(0.001 * 501 - 0.001);
    });
    it('should work with long floats', function(){
      multiply(0.001, 0.00000081).should.be.below(0.001 * 0.00000081 + 0.001);
      multiply(0.001, 0.00000081).should.be.above(0.001 * 0.00000081 - 0.001);
    });
  });
