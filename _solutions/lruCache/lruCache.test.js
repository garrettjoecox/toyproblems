/* globals LRUCache */
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

describe("LRUCache", function (){
  it("should exist", function () {
    should.exist(LRUCache);
  });

  describe("when populated", function () {
    describe("under its limit", function () {
      it("should contain all of the populated items", function () {
        var cache = new LRUCache(5);
        for (var i = 0; i < 4; i++) { cache.set(i, i); }
        for (i = 0; i < 4; i++) { should(cache.get(i)).equal(i); }
      });
    });

    describe("over its limit", function () {
      it("should contain exactly limit items", function () {
        var cache = new LRUCache(10);
        for (var i = 0; i < 15; i++) { cache.set(i, i); }
        cache.size().should.equal(10);
      });

      it("should only contain the most recently used items", function () {
        var cache = new LRUCache(10);
        for (var i = 0; i < 15; i++) { cache.set(i, i); }
        for (i = 0; i < 5; i++) { should(cache.get(i)).equal(null); }
        for (i = 5; i < 15; i++) { should(cache.get(i)).equal(i); }
      });

      it("should remove items in LRU order", function () {
        var cache = new LRUCache(10);
        for (var i = 0; i < 8; i++) { cache.set(i, i); }
        cache.get(0);
        for (i = 8; i < 14; i++) { cache.set(i, i); }

        should(cache.get(0)).equal(0);
        should(cache.get(1)).equal(null);
      });
    });
  });
});

