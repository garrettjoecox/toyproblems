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

describe('balancedParens', function(){
  it('should exist', function(){
    should.exist(balancedParens);
  });
  it('should be a function', function(){
    balancedParens.should.be.a.Function;
  });
  it('should return a boolean', function(){
    var result = balancedParens('()');
    should.exist(result);
    result.should.be.a.Boolean;
  });
  describe('step 1', function(){
    it('should return true for ()', function(){
      balancedParens('()').should.be.true;
    });
    it('should return false for (', function(){
      balancedParens('(').should.be.false;
    });
    it('should return false for )', function(){
      balancedParens(')').should.be.false;
    });
    it('should return false for )(', function(){
      balancedParens(')(').should.be.false;
    });
    it('should return true for (())', function(){
      balancedParens('(())').should.be.true;
    });
    it('should return false for ))))))))))((((((((((', function(){
      balancedParens('))))))))))((((((((((').should.be.false;
    });
    it('should return true for (((((((((())))))))))', function(){
      balancedParens('(((((((((())))))))))').should.be.true;
    });
    it('should return false for ())()(()', function(){
      balancedParens('())()(()').should.be.false;
    });
    it('should return true for (())()(())', function(){
      balancedParens('(())()(())').should.be.true;
    });
  });
  describe('step 2', function(){
    it('should return false for {', function(){
      balancedParens('{').should.be.false;
    });
    it('should return false for }', function(){
      balancedParens('}').should.be.false;
    });
    it('should return true for {}', function(){
      balancedParens('{}').should.be.true;
    });
    it('should return false for [', function(){
      balancedParens('[').should.be.false;
    });
    it('should return false for ]', function(){
      balancedParens(']').should.be.false;
    });
    it('should return true for []', function(){
      balancedParens('[]').should.be.true;
    });
    it('should return true for [](){}', function(){
      balancedParens('[](){}').should.be.true;
    });
    it('should return true for [({})]', function(){
      balancedParens('[({})]').should.be.true;
    });
    it('should return false for [(]{)}', function(){
      balancedParens('[(]{)}').should.be.false;
    });
    it('should return true for [[[{{{((()))}}}]]]', function(){
      balancedParens('[[[{{{((()))}}}]]]').should.be.true;
    });
    it('should return false for []}{()', function(){
      balancedParens('[]}{()').should.be.false;
    });
  });
  describe('step 3', function(){
    it('should return true for this string', function(){
      balancedParens('return { name: "Bertrand Russell", birthday: getBirthday({who:self}) };').should.be.true;
    });
    it('should return false for this string', function(){
      balancedParens(' var hubble = function() { telescopes.awesome();'); // missing trailing `}`
    });
    it('should return true for this string', function(){
      balancedParens(' var wow  = { yo: thisIsAwesome() }').should.be.true;
    });
    it('should return true for an empty string', function(){
      // great job for making it this far and sorry for being a stickler
      // but technically, the empty string '' is still balanced!
      balancedParens('').should.be.true;
    });
  });
});
