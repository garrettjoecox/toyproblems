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

describe('largestProductOfThree', function() {
  it('should exist', function() {
    should.exist(largestProductOfThree);
    // `largestProductOfThree` doesn't exist!
  });

  it('should be a function', function() {
    largestProductOfThree.should.be.a.Function;
    // `largestProductOfThree` isn't a function!
  });

  it('should return an integer', function() {
    var result = largestProductOfThree([1,2,3]);

    result.should.be.a.number;
    // `largestProductOfThree` isn't returning a number!
  });

  it('should handle three positive numbers', function() {
    largestProductOfThree([0, 2, 3]).should.equal(0);
    largestProductOfThree([2, 3, 5]).should.equal(30);
    largestProductOfThree([7, 5, 3]).should.equal(105);
    largestProductOfThree([7, 5, 7]).should.equal(245);
  });

  it('should handle more than three positive numbers', function() {
    largestProductOfThree([2, 5, 3, 7]).should.equal(105);
    largestProductOfThree([11, 7, 5, 3, 2]).should.equal(385);
    largestProductOfThree([2, 13, 7, 3, 5, 11]).should.equal(1001);
    largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5]).should.equal(1859);
  });

  it('should handle negative numbers', function() {
    largestProductOfThree([2, 3, -11, 7, 5, -13]).should.equal(1001);
    largestProductOfThree([-31, 41, 34, -37, -17, 29]).should.equal(47027);
  });

});
