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

describe('spiralTraversal', function() {
  it('should exist', function(){
    should.exist(spiralTraversal);
  });

  it('should be a function', function(){
    spiralTraversal.should.be.a.Function;
  });

  it('should spirally traverse a square matrix', function() {
    var squareMatrix = [
      [  1,   2,   3,   4,   5],
      [  6,   7,   8,   9,  10],
      [ 11,  12,  13,  14,  15],
      [ 16,  17,  18,  19,  20],
      [ 21,  22,  23,  24,  25]
    ];

    spiralTraversal(squareMatrix).should.be.eql([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  });

  it('should spirally traverse an tall matrix', function() {
    var awkwardMatrix = [
      [  1,  2,  3],
      [  4,  5,  6],
      [  7,  8,  9],
      [ 10, 11, 12],
      [ 13, 14, 15],
      [ 16, 17, 18],
      [ 19, 20, 21],
      [ 22, 23, 24]
    ];

    spiralTraversal(awkwardMatrix).should.be.eql([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20]);
  });

  it('should spirally traverse an wide matrix', function() {
    var awkwardMatrix = [
      [  1,  2,  3,  4,  5,  6,  7],
      [  6,  7,  8,  9, 10, 11, 12],
      [ 13, 14, 15, 16, 17, 18, 19]
    ];

    spiralTraversal(awkwardMatrix).should.be.eql([1, 2, 3, 4, 5, 6, 7, 12, 19, 18, 17, 16, 15, 14, 13, 6, 7, 8, 9, 10, 11]);
  });

  it('should spirally traverse an n by 1 matrix', function() {
    var awkwardMatrix = [
      [  1,  2,  3,  4,  5,  6,  7]
    ];

    spiralTraversal(awkwardMatrix).should.be.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should spirally traverse a 1 by n matrix', function() {
    var awkwardMatrix = [
      [ 1 ],
      [ 2 ],
      [ 3 ],
      [ 4 ]
    ];

    spiralTraversal(awkwardMatrix).should.be.eql([1, 2, 3, 4]);
  });

});
