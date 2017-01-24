/* globals rotatedArraySearch */
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

var range = function (start, end, step) {
  var result = [];
  for (var i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};

var rotate = function (array, offset) {
  return array.slice(offset).concat(array.slice(0, offset));
};

describe("rotatedArraySearch", function (){
  it("should exist", function () {
    should.exist(rotatedArraySearch);
  });

  describe("when called on a rotated array", function () {
    describe("and a value that is in the array", function () {
      it("should return a number", function () {
        (typeof rotatedArraySearch([3, 4, 5, 2], 4)).should.be.equal("number");
      });

      it("should return the index of that item", function () {
        rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1).should.equal(4);
      });

      it("should return the index of that item quickly", function () {
        var start = 0, end = 1000000, step = 1, offset = 247858, value = 349744;
        var alot = range(start, end, step);
        var real = value - offset; // This logic is not applicable to all cases, just a subset.
        rotatedArraySearch(rotate(alot, offset), value).should.equal(real);
      });
    });

    describe("and a value that is not in the array", function () {
      it("should return null", function () {
        should(rotatedArraySearch([1, 2, 3], 5) === null);
      });
    });
  });
});
