var should = require('should');

// if this test is being run on a server it should be ONLY to test the
// provided solutions
if(typeof window === 'undefined'){
  // looks for a file with the same name as this one but with `.test.js`
  // replaced with `.js`
  var filename = __filename.replace(/\.test\.js$/,'.js');
  require('vm').runInThisContext(require('fs').readFileSync(filename), filename);
}

describe('rotateMatrix', function() {
  it('should exist', function(){
    should.exist(rotateMatrix);
  });

  it('should be a function', function() {
    rotateMatrix.should.be.a.Function;
  });

  it('should return an array', function() {
    var result = rotateMatrix([]);
    should.exist(result);
    result.should.be.an.Array;
  });

  it('should not alter a 0x0 matrix', function () {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };

    var input = [];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,0,0);
    result.should.be.eql([]);
  });

  it('should not alter a 1x1 matrix', function () {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };

    var input = [[1]];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,1,1);
    result.should.be.eql([[1]]);
  });

  it('should rotate a 2x2 matrix', function () {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };

    var input = [
      [1,2],
      [3,4]
    ];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,2,2);
    result.should.be.eql([
      [3,1],
      [4,2]
    ]);
  });

  it('should rotate a 3x3 matrix', function () {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };

    var input = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,3,3);
    result.should.be.eql([
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]);
  });

  it('should rotate a 4x4 matrix', function () {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };

    var input = [
      [1,2,3,4],
      [5,6,7,8],
      [9,'A','B','C'],
      ['D','E','F','G']
    ];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,4,4);
    result.should.be.eql([
      ['D',9,5,1],
      ['E','A',6,2],
      ['F','B',7,3],
      ['G','C',8,4]
    ]);
  });

  context('EXTRA CREDIT:', function () {
    it('should rotate a 4x5 matrix', function () {
      // Verify the size of a matrix
      var shouldBeMbyN = function (matrix,m,n) {
        matrix.should.have.length(m);
        for (var i = 0; i < n; i++) {
          matrix[i].should.have.length(n);
        }
      };

      var input = [
        [1,2,3,4,5],
        [6,7,8,9,'A'],
        ['B','C','D','E','F'],
        ['G','H','I','J','K'],
      ];
      var result = rotateMatrix(input);
      shouldBeMbyN(result,5,4);
      result.should.be.eql([
        ['G','B',6,1],
        ['H','C',7,2],
        ['I','D',8,3],
        ['J','E',9,4],
        ['K','F','A',5],
      ]);
    });

    it('should rotate a 2x6 matrix', function () {
      // Verify the size of a matrix
      var shouldBeMbyN = function (matrix,m,n) {
        matrix.should.have.length(m);
        for (var i = 0; i < n; i++) {
          matrix[i].should.have.length(n);
        }
      };

      var input = [
        [1,2,3,4,5,6],
        [7,8,9,'A','B','C'],
      ];
      var result = rotateMatrix(input);
      shouldBeMbyN(result,6,2);
      result.should.be.eql([
        [7,1],
        [8,2],
        [9,3],
        ['A',4],
        ['B',5],
        ['C',6]
      ]);
    });

    it('should rotate a 3x3 matrix counter-clockwise', function () {
      // Verify the size of a matrix
      var shouldBeMbyN = function (matrix,m,n) {
        matrix.should.have.length(m);
        for (var i = 0; i < n; i++) {
          matrix[i].should.have.length(n);
        }
      };

      var input = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      var result = rotateMatrix(input, -1);
      shouldBeMbyN(result,3,3);
      result.should.be.eql([
        [3,6,9],
        [2,5,8],
        [1,4,7]
      ]);
    });
  });
});
