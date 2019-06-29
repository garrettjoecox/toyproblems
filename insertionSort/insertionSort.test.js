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

describe('insetionSort', function() {

  it('should be a function', function(){
    should.exist(insertionSort);
    insertionSort.should.be.a.Function;
  });

  it('should return an array', function(){
    var result = insertionSort(testingTransform([1,2,3]));
    should.exist(result);
    result.should.be.an.instanceOf(Array);
  });

  it('should return the original array', function(){
    var array = testingTransform([3, 2, 1]);
    var result = insertionSort(array);
    // This means that the array is sorted in-place;
    // no copies are made, and the original, modified array is returned.
    array.should.be.equal(result);
  });

  // Note: Any comparison here needs to use eql. Otherwise Mocha will test for
  // reference equality and will fail, as we create new arrays.

  it('should sort an array numerically by value property', function() {
    var array = testingTransform([1, 100, 2, 43, 21]);
    insertionSort(array);
    array.should.eql([
      {value: 1, i: 0},
      {value: 2, i: 2},
      {value: 21, i: 4},
      {value: 43, i: 3},
      {value: 100, i: 1},
    ]);
    array = testingTransform([24.3, 24.7, 23, 9]);
    insertionSort(array);
    array.should.eql([
      {value: 9, i: 3},
      {value: 23, i: 2},
      {value: 24.3, i: 0},
      {value: 24.7, i: 1},
    ]);
  });

  it('should handle presorted arrays', function() {
    var array = testingTransform([5, 4, 3]);
    insertionSort(array);
    array.should.eql([
      {value: 3, i: 2},
      {value: 4, i: 1},
      {value: 5, i: 0},
    ]);
    array = testingTransform([1, 2, 3]);
    insertionSort(array);
    array.should.eql([
      {value: 1, i: 0},
      {value: 2, i: 1},
      {value: 3, i: 2},
    ]);
  });

  it('should handle negative numbers', function() {
    var array = testingTransform([0, 1, -1]);
    insertionSort(array);
    array.should.eql([
      {value: -1, i: 2},
      {value: 0, i: 0},
      {value: 1, i: 1},
    ]);
  });

  it('should be a stable sort', function() {
    var array = testingTransform([1, 5, 1, 5]);
    insertionSort(array);
    array.should.eql([
      {value: 1, i: 0},
      {value: 1, i: 2},
      {value: 5, i: 1},
      {value: 5, i: 3},
    ]);
  });
});

describe('Extra credit', function() {
  it('should sort according to the passed comparator', function() {
    var array = testingTransform([1, 2, 3, 4, 5]);
    insertionSort(array, function(a, b) {
      return b.i - a.i;
    });
    array.should.eql([
      {value: 5, i: 4},
      {value: 4, i: 3},
      {value: 3, i: 2},
      {value: 2, i: 1},
      {value: 1, i: 0},
    ]);

    var array = [0, 1, 2, 3, 4, 5];
    insertionSort(array, function(a, b) {
      var aIsOdd = a & 1;
      var bIsOdd = b & 1;

      return aIsOdd - bIsOdd;
    });
    array.should.eql([0, 2, 4, 1, 3, 5]);
  });

  it('should sort intuitively if no comparator is passed', function() {
    var array = testingTransform([0, 1, 'a', ';', [], {}, undefined, null]);
    insertionSort(array);
    // Welcome to bizarro-world: play with this in your terminal to figure out why it sorts as it does.
    array.should.eql([
      {value: [], i: 4},
      {value: 0, i: 0},
      {value: 1, i: 1},
      {value: ';', i: 3},
      {value: {}, i: 5},
      {value: 'a', i: 2},
      {value: undefined, i: 6},
      {value: null, i: 7} 
    ]);
  });
});
