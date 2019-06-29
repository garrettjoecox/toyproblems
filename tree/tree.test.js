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

describe("treeMaker", function() {
  it('should exist', function(){
    should.exist(treeMaker);
  });

  it('should be a function', function(){
    treeMaker.should.be.a.Function;
  });

  it('should be implemented in the prototypal style', function(){
    //Are you using Object.create()..?
    var tree = treeMaker();
    treeMaker.methods.addChild.should.be.a.Function;
    treeMaker.methods.contains.should.be.a.Function;
    tree.addChild.should.be.a.Function;
    tree.contains.should.be.a.Function;
  });


  it("should add children to the tree", function() {
    var tree = treeMaker();
    tree.addChild(5);
    tree.children[0].value.should.equal(5);
  });

  it("should return true for a value that the tree contains", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.contains(5).should.equal(true);
  });

  it("should return false for a value that was not added", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.contains(6).should.equal(false);
  });

  it("should be able to add children to a tree's child", function() {
    //Each child should itself be an instance of a tree.
    var tree = treeMaker();
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].children[0].value.should.equal(6);
  });

  it("should correctly detect nested children", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.contains(7).should.be.true;
    tree.contains(8).should.be.true;
  });
});
