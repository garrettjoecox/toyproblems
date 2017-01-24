var should = require('should');

describe('HTML jQuery color problem', function() {
  it('should have jQuery available', function(){
    // did you forget to include jquery.js in index.html?
    should.exist($);
  });
  it('should create many spans', function() {
    $('span').length.should.be.above(100);
  });
  it('should change color of given span tag every second', function(done) {
   var originalColor = $('span').eq(10).css('color');
   setTimeout(function() {
    // check the same spans color after 1 second and make sure it changed
    var newColor = $('span').eq(10).css('color');
    originalColor.should.not.equal(newColor);
    done();
   }, 1000);
  });
  it('should still retain two `<p>` tags in the document', function() {
    // this could break if you added or removed `<p>` tags either in your script
    // or directly from the provided `index.html` file.
    $('p').length.should.eql(2);
  });
  it('should retain the general number of spaces between words as the original', function() {
    // make sure to preserve the spaces between words!
    var numberOfSpaces = $('p').text().split(' ').length;
    numberOfSpaces.should.be.above(100);
  });
});