
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

describe('toEnglish', function() {

  it('should exist on the Number prototype', function(){
    should.exist(Number.prototype.toEnglish);
  });

  it('should be a function', function() {
    Number.prototype.toEnglish.should.be.a.Function;
  });

  it('should write single digits', function () {
    (0).toEnglish().should.equal('zero');
    (1).toEnglish().should.equal('one');
    (2).toEnglish().should.equal('two');
    (3).toEnglish().should.equal('three');
    (4).toEnglish().should.equal('four');
    (5).toEnglish().should.equal('five');
    (6).toEnglish().should.equal('six');
    (7).toEnglish().should.equal('seven');
    (8).toEnglish().should.equal('eight');
    (9).toEnglish().should.equal('nine');
  });

  it('should write teens', function () {
    (11).toEnglish().should.equal('eleven');
    (12).toEnglish().should.equal('twelve');
    (13).toEnglish().should.equal('thirteen');
    (14).toEnglish().should.equal('fourteen');
    (15).toEnglish().should.equal('fifteen');
    (16).toEnglish().should.equal('sixteen');
    (17).toEnglish().should.equal('seventeen');
    (18).toEnglish().should.equal('eighteen');
    (19).toEnglish().should.equal('nineteen');
  });

  it('should write tens', function () {
    (10).toEnglish().should.equal('ten');
    (20).toEnglish().should.equal('twenty');
    (30).toEnglish().should.equal('thirty');
    (40).toEnglish().should.equal('forty');
    (50).toEnglish().should.equal('fifty');
    (60).toEnglish().should.equal('sixty');
    (70).toEnglish().should.equal('seventy');
    (80).toEnglish().should.equal('eighty');
    (90).toEnglish().should.equal('ninety');

    // compounds from 21-99 should be hyphenated
    (44).toEnglish().should.equal('forty-four');
    (67).toEnglish().should.equal('sixty-seven');
    (99).toEnglish().should.equal('ninety-nine');
  });

  it('should write hundreds', function () {
    (100).toEnglish().should.equal('one hundred');
    (500).toEnglish().should.equal('five hundred');
    (700).toEnglish().should.equal('seven hundred');

    (100).toEnglish().should.equal('one hundred');
    (500).toEnglish().should.equal('five hundred');
    (700).toEnglish().should.equal('seven hundred');

    (275).toEnglish().should.equal('two hundred seventy-five');
    (630).toEnglish().should.equal('six hundred thirty');
    (922).toEnglish().should.equal('nine hundred twenty-two');
  });

  it('should write thousands', function () {
    (1000).toEnglish().should.equal('one thousand');
    (50000).toEnglish().should.equal('fifty thousand');
    (700000).toEnglish().should.equal('seven hundred thousand');

    (5625).toEnglish().should.equal('five thousand six hundred twenty-five');
    (17490).toEnglish().should.equal('seventeen thousand four hundred ninety');
    (355003).toEnglish().should.equal('three hundred fifty-five thousand three');
    (845913).toEnglish().should.equal('eight hundred forty-five thousand nine hundred thirteen');
  });

  it('should write millions', function () {
    (1000000).toEnglish().should.equal('one million');
    (2385024).toEnglish().should.equal('two million three hundred eighty-five thousand twenty-four');
    (973563700).toEnglish().should.equal('nine hundred seventy-three million five hundred sixty-three thousand seven hundred');
  });

  it('should write billions', function () {
    (1000000000).toEnglish().should.equal('one billion');
    (2385024582).toEnglish().should.equal('two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two');
    (973563700353).toEnglish().should.equal('nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three');
  });

  it('should write very large numbers', function () {
    (1000000000000).toEnglish().should.equal('one trillion');
    (1000000000000000).toEnglish().should.equal('one quadrillion');
    (1000000000000000000).toEnglish().should.equal('one quintillion');
  });

  it('should write MAX_INT', function () {
    // 2^53 = 9,007,199,254,740,992 is the maximum value that JavaScript's 64-bit Number can represent as an integer (non decimal)
    (Math.pow(2,53)).toEnglish().should.equal('nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two');
  });

  describe('EXTRA CREDIT:', function () {
    it('should write decimals', function () {
      // use the word "and" to indicate the decimal point
      (1.5).toEnglish().should.equal('one and five tenths');
      (45.75).toEnglish().should.equal('forty-five and seventy-five hundredths');
      // don't write zero for decimals
      (0.3).toEnglish().should.equal('three tenths');
      (0.25).toEnglish().should.equal('twenty-five hundredths');
      // one thousandth should be singular
      (0.001).toEnglish().should.equal('one thousandth');
      // decimal place names should be hyphenated to distinguish them
      (3.0625).toEnglish().should.equal('three and six hundred twenty-five ten-thousandths');
      (503.0013427734375).toEnglish().should.equal('five hundred three and thirteen billion four hundred twenty-seven million seven hundred thirty-four thousand three hundred seventy-five ten-trillionths');
    });
  });

});
