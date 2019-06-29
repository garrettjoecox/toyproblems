var should = require('should');
var vm = require('vm');
var fs = require('fs');

if(typeof window === 'undefined'){
  // looks for a file with the same name as this one but with `.test.js`
  var filename = __filename.replace(/\.test\.js$/,'.js');
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

describe('longestPalindrome', function () {

  it('should exist', function () {
    should.exist(longestPalindrome);
  });

  it('should be a function', function () {
    longestPalindrome.should.be.a.Function;
  });

  it('should return a string', function () {
    longestPalindrome('abc').should.be.a.String;
  });

  it('should return the longest palindrome for single word strings', function(){
    // aibohphobia: An irrational fear of palindromes
    longestPalindrome('aibohphobia').should.equal('aibohphobia');
  });

  it('should return the longest palindrome in a string of text', function(){
    longestPalindrome('My dad is a racecar athlete').should.equal('a racecar a');
  });

  it('should return the longest palindrome among several in a string', function(){
    longestPalindrome('aaaa level eye redivider hannah').should.equal(' redivider ');
  });

  it('should handle the edge-case of an empty string as input', function(){
    longestPalindrome('').should.equal('');
  });

  it('should return the longest palindrome even if it has an even length',
    function(){
      longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg').should.equal(' tattarrattat ');
  });

  it('should return the longest palindrome even if it has an even length', function(){
    longestPalindrome('ddccbbaabbccdd').should.equal('ddccbbaabbccdd');
  });

});
