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

describe('toFraction()', function(){

  it('should exist', function(){
    should.exist(toFraction);
  });

  it('should be a function', function(){
    toFraction.should.be.a.Function;
  });

  it('should return a result', function(){
    should.exist(toFraction(0.25));
  });

  it('should return a string', function (){
    toFraction(0.25).should.be.a.String;
  });

  it('should return the correct fraction 1.0', function(){
    toFraction(1.0).should.equal('1/1');
  });

  it('should return the correct faction for 0.25', function(){
    toFraction(0.25).should.equal('1/4');
  });

  it('should return the correct faction for 0.88', function(){
    toFraction(0.88).should.equal('22/25');
  });

  it("should return the correct faction for 0.88", function(){
    toFraction(.88).should.equal("22/25");
  });

  it('should return the correct faction for 253213', function(){
    toFraction(0.253213).should.equal('253213/1000000');
  });

  it('should return the correct faction for 1.75', function(){
    toFraction(1.75).should.equal('7/4');
  });

  it('should return the correct fraction for 0.0', function(){
    toFraction(0).should.equal('0/1');
  });

  it('should return the correct faction for 82', function(){
    toFraction(82.0).should.equal('82/1');
  });

  it('should work for negative numbers', function(){
    toFraction(-1.75).should.equal('-7/4');
  });
});
