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

describe('rockPaperScissors', function(){
  it('should be defined', function(){
    should.exist(rockPaperScissors);
  });
  it('should be a function', function(){
    rockPaperScissors.should.be.a.Function;
  });
  it('should return an array', function(){
    rockPaperScissors().should.be.an.instanceOf(Array)
  });
  it('should return an array of arrays', function(){
    should.exist(rockPaperScissors()[0]);
    rockPaperScissors()[0].should.be.an.instanceOf(Array);
  });
  it('should contain every throw', function(){
    var expected = [["rock","rock","rock"],["rock","rock","paper"],
      ["rock","rock","scissors"],["rock","paper","rock"],
      ["rock","paper","paper"],["rock","paper","scissors"],
      ["rock","scissors","rock"],["rock","scissors","paper"],
      ["rock","scissors","scissors"],["paper","rock","rock"],
      ["paper","rock","paper"],["paper","rock","scissors"],
      ["paper","paper","rock"],["paper","paper","paper"],
      ["paper","paper","scissors"],["paper","scissors","rock"],
      ["paper","scissors","paper"],["paper","scissors","scissors"],
      ["scissors","rock","rock"],["scissors","rock","paper"],
      ["scissors","rock","scissors"],["scissors","paper","rock"],
      ["scissors","paper","paper"],["scissors","paper","scissors"],
      ["scissors","scissors","rock"],["scissors","scissors","paper"],
      ["scissors","scissors","scissors"]];
    var result = rockPaperScissors();
    result.length.should.equal(expected.length);
    var expected_hash = {}, result_hash = {};
    for(var i = 0; i < expected.length; i++){
      expected_hash[expected[i].join(':')] = true;
    }
    for(i = 0; i < result.length; i++){
      result_hash[result[i].join(':')] = true;
    }
    var expected_keys = Object.keys(expected_hash);
    for(i = 0; i < expected_keys.length; i++){
      result_hash[expected_keys[i]].should.be.true;
    }
    var result_keys = Object.keys(result_hash);
    for(i = 0; i < result_keys.length; i++){
      expected_hash[result_keys[i]].should.be.true;
    }
  });
  describe('EXTRA CREDIT', function () {
    it('should take an argument', function () {
      rockPaperScissors.length.should.be.above(0);
    });
    it('should return results for rockPaperScissors(2)', function(){
      var expected = [ [ 'rock', 'rock' ],
        [ 'rock', 'paper' ],
        [ 'rock', 'scissors' ],
        [ 'paper', 'rock' ],
        [ 'paper', 'paper' ],
        [ 'paper', 'scissors' ],
        [ 'scissors', 'rock' ],
        [ 'scissors', 'paper' ],
        [ 'scissors', 'scissors' ] ];
      var result = rockPaperScissors(2);
      result.length.should.equal(expected.length);
      var expected_hash = {}, result_hash = {};
      for(var i = 0; i < expected.length; i++){
        expected_hash[expected[i].join(':')] = true;
      }
      for(i = 0; i < result.length; i++){
        result_hash[result[i].join(':')] = true;
      }
      var expected_keys = Object.keys(expected_hash);
      for(i = 0; i < expected_keys.length; i++){
        result_hash[expected_keys[i]].should.be.true;
      }
      var result_keys = Object.keys(result_hash);
      for(i = 0; i < result_keys.length; i++){
        expected_hash[result_keys[i]].should.be.true;
      }
    });
    it('should return results for rockPaperScissors(1)', function(){
      var expected = [ [ 'rock' ], [ 'paper' ], [ 'scissors' ] ];
      var result = rockPaperScissors(1);
      result.length.should.equal(expected.length);
      var expected_hash = {}, result_hash = {};
      for(var i = 0; i < expected.length; i++){
        expected_hash[expected[i].join(':')] = true;
      }
      for(i = 0; i < result.length; i++){
        result_hash[result[i].join(':')] = true;
      }
      var expected_keys = Object.keys(expected_hash);
      for(i = 0; i < expected_keys.length; i++){
        result_hash[expected_keys[i]].should.be.true;
      }
      var result_keys = Object.keys(result_hash);
      for(i = 0; i < result_keys.length; i++){
        expected_hash[result_keys[i]].should.be.true;
      }
    });
    it('should return results for rockPaperScissors(5)', function () {
      var expected = expectedOutputForRockPaperScissorsOf5();
      var result = rockPaperScissors(5);
      result.length.should.equal(expected.length);
      var expected_hash = {}, result_hash = {};
      for(var i = 0; i < expected.length; i++){
        expected_hash[expected[i].join(':')] = true;
      }
      for(i = 0; i < result.length; i++){
        result_hash[result[i].join(':')] = true;
      }
      var expected_keys = Object.keys(expected_hash);
      for(i = 0; i < expected_keys.length; i++){
        result_hash[expected_keys[i]].should.be.true;
      }
      var result_keys = Object.keys(result_hash);
      for(i = 0; i < result_keys.length; i++){
        expected_hash[result_keys[i]].should.be.true;
      }
    });
  });
});

function expectedOutputForRockPaperScissorsOf5(){
  return [ [ 'rock', 'rock', 'rock', 'rock', 'rock' ],
  [ 'rock', 'rock', 'rock', 'rock', 'paper' ],
  [ 'rock', 'rock', 'rock', 'rock', 'scissors' ],
  [ 'rock', 'rock', 'rock', 'paper', 'rock' ],
  [ 'rock', 'rock', 'rock', 'paper', 'paper' ],
  [ 'rock', 'rock', 'rock', 'paper', 'scissors' ],
  [ 'rock', 'rock', 'rock', 'scissors', 'rock' ],
  [ 'rock', 'rock', 'rock', 'scissors', 'paper' ],
  [ 'rock', 'rock', 'rock', 'scissors', 'scissors' ],
  [ 'rock', 'rock', 'paper', 'rock', 'rock' ],
  [ 'rock', 'rock', 'paper', 'rock', 'paper' ],
  [ 'rock', 'rock', 'paper', 'rock', 'scissors' ],
  [ 'rock', 'rock', 'paper', 'paper', 'rock' ],
  [ 'rock', 'rock', 'paper', 'paper', 'paper' ],
  [ 'rock', 'rock', 'paper', 'paper', 'scissors' ],
  [ 'rock', 'rock', 'paper', 'scissors', 'rock' ],
  [ 'rock', 'rock', 'paper', 'scissors', 'paper' ],
  [ 'rock', 'rock', 'paper', 'scissors', 'scissors' ],
  [ 'rock', 'rock', 'scissors', 'rock', 'rock' ],
  [ 'rock', 'rock', 'scissors', 'rock', 'paper' ],
  [ 'rock', 'rock', 'scissors', 'rock', 'scissors' ],
  [ 'rock', 'rock', 'scissors', 'paper', 'rock' ],
  [ 'rock', 'rock', 'scissors', 'paper', 'paper' ],
  [ 'rock', 'rock', 'scissors', 'paper', 'scissors' ],
  [ 'rock', 'rock', 'scissors', 'scissors', 'rock' ],
  [ 'rock', 'rock', 'scissors', 'scissors', 'paper' ],
  [ 'rock', 'rock', 'scissors', 'scissors', 'scissors' ],
  [ 'rock', 'paper', 'rock', 'rock', 'rock' ],
  [ 'rock', 'paper', 'rock', 'rock', 'paper' ],
  [ 'rock', 'paper', 'rock', 'rock', 'scissors' ],
  [ 'rock', 'paper', 'rock', 'paper', 'rock' ],
  [ 'rock', 'paper', 'rock', 'paper', 'paper' ],
  [ 'rock', 'paper', 'rock', 'paper', 'scissors' ],
  [ 'rock', 'paper', 'rock', 'scissors', 'rock' ],
  [ 'rock', 'paper', 'rock', 'scissors', 'paper' ],
  [ 'rock', 'paper', 'rock', 'scissors', 'scissors' ],
  [ 'rock', 'paper', 'paper', 'rock', 'rock' ],
  [ 'rock', 'paper', 'paper', 'rock', 'paper' ],
  [ 'rock', 'paper', 'paper', 'rock', 'scissors' ],
  [ 'rock', 'paper', 'paper', 'paper', 'rock' ],
  [ 'rock', 'paper', 'paper', 'paper', 'paper' ],
  [ 'rock', 'paper', 'paper', 'paper', 'scissors' ],
  [ 'rock', 'paper', 'paper', 'scissors', 'rock' ],
  [ 'rock', 'paper', 'paper', 'scissors', 'paper' ],
  [ 'rock', 'paper', 'paper', 'scissors', 'scissors' ],
  [ 'rock', 'paper', 'scissors', 'rock', 'rock' ],
  [ 'rock', 'paper', 'scissors', 'rock', 'paper' ],
  [ 'rock', 'paper', 'scissors', 'rock', 'scissors' ],
  [ 'rock', 'paper', 'scissors', 'paper', 'rock' ],
  [ 'rock', 'paper', 'scissors', 'paper', 'paper' ],
  [ 'rock', 'paper', 'scissors', 'paper', 'scissors' ],
  [ 'rock', 'paper', 'scissors', 'scissors', 'rock' ],
  [ 'rock', 'paper', 'scissors', 'scissors', 'paper' ],
  [ 'rock', 'paper', 'scissors', 'scissors', 'scissors' ],
  [ 'rock', 'scissors', 'rock', 'rock', 'rock' ],
  [ 'rock', 'scissors', 'rock', 'rock', 'paper' ],
  [ 'rock', 'scissors', 'rock', 'rock', 'scissors' ],
  [ 'rock', 'scissors', 'rock', 'paper', 'rock' ],
  [ 'rock', 'scissors', 'rock', 'paper', 'paper' ],
  [ 'rock', 'scissors', 'rock', 'paper', 'scissors' ],
  [ 'rock', 'scissors', 'rock', 'scissors', 'rock' ],
  [ 'rock', 'scissors', 'rock', 'scissors', 'paper' ],
  [ 'rock', 'scissors', 'rock', 'scissors', 'scissors' ],
  [ 'rock', 'scissors', 'paper', 'rock', 'rock' ],
  [ 'rock', 'scissors', 'paper', 'rock', 'paper' ],
  [ 'rock', 'scissors', 'paper', 'rock', 'scissors' ],
  [ 'rock', 'scissors', 'paper', 'paper', 'rock' ],
  [ 'rock', 'scissors', 'paper', 'paper', 'paper' ],
  [ 'rock', 'scissors', 'paper', 'paper', 'scissors' ],
  [ 'rock', 'scissors', 'paper', 'scissors', 'rock' ],
  [ 'rock', 'scissors', 'paper', 'scissors', 'paper' ],
  [ 'rock', 'scissors', 'paper', 'scissors', 'scissors' ],
  [ 'rock', 'scissors', 'scissors', 'rock', 'rock' ],
  [ 'rock', 'scissors', 'scissors', 'rock', 'paper' ],
  [ 'rock', 'scissors', 'scissors', 'rock', 'scissors' ],
  [ 'rock', 'scissors', 'scissors', 'paper', 'rock' ],
  [ 'rock', 'scissors', 'scissors', 'paper', 'paper' ],
  [ 'rock', 'scissors', 'scissors', 'paper', 'scissors' ],
  [ 'rock', 'scissors', 'scissors', 'scissors', 'rock' ],
  [ 'rock', 'scissors', 'scissors', 'scissors', 'paper' ],
  [ 'rock', 'scissors', 'scissors', 'scissors', 'scissors' ],
  [ 'paper', 'rock', 'rock', 'rock', 'rock' ],
  [ 'paper', 'rock', 'rock', 'rock', 'paper' ],
  [ 'paper', 'rock', 'rock', 'rock', 'scissors' ],
  [ 'paper', 'rock', 'rock', 'paper', 'rock' ],
  [ 'paper', 'rock', 'rock', 'paper', 'paper' ],
  [ 'paper', 'rock', 'rock', 'paper', 'scissors' ],
  [ 'paper', 'rock', 'rock', 'scissors', 'rock' ],
  [ 'paper', 'rock', 'rock', 'scissors', 'paper' ],
  [ 'paper', 'rock', 'rock', 'scissors', 'scissors' ],
  [ 'paper', 'rock', 'paper', 'rock', 'rock' ],
  [ 'paper', 'rock', 'paper', 'rock', 'paper' ],
  [ 'paper', 'rock', 'paper', 'rock', 'scissors' ],
  [ 'paper', 'rock', 'paper', 'paper', 'rock' ],
  [ 'paper', 'rock', 'paper', 'paper', 'paper' ],
  [ 'paper', 'rock', 'paper', 'paper', 'scissors' ],
  [ 'paper', 'rock', 'paper', 'scissors', 'rock' ],
  [ 'paper', 'rock', 'paper', 'scissors', 'paper' ],
  [ 'paper', 'rock', 'paper', 'scissors', 'scissors' ],
  [ 'paper', 'rock', 'scissors', 'rock', 'rock' ],
  [ 'paper', 'rock', 'scissors', 'rock', 'paper' ],
  [ 'paper', 'rock', 'scissors', 'rock', 'scissors' ],
  [ 'paper', 'rock', 'scissors', 'paper', 'rock' ],
  [ 'paper', 'rock', 'scissors', 'paper', 'paper' ],
  [ 'paper', 'rock', 'scissors', 'paper', 'scissors' ],
  [ 'paper', 'rock', 'scissors', 'scissors', 'rock' ],
  [ 'paper', 'rock', 'scissors', 'scissors', 'paper' ],
  [ 'paper', 'rock', 'scissors', 'scissors', 'scissors' ],
  [ 'paper', 'paper', 'rock', 'rock', 'rock' ],
  [ 'paper', 'paper', 'rock', 'rock', 'paper' ],
  [ 'paper', 'paper', 'rock', 'rock', 'scissors' ],
  [ 'paper', 'paper', 'rock', 'paper', 'rock' ],
  [ 'paper', 'paper', 'rock', 'paper', 'paper' ],
  [ 'paper', 'paper', 'rock', 'paper', 'scissors' ],
  [ 'paper', 'paper', 'rock', 'scissors', 'rock' ],
  [ 'paper', 'paper', 'rock', 'scissors', 'paper' ],
  [ 'paper', 'paper', 'rock', 'scissors', 'scissors' ],
  [ 'paper', 'paper', 'paper', 'rock', 'rock' ],
  [ 'paper', 'paper', 'paper', 'rock', 'paper' ],
  [ 'paper', 'paper', 'paper', 'rock', 'scissors' ],
  [ 'paper', 'paper', 'paper', 'paper', 'rock' ],
  [ 'paper', 'paper', 'paper', 'paper', 'paper' ],
  [ 'paper', 'paper', 'paper', 'paper', 'scissors' ],
  [ 'paper', 'paper', 'paper', 'scissors', 'rock' ],
  [ 'paper', 'paper', 'paper', 'scissors', 'paper' ],
  [ 'paper', 'paper', 'paper', 'scissors', 'scissors' ],
  [ 'paper', 'paper', 'scissors', 'rock', 'rock' ],
  [ 'paper', 'paper', 'scissors', 'rock', 'paper' ],
  [ 'paper', 'paper', 'scissors', 'rock', 'scissors' ],
  [ 'paper', 'paper', 'scissors', 'paper', 'rock' ],
  [ 'paper', 'paper', 'scissors', 'paper', 'paper' ],
  [ 'paper', 'paper', 'scissors', 'paper', 'scissors' ],
  [ 'paper', 'paper', 'scissors', 'scissors', 'rock' ],
  [ 'paper', 'paper', 'scissors', 'scissors', 'paper' ],
  [ 'paper', 'paper', 'scissors', 'scissors', 'scissors' ],
  [ 'paper', 'scissors', 'rock', 'rock', 'rock' ],
  [ 'paper', 'scissors', 'rock', 'rock', 'paper' ],
  [ 'paper', 'scissors', 'rock', 'rock', 'scissors' ],
  [ 'paper', 'scissors', 'rock', 'paper', 'rock' ],
  [ 'paper', 'scissors', 'rock', 'paper', 'paper' ],
  [ 'paper', 'scissors', 'rock', 'paper', 'scissors' ],
  [ 'paper', 'scissors', 'rock', 'scissors', 'rock' ],
  [ 'paper', 'scissors', 'rock', 'scissors', 'paper' ],
  [ 'paper', 'scissors', 'rock', 'scissors', 'scissors' ],
  [ 'paper', 'scissors', 'paper', 'rock', 'rock' ],
  [ 'paper', 'scissors', 'paper', 'rock', 'paper' ],
  [ 'paper', 'scissors', 'paper', 'rock', 'scissors' ],
  [ 'paper', 'scissors', 'paper', 'paper', 'rock' ],
  [ 'paper', 'scissors', 'paper', 'paper', 'paper' ],
  [ 'paper', 'scissors', 'paper', 'paper', 'scissors' ],
  [ 'paper', 'scissors', 'paper', 'scissors', 'rock' ],
  [ 'paper', 'scissors', 'paper', 'scissors', 'paper' ],
  [ 'paper', 'scissors', 'paper', 'scissors', 'scissors' ],
  [ 'paper', 'scissors', 'scissors', 'rock', 'rock' ],
  [ 'paper', 'scissors', 'scissors', 'rock', 'paper' ],
  [ 'paper', 'scissors', 'scissors', 'rock', 'scissors' ],
  [ 'paper', 'scissors', 'scissors', 'paper', 'rock' ],
  [ 'paper', 'scissors', 'scissors', 'paper', 'paper' ],
  [ 'paper', 'scissors', 'scissors', 'paper', 'scissors' ],
  [ 'paper', 'scissors', 'scissors', 'scissors', 'rock' ],
  [ 'paper', 'scissors', 'scissors', 'scissors', 'paper' ],
  [ 'paper', 'scissors', 'scissors', 'scissors', 'scissors' ],
  [ 'scissors', 'rock', 'rock', 'rock', 'rock' ],
  [ 'scissors', 'rock', 'rock', 'rock', 'paper' ],
  [ 'scissors', 'rock', 'rock', 'rock', 'scissors' ],
  [ 'scissors', 'rock', 'rock', 'paper', 'rock' ],
  [ 'scissors', 'rock', 'rock', 'paper', 'paper' ],
  [ 'scissors', 'rock', 'rock', 'paper', 'scissors' ],
  [ 'scissors', 'rock', 'rock', 'scissors', 'rock' ],
  [ 'scissors', 'rock', 'rock', 'scissors', 'paper' ],
  [ 'scissors', 'rock', 'rock', 'scissors', 'scissors' ],
  [ 'scissors', 'rock', 'paper', 'rock', 'rock' ],
  [ 'scissors', 'rock', 'paper', 'rock', 'paper' ],
  [ 'scissors', 'rock', 'paper', 'rock', 'scissors' ],
  [ 'scissors', 'rock', 'paper', 'paper', 'rock' ],
  [ 'scissors', 'rock', 'paper', 'paper', 'paper' ],
  [ 'scissors', 'rock', 'paper', 'paper', 'scissors' ],
  [ 'scissors', 'rock', 'paper', 'scissors', 'rock' ],
  [ 'scissors', 'rock', 'paper', 'scissors', 'paper' ],
  [ 'scissors', 'rock', 'paper', 'scissors', 'scissors' ],
  [ 'scissors', 'rock', 'scissors', 'rock', 'rock' ],
  [ 'scissors', 'rock', 'scissors', 'rock', 'paper' ],
  [ 'scissors', 'rock', 'scissors', 'rock', 'scissors' ],
  [ 'scissors', 'rock', 'scissors', 'paper', 'rock' ],
  [ 'scissors', 'rock', 'scissors', 'paper', 'paper' ],
  [ 'scissors', 'rock', 'scissors', 'paper', 'scissors' ],
  [ 'scissors', 'rock', 'scissors', 'scissors', 'rock' ],
  [ 'scissors', 'rock', 'scissors', 'scissors', 'paper' ],
  [ 'scissors', 'rock', 'scissors', 'scissors', 'scissors' ],
  [ 'scissors', 'paper', 'rock', 'rock', 'rock' ],
  [ 'scissors', 'paper', 'rock', 'rock', 'paper' ],
  [ 'scissors', 'paper', 'rock', 'rock', 'scissors' ],
  [ 'scissors', 'paper', 'rock', 'paper', 'rock' ],
  [ 'scissors', 'paper', 'rock', 'paper', 'paper' ],
  [ 'scissors', 'paper', 'rock', 'paper', 'scissors' ],
  [ 'scissors', 'paper', 'rock', 'scissors', 'rock' ],
  [ 'scissors', 'paper', 'rock', 'scissors', 'paper' ],
  [ 'scissors', 'paper', 'rock', 'scissors', 'scissors' ],
  [ 'scissors', 'paper', 'paper', 'rock', 'rock' ],
  [ 'scissors', 'paper', 'paper', 'rock', 'paper' ],
  [ 'scissors', 'paper', 'paper', 'rock', 'scissors' ],
  [ 'scissors', 'paper', 'paper', 'paper', 'rock' ],
  [ 'scissors', 'paper', 'paper', 'paper', 'paper' ],
  [ 'scissors', 'paper', 'paper', 'paper', 'scissors' ],
  [ 'scissors', 'paper', 'paper', 'scissors', 'rock' ],
  [ 'scissors', 'paper', 'paper', 'scissors', 'paper' ],
  [ 'scissors', 'paper', 'paper', 'scissors', 'scissors' ],
  [ 'scissors', 'paper', 'scissors', 'rock', 'rock' ],
  [ 'scissors', 'paper', 'scissors', 'rock', 'paper' ],
  [ 'scissors', 'paper', 'scissors', 'rock', 'scissors' ],
  [ 'scissors', 'paper', 'scissors', 'paper', 'rock' ],
  [ 'scissors', 'paper', 'scissors', 'paper', 'paper' ],
  [ 'scissors', 'paper', 'scissors', 'paper', 'scissors' ],
  [ 'scissors', 'paper', 'scissors', 'scissors', 'rock' ],
  [ 'scissors', 'paper', 'scissors', 'scissors', 'paper' ],
  [ 'scissors', 'paper', 'scissors', 'scissors', 'scissors' ],
  [ 'scissors', 'scissors', 'rock', 'rock', 'rock' ],
  [ 'scissors', 'scissors', 'rock', 'rock', 'paper' ],
  [ 'scissors', 'scissors', 'rock', 'rock', 'scissors' ],
  [ 'scissors', 'scissors', 'rock', 'paper', 'rock' ],
  [ 'scissors', 'scissors', 'rock', 'paper', 'paper' ],
  [ 'scissors', 'scissors', 'rock', 'paper', 'scissors' ],
  [ 'scissors', 'scissors', 'rock', 'scissors', 'rock' ],
  [ 'scissors', 'scissors', 'rock', 'scissors', 'paper' ],
  [ 'scissors', 'scissors', 'rock', 'scissors', 'scissors' ],
  [ 'scissors', 'scissors', 'paper', 'rock', 'rock' ],
  [ 'scissors', 'scissors', 'paper', 'rock', 'paper' ],
  [ 'scissors', 'scissors', 'paper', 'rock', 'scissors' ],
  [ 'scissors', 'scissors', 'paper', 'paper', 'rock' ],
  [ 'scissors', 'scissors', 'paper', 'paper', 'paper' ],
  [ 'scissors', 'scissors', 'paper', 'paper', 'scissors' ],
  [ 'scissors', 'scissors', 'paper', 'scissors', 'rock' ],
  [ 'scissors', 'scissors', 'paper', 'scissors', 'paper' ],
  [ 'scissors', 'scissors', 'paper', 'scissors', 'scissors' ],
  [ 'scissors', 'scissors', 'scissors', 'rock', 'rock' ],
  [ 'scissors', 'scissors', 'scissors', 'rock', 'paper' ],
  [ 'scissors', 'scissors', 'scissors', 'rock', 'scissors' ],
  [ 'scissors', 'scissors', 'scissors', 'paper', 'rock' ],
  [ 'scissors', 'scissors', 'scissors', 'paper', 'paper' ],
  [ 'scissors', 'scissors', 'scissors', 'paper', 'scissors' ],
  [ 'scissors', 'scissors', 'scissors', 'scissors', 'rock' ],
  [ 'scissors', 'scissors', 'scissors', 'scissors', 'paper' ],
  [ 'scissors', 'scissors', 'scissors', 'scissors', 'scissors' ] ];
}
