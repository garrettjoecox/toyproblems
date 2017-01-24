var fs = require('fs');
var should = require('should');

// if this test is being run on a server it should be ONLY to test the
// provided solutions
if(typeof window === 'undefined'){
  // looks for a file with the same name as this one but with
  // `.test.js` replaced with `.js`
  var filename = __filename.replace(/\.test\.js$/, '.js');
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

describe("LinkedList", function() {
  it('should exist', function(){
    should.exist(LinkedList);
  });

  it('should be a function', function(){
    LinkedList.should.be.a.Function;
  });

  it("should be implemented using the pseudoclassical pattern", function(){
    LinkedList.prototype.addToTail.should.be.a.Function;
    LinkedList.prototype.removeHead.should.be.a.Function;
    LinkedList.prototype.contains.should.be.a.Function;
  });

  it("should designate a new tail when new nodes are added", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.tail.value.should.equal(4);
    list.addToTail(5);
    list.tail.value.should.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.head.value.should.equal(4);
    list.removeHead();
    list.head.value.should.equal(5);
  });

  it("should remove the head and tail from the list when removeHead is called and there is only one element present", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    list.removeHead();
    should.not.exist(list.head);
    should.not.exist(list.tail);
  });

  it("should contain a value that was added", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.contains(4).should.be.true;
    list.contains(5).should.be.true;
    list.contains(6).should.be.false;
  });

  it("should not contain a value that was removed", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    list.contains(4).should.be.false;
  });

});
