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

describe('sumArray()', function(){
  it('should exist', function(){
    should.exist(sumArray);
  });

  it('should be a function', function(){
    sumArray.should.be.a.Function;
  });

  it('should return a number', function(){
    var sum = sumArray([1,2,3]);
    should.exist(sum);
  });

  // test generating function
  function generateTest(arr, seq, sum){
    // the students will see the contents of the test if they fail the test
    function test(){
      // the _contiguous_ sub-subsequence with the largest sum of `__arr__` 
      // is `__seq__` and its sum is `__sum__`.
      sumArray(__arr__).should.equal(__sum__);
    }
    // overwrite `__arr__`, `__seq__`, and `__sum__` in `test()` with the values of `arr`, 
    // `seq`, `sum`.
    eval(test.toString()
      .replace(/__arr__/g, JSON.stringify(arr))
      .replace(/__seq__/g, JSON.stringify(seq))
      .replace(/__sum__/g, JSON.stringify(sum)));
    it('should return the largest sum of _contiguous_ elements for `' + JSON.stringify(arr) + '`', test);
  }
  generateTest([1, 2, 3], [1, 2, 3], 6);
  generateTest([4, -1, 5], [4, -1, 5], 8);
  generateTest([10, -11, 11], [11], 11);
  generateTest([-7, -6, -9], [-6], -6);
  generateTest([1, 2, 3, -6, 4, 5, 6], [4, 5, 6], 15);
  generateTest([1, 2, 3, -5, 4, 5, 6], [1, 2, 3, -5, 4, 5, 6], 16);
  generateTest([1, 2, 3, -4, 5], [1, 2, 3, -4, 5], 7);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4], [1, 2, 3, -4, 5, -4, 5], 8);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4, -4], [1, 2, 3, -4, 5, -4, 5], 8);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4, -4, -1], [1, 2, 3, -4, 5, -4, 5], 8);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4, -4, 10], [1, 2, 3, -4, 5, -4, 5, -4, -4, 10], 10);
  generateTest([-5, 2, 3], [2, 3], 5);
  generateTest([-5, -5, -5, 2, 3], [2, 3], 5);
  generateTest([-3, -2, -1, -2, -3], [-1], -1);
  generateTest([99], [99], 99);
});
