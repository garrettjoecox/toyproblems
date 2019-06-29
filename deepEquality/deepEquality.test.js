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

describe('deepEquals()', function(){
  it('should exist', function(){
    should.exist(deepEquals);
  });
  it('should be a function', function(){
    deepEquals.should.be.a.Function;
  });
  it('should take at least two arguments', function(){
    deepEquals.length.should.be.above(1);
  });
  it('should return a result', function(){
    var result = deepEquals({}, {});
    should.exist(result);
  });
  it('should return a boolean', function(){
    deepEquals({}, {}).should.be.a.Boolean;
  });
  it('should return true for two empty objects', function(){
    deepEquals({}, {}).should.be.true;
  });
  it('should use deep equality', function(){
    var a = { foo: 1 };
    var b = { foo: '1' };
    deepEquals(a,b).should.be.false;
  });
  it('should return true for two objects with the same keys and values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    deepEquals(a, b).should.be.true;
  });
  it('should return false for two objects with the same keys and but different values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'pow' };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar', biz: 'baz' };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar', biz: 'baz' };
    var b = { foo:'bar' };
    deepEquals(a, b).should.be.false;
  });
  it('should return true for similar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 3 } };
    deepEquals(a,b).should.be.true;
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c:'potato' } };
    deepEquals(a,b).should.be.false;
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 'potato'} };
    var b = { foo: 1, b: { c: 3 } };
    deepEquals(a,b).should.be.false;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a,b).should.be.true;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a,b).should.be.true;
  });
});
