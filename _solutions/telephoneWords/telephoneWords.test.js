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

describe('telephoneWords', function() {
  it('should exist', function(){
    should.exist(telephoneWords);
  });
  it('should be a function', function() {
    telephoneWords.should.be.a.Function;
  });
  it('should return an array', function() {
    var result = telephoneWords('1234');
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });
  it('should return one permutation for 0001', function () {
    telephoneWords('0001').should.have.length(1);
    telephoneWords('0001').should.include('0001');
  });
  it('should return three permutations for 0002', function () {
    var answer = ['000A','000B','000C'];
    var result = telephoneWords('0002');
    result.should.have.length(answer.length);
    for (var i = 0; i < answer.length; i++) {
      result.should.include(answer[i]);
    }
  });
  it('should return nine permutations for 1123', function () {
    var answer = ['11AD','11BD','11CD','11AE','11BE','11CE','11AF','11BF','11CF'];
    var result = telephoneWords('1123');
    result.should.have.length(answer.length);
    for (var i = 0; i < answer.length; i++) {
      result.should.include(answer[i]);
    }
  });
  it('should return 27 permutations for 1234', function () {
    var answer = ['1ADG','1ADH','1ADI','1AEG','1AEH','1AEI','1AFG','1AFH','1AFI','1BDG','1BDH','1BDI','1BEG','1BEH','1BEI','1BFG','1BFH','1BFI','1CDG','1CDH','1CDI','1CEG','1CEH','1CEI','1CFG','1CFH','1CFI'];
    var result = telephoneWords('1234');
    result.should.have.length(answer.length);
    for (var i = 0; i < answer.length; i++) {
      result.should.include(answer[i]);
    }
  });
  it('should return 144 permutations for 5987', function () {
    // don't forget, some keys have 4 letters!
    // independently verified by http://www.ps.missouri.edu/rickspage/ConvertPhoneNumber.html
    var answer = ['JWTP', 'JWTQ', 'JWTR', 'JWTS', 'JWUP', 'JWUQ', 'JWUR', 'JWUS', 'JWVP', 'JWVQ', 'JWVR', 'JWVS', 'JXTP', 'JXTQ', 'JXTR', 'JXTS', 'JXUP', 'JXUQ', 'JXUR', 'JXUS', 'JXVP', 'JXVQ', 'JXVR', 'JXVS', 'JYTP', 'JYTQ', 'JYTR', 'JYTS', 'JYUP', 'JYUQ', 'JYUR', 'JYUS', 'JYVP', 'JYVQ', 'JYVR', 'JYVS', 'JZTP', 'JZTQ', 'JZTR', 'JZTS', 'JZUP', 'JZUQ', 'JZUR', 'JZUS', 'JZVP', 'JZVQ', 'JZVR', 'JZVS', 'KWTP', 'KWTQ', 'KWTR', 'KWTS', 'KWUP', 'KWUQ', 'KWUR', 'KWUS', 'KWVP', 'KWVQ', 'KWVR', 'KWVS', 'KXTP', 'KXTQ', 'KXTR', 'KXTS', 'KXUP', 'KXUQ', 'KXUR', 'KXUS', 'KXVP', 'KXVQ', 'KXVR', 'KXVS', 'KYTP', 'KYTQ', 'KYTR', 'KYTS', 'KYUP', 'KYUQ', 'KYUR', 'KYUS', 'KYVP', 'KYVQ', 'KYVR', 'KYVS', 'KZTP', 'KZTQ', 'KZTR', 'KZTS', 'KZUP', 'KZUQ', 'KZUR', 'KZUS', 'KZVP', 'KZVQ', 'KZVR', 'KZVS', 'LWTP', 'LWTQ', 'LWTR', 'LWTS', 'LWUP', 'LWUQ', 'LWUR', 'LWUS', 'LWVP', 'LWVQ', 'LWVR', 'LWVS', 'LXTP', 'LXTQ', 'LXTR', 'LXTS', 'LXUP', 'LXUQ', 'LXUR', 'LXUS', 'LXVP', 'LXVQ', 'LXVR', 'LXVS', 'LYTP', 'LYTQ', 'LYTR', 'LYTS', 'LYUP', 'LYUQ', 'LYUR', 'LYUS', 'LYVP', 'LYVQ', 'LYVR', 'LYVS', 'LZTP', 'LZTQ', 'LZTR', 'LZTS', 'LZUP', 'LZUQ', 'LZUR', 'LZUS', 'LZVP', 'LZVQ', 'LZVR', 'LZVS'];
    var result = telephoneWords('5987');
    result.should.have.length(answer.length);
    for (var i = 0; i < answer.length; i++) {
      result.should.include(answer[i]);
    }
  });
});
