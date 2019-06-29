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

describe('robotPaths', function() {
  it('should exist', function() {
    should.exist(robotPaths);
  });

  it('should be a function', function() {
    robotPaths.should.be.a.Function;
  });

  it('should return a number', function() {
    var result = robotPaths(3);
    should.exist(result);
    result.should.be.a.Number;
  });

  it('should return a number greater than zero for non-empty grids', function() {
    robotPaths(3).should.be.above(0);
  });

  it('should correctly identify the number of unique paths for a 1x1 grid', function() {
    robotPaths(1).should.equal(1);
  });

  it('should correctly identify the number of unique paths for a 2x2 grid', function() {
    robotPaths(2).should.equal(2);
  });

  it('should correctly identify the number of unique paths for a 3x3 grid', function() {
    robotPaths(3).should.equal(12);
  });

  it('should correctly identify the number of unique paths for a 4x4 grid', function() {
    robotPaths(4).should.equal(184);
  });

  it('should correctly identify the number of unique paths for a 5x5 grid', function() {
    robotPaths(5).should.equal(8512);
  });

  it('should correctly identify the number of unique paths for 6x6 grid', function(){
    robotPaths(6).should.equal(1262816);
  });
});
