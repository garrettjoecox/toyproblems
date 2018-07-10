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

describe('nonrepeatedCharacter', function() {
  it('should exist', function(){
    // aka, there is no function in your file called `firstNonRepeatingCharacter`!
    should.exist(firstNonRepeatedCharacter);
  });

  it('should be a function', function(){
    firstNonRepeatedCharacter.should.be.a.Function;
  });

  it('should return `null` for empty string', function(){
    should.not.exist(firstNonRepeatedCharacter(''));
  });

  it('should return `null` for strings that have every character repeated', function(){
    should.not.exist(firstNonRepeatedCharacter('XXXXXXX'));
  });

  it('should return the first nonrepeated character in the string `AABCAC`', function(){
    firstNonRepeatedCharacter('AABCAC').should.equal('B');
  });

  it('should return the first nonrepeating character in the string `ABCA`', function(){
    firstNonRepeatedCharacter('ABCA').should.equal('B');
  });

  it('should return the first nonrepeating character in the string `AAAACX`', function(){
    firstNonRepeatedCharacter('AAAACX').should.equal('C');
  });

  it('should return the first nonrepeating character in the string `AABCABD`', function(){
    firstNonRepeatedCharacter('AABCABD').should.equal('C');
  });
});
