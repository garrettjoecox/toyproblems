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

describe('primeTester', function(){
  it('should be defined', function(){
    should.exist(primeTester);
  });
  
  it('should be a function', function(){
    primeTester.should.be.a.Function;
  });
  
  it('should return a boolean', function(){
    var result = primeTester(3);
    should.exist(result);
    result.should.be.a.Boolean;
  });

  it('should return `true` for the prime number 2', function(){
    // `2` is a prime number since it has no other divisors other than
    // itself and 1.
    // "Two is the smallest and the first prime number, and the only even prime 
    // number (for this reason it is sometimes called 'the oddest prime')."
    // -- Wikipedia (http://en.wikipedia.org/wiki/2_(number))
    primeTester(2).should.be.true;
  });

  it('should return `false` for the non-prime number 1', function(){
    // `1` is by definition not a prime number.
    // for the more adventurous and/or distracted 
    // see: http://primes.utm.edu/notes/faq/one.html
    primeTester(1).should.be.false;
  });

  // verify primes
  it('should return `true` for the prime number 15485867', function () {
    primeTester(15485867).should.be.true;
  });

  it('should return `false` for the non-prime `15485867 * 15485867` ', function(){
    primeTester(15485867 * 15485867).should.be.false;
  });

  it('should return `true` for the prime number `2971215073`', function(){
    primeTester(2971215073).should.be.true;
  });

  it('should return `false` for non-prime `2971215073 * 2971215073` ', function(){
    primeTester(2971215073 * 2971215073).should.be.false;
  });

  it('should return `true` for the prime number `70368760954879`', function(){
    primeTester(70368760954879).should.be.true;
  });

  it('should return `false` for the non-prime number `70368760954879 - 1`', function(){
    primeTester(70368760954879 - 1).should.be.false;
  });
});

context('primeSieve', function (){
  it('should be exist', function(){
    should.exist(primeSieve);
  });

  it('should be a function', function(){
    primeSieve.should.be.a.Function;
  });

  it('should take two arguments', function(){
    primeSieve.length.should.equal(2);
  });
  
  it('should return an array', function(){
    should.exist(primeSieve(1, 10));
    primeSieve(1, 10).should.be.an.instanceOf(Array);
  });
  
  it('should return an empty array between 20 and 22 (no primes)', function(){
    primeSieve(20, 22).should.eql([]);
  });

  it('should return every prime between 1 and 2', function(){
    primeSieve(1, 2).should.eql([2]);
  });

  it('should return every prime between 1 and 2', function(){
    primeSieve(2, 2).should.eql([2]);
  });
  
  it('should return every prime between 1 and 10', function(){
    should.deepEqual(primeSieve(1, 10), [2, 3, 5, 7]);
  });
  
  it('should return the primes between 23 and 29 (inclusive)', function(){
    should.deepEqual(primeSieve(23, 29), [23, 29]);
  });

  it('should return every prime between 2908 and 3080', function(){
    should.deepEqual(primeSieve(2908, 3080), [2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079]);
  });
});
