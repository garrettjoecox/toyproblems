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

describe('characterFrequency', function() {
  it('should exist', function() {
    should.exist(characterFrequency);
  });

  it('should be a function', function() {
    characterFrequency.should.be.a.Function;
  });

  it('should return an array of arrays', function() {
    var result = characterFrequency('fun');
    should.exist(result);
    result.should.be.an.instanceof(Array);
    result[0].should.be.an.instanceof(Array);
  });

  it('should return key-value pairs of letters and numbers', function() {
    var result = characterFrequency('good');
    should.exist(result);
    result[0][0].should.be.a.String;
    result[0][1].should.be.a.Number;
  });
  
  it('should return one key-value pair for each unique letter in the string', function() {
    // 'aaabbc' contains only 3 unqiue characters
    var result = characterFrequency('aaabbc');
    result.length.should.eql(3);
  });

  it('should sort by descending order in frequency', function() {
    var result = characterFrequency('mississippi');
    result[0][1].should.eql(4);
    result[1][1].should.eql(4);
    result[2][1].should.eql(2);
    result[3][1].should.eql(1);
  });

  it('should sort by ascending order of letters', function() {
    var result = characterFrequency('yzbzy');
    result[0][0].should.equal('y');
    result[1][0].should.eql('z');
    result[2][0].should.eql('b');
  });

  it('should sort priorities sorting by frequence over sorting by letter', function() {
    var result;

    // same number of p's and o's, sort ascending by character
    result = characterFrequency('popopo');
    result[0][0].should.equal('o');
    result[1][0].should.eql('p');

    // more p's and than o's, sort by frequency
    result = characterFrequency('popopop');
    result[0][0].should.equal('p');
    result[1][0].should.eql('o');
  });

  it('should handle the empty string degenerate case', function(){
    var result = characterFrequency('');
    should.exist(result);
    result.should.be.eql([]);
  });

  it('should give the expected result for `supercalifragilisticexpialidocious`', function(){
    var result = characterFrequency('supercalifragilisticexpialidocious');
    var expected = [
      [ 'i', 7 ],
      [ 'a', 3 ],
      [ 'c', 3 ],
      [ 'l', 3 ],
      [ 's', 3 ],
      [ 'e', 2 ],
      [ 'o', 2 ],
      [ 'p', 2 ],
      [ 'r', 2 ],
      [ 'u', 2 ],
      [ 'd', 1 ],
      [ 'f', 1 ],
      [ 'g', 1 ],
      [ 't', 1 ],
      [ 'x', 1 ] ];
    result.should.eql(expected);
  });
});
