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

describe('commonCharacters', function() {

  it('should be a function', function() {
    commonCharacters.should.be.a.Function;
  });

  it('should return something', function(){
    var result = commonCharacters('i am a string', 'i am also a string');
    should.exist(result); // your function didn't return anything!
  });

  it('should not return an Array', function(){
    // your function is returning an array instead of a string
    var result = commonCharacters('vicapow', 'wopaciv');
    result.should.not.be.an.Array;
  });

  it('should return a string', function() {
    var string1 = 'i have made a huge mistake';
    var string2 = 'have any of you ever even seen a chicken';
    var result = commonCharacters(string1, string2);
    result.should.be.a.String;
  });

  it('should return common characters for simple strings', function(){
    // the common characters between 'abc' and 'abc' should be 'abc'
    commonCharacters('abc', 'abc').should.equal('abc');
    // the common characters between 'ab' and 'bc' should be 'b'
    commonCharacters('ab', 'bc').should.equal('b');
  });

  it('should return the common characters in the order they appear', function(){
    var result = commonCharacters('zyx', 'xzy');
    // the resulting common character string should be sorted in the order the
    // characters appear (not alphabetically)
    result.should.equal('zyx');
  });

  it('should return the original string for repeated versions of a characters', function() {
    var result = commonCharacters('aeiou', 'aaeeiioouu');
    // the common characters between 'aeiou' and 'aaeeiioouu' shold be 'aeiou'
    result.should.equal(result, 'aeiou');
  });

  it('should return "" if the first string is ""', function() {
    var result = commonCharacters('', 'eiauo');
    result.should.equal(''); // '' and 'eiauo' have no common characters
  });

  it('should return the common characters for this anagram', function() {
    var string1 = 'all boys love fudge';
    var string2 = 'boys all love fudge';
    var result = commonCharacters(string1, string2);
    // the common characters between 'all boys love fudge' and 'boys all love 
    // fudge' should be 'alboysvefudg'
    result.should.equal(result, 'alboysvefudg');
  });

  it('should return an empty string when comparing two empty strings', function(){
    // an edge case to watch out for. Its possible someone could try to compare
    // the common strings among two empty strings.
    commonCharacters('', '').should.equal('');
  });

  it('Extra Credit: should return common characters between more than two strings', function(){
    // if you've gotten this far, you're doing really great! this bit addresses 
    // the extra credit of allowing more than two strings as input
    var result = commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui'
      , 'tyuiop', 'yuiopa');
    // the only common character among all these strings should be just 'y'
    should.equal(result, 'y');
  });

});

