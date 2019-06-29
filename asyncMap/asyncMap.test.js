'use strict';
var should = require('should');
var vm = require('vm');
var fs = require('fs');


/* If this test is being run on a server it should be ONLY to test the
 * provided solutions
 */
if(typeof window === 'undefined'){
  /* Looks for a file with the same name as this one but with
   * `.test.js` replaced with `.js`
   */
  var filename = __filename.replace(/\.test\.js$/, '.js');
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

describe('asyncMap', function() {

  it('should exist', function(){
    should.exist(asyncMap);
  });

  it('should be a function', function(){
    asyncMap.should.be.a.Function;
  });

  it('should take two arguments', function(){
    asyncMap.length.should.equal(2);
  });

  it('should pass the completed tasks to its callback', function(){

    // These functions aren't really asynchronous, but for the purposes of testing it works.
    function wait2For2(callback){
      setTimeout(function () {
        callback(2);
      }, 200);
    }

    function wait3For1(callback){
      setTimeout(function(){
        callback(1);
      }, 300);
    }

    var res;
    asyncMap([wait2For2, wait3For1], function(arr){
      res = arr;
      /* This should work regardless of order because of
       * the time it takes to execute these 2 functions
       */
      res.should.equal([2,1]);
      res.length.should.equal(2);
      done();
    });

  });

  it('should pass the completed tasks to its callback in the correct order', function(){

    function wait2For2(callback){
      setTimeout(function(){
        callback(2);
      }, 200);
    }

    function wait3For1(callback){
      setTimeout(function(){
        callback(1);
      }, 300);
    }

    var res;
    asyncMap([wait3For1, wait2For2], function(arr){
      res = arr;
      res.should.equal([3,1]);
      done();
    });

  });

  it('should handle more than two async functions in the correct order', function(){
    function wait2For2(callback){
      setTimeout(function(){
        callback(2);
      }, 200);
    }

    function wait5For4(callback){
      setTimeout(function(){
        callback(4);
      }, 500);
    }

    function wait1For3(callback){
      setTimeout(function(){
        callback(3);
      }, 100);
    }

    function wait3For1(callback){
      setTimeout(function(){
        callback(1);
      }, 300);
    }

    function wait1For5(callback){
      setTimeout(function(){
        callback(5);
      }, 100);
    }

    var res;
    asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(arr){
      res = arr;
      res.should.equal([1,2,3,4,5]);
      done();
    });

  });

});
