// You won't be able to do this with Mocha.
var should = require('should');

var testURL = "http://toy-problems.hackreactor.com:3003/jsonparty";

describe('jsonpRequest', function(){
  it('should be defined', function(){
    should.exist(jsonpRequest);
  });

  it('should be a function', function(){
    jsonpRequest.should.be.a.Function;
  });

  it('should take two arguments', function(){
    jsonpRequest.length.should.equal(2);
  });

  // This test fails on the solution code and it's not clear
  // what value it's adding.  Leaving it here so that if someone
  // understands it they can fix it.  If not, lets delete
  // - mathew@hackreactor.com
  //
  // This goes first to avoid opaque timeouts later on
  // it('should not use XMLHttpRequest', function (done) {
  //   // Cross-origin restrictions prevent a native XHR call from reading from this API.
  //   // This test is just a helpful reminder.
  //   var _xhr = XMLHttpRequest;
  //   window.XMLHttpRequest = function () {
  //      should.fail(null,null,"You can't use XHR here!",null)
  //   };
  //   jsonpRequest(testURL, function () {
  //     window.XMLHttpRequest = _xhr;
  //     done();
  //   });
  // });

  it('should call the callback', function(done){
    jsonpRequest(testURL, function () {
      done();
    });
  });

  it('should pass data to the callback', function(done){
    jsonpRequest(testURL, function (data) {
      done();
      should.exist(data);
    });
  });

  describe('"response" field', function () {
    it('should be correct', function (done) {
      jsonpRequest(testURL, function (result) {
        should.exist(result.response);
        result.response.should.equal("Aw yeah, now we're JSONPartying");
        done();
      });
    });
  });

  it('should not return the same thing twice in a row', function(done){
    jsonpRequest(testURL, function (result1) {
      setTimeout(function(){
        jsonpRequest(testURL, function (result2) {
          // Check that random numbers, spirit animals, and timestamps aren't the same
          result1.should.not.eql(result2);
          done();
        });
      },0);
      //whoooaaa crazy timeout!! Without this timeout,
      //a WebKit bug will result in only one request being made to the server.
    });
  });

  it('should not return the same thing if called many times in a row very quickly', function(done){
    var total = 10;
    // This callback confirms that every subsequent call has a valid and unique result
    var results = [];
    var verify = function (result) {
      result.response.should.equal("Aw yeah, now we're JSONPartying");
      for (var i = 0; i < results.length; i++) {
        results.should.not.eql(results[i]);
      }
      results.push(result);
      if (results.length === total) {
        done();
      }
    };
    // Call jsonpRequest 10 times in a row without waiting for a response
    for (var i = 0; i < total; i++) {
      jsonpRequest(testURL, verify);
    }
  });

});
