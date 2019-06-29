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

describe('makeChange()', function() {
  it('should exist', function(){
    should.exist(makeChange)
  });

  it('should be a function', function(){
    makeChange.should.be.a.Function;
  });

  function makeChangeTestFunction(input, output){
    // NOTE: students will see the contents of the `test` function if their 
    // code doesn't pass the test
    eval(function test(){
      // your makeChange function should return `__output__` when given `__input__`
      return makeChange(__input__).should.equal(__output__);
    }.toString().replace(/\_\_input\_\_/g, input).replace(/\_\_output\_\_/g, output));
    return test;
  }

  function addTest(input, output){
    it('should return ' + output + ' for makeChange(' + input + ')', makeChangeTestFunction(input, output));
  }

  // this adds a test for every possible input/output pair that the students
  // will see formatted and pretty as if all of these tests were hand written
  var input_output_pairs = inputOutputPairs();
  for(var i  = 0; i < input_output_pairs.length; i++){
    addTest(input_output_pairs[i][0], input_output_pairs[i][1]);
  }
});

function inputOutputPairs(){
  return [[1,1],[2,2],[3,2],[4,3],[5,4],[6,5],[7,6],[8,7], [9,8],[10,11]
  , [11,12],[12,15],[13,16],[14,19],[15,22],[16,25],[17,28],[18,31],[19,34]
  , [20,41],[21,44],[22,51],[23,54],[24,61],[25,68],[26,75],[27,82],[28,89]
  , [29,96],[30,109],[31,116],[32,129],[33,136],[34,149],[35,162],[36,175]
  , [37,188],[38,201],[39,214],[40,236],[41,249],[42,271],[43,284],[44,306]
  , [45,328],[46,350],[47,372],[48,394],[49,416],[50,451],[51,473],[52,508]
  , [53,530],[54,565],[55,600],[56,635],[57,670],[58,705],[59,740],[60,793]
  , [61,828],[62,881],[63,916],[64,969],[65,1022],[66,1075],[67,1128],[68,1181]
  , [69,1234],[70,1311],[71,1364],[72,1441],[73,1494],[74,1571],[75,1648]
  , [76,1725],[77,1802],[78,1879],[79,1956],[80,2064],[81,2141]
  , [82,2249],[83,2326],[84,2434],[85,2542],[86,2650],[87,2758],[88,2866]
  , [89,2974],[90,3121],[91,3229],[92,3376],[93,3484],[94,3631],[95,3778]
  , [96,3925],[97,4072],[98,4219],[99,4366],[100,4563],[101,4710],[102,4907]
  , [103,5054],[104,5251],[105,5448],[106,5645],[107,5842],[108,6039],[109,6236]
  , [110,6495],[111,6692],[112,6951],[113,7148],[114,7407],[115,7666],[116,7925]
  , [117,8184],[118,8443],[119,8702],[120,9038],[121,9297],[122,9633],[123,9892]
  , [124,10228],[125,10564],[126,10900],[127,11236],[128,11572],[129,11908]
  , [130,12337],[131,12673],[132,13102],[133,13438],[134,13867],[135,14296]
  , [136,14725],[137,15154],[138,15583],[139,16012],[140,16553],[141,16982]
  , [142,17523],[143,17952],[144,18493],[145,19034],[146,19575],[147,20116]
  , [148,20657],[149,21198],[150,21873],[151,22414],[152,23089],[153,23630]
  , [154,24305],[155,24980],[156,25655],[157,26330],[158,27005],[159,27680]
  , [160,28514],[161,29189],[162,30023],[163,30698],[164,31532],[165,32366]
  , [166,33200],[167,34034],[168,34868],[169,35702],[170,36723],[171,37557]
  , [172,38578],[173,39412],[174,40433],[175,41454],[176,42475],[177,43496]
  , [178,44517],[179,45538],[180,46777],[181,47798],[182,49037],[183,50058]
  , [184,51297],[185,52536],[186,53775],[187,55014],[188,56253],[189,57492]
  , [190,58983],[191,60222],[192,61713],[193,62952],[194,64443],[195,65934]
  , [196,67425],[197,68916],[198,70407],[199,71898],[200,73682], [0,1]];
}
