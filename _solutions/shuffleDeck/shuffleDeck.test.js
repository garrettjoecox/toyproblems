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

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

describe('shuffleDeck', function() {
  it('should exist', function(){
    should.exist(shuffleDeck);
  });

  it('should be a function', function() {
    shuffleDeck.should.be.a.Function;
  });

  it('should return an array', function() {
    var result = shuffleDeck(orderedDeck());
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with every card in the deck', function(){
    var input = orderedDeck();
    var control = orderedDeck();
    var result = shuffleDeck(input);
    // check that every expected card is in the result deck
    for (var i = 0; i < control.length; i++) {
      result.should.contain(control[i]);
    }
    // check that no unexpected cards are in the result deck
    for (var i = 0; i < result.length; i++) {
      control.should.contain(result[i]);
    }
  });

  it('should not return the deck in input order', function(){
    var input = orderedDeck();
    var control = orderedDeck();
    var result = shuffleDeck(input);
    // check that all cards are not present in the same order
    result.should.not.eql(control);
    // It is theoretically conceivable, but statistically impossible that this could happen randomly.
    // (P = 1 in 52!)
  });

  it('should not return the deck in the same order twice', function(){
    var input1 = orderedDeck();
    var input2 = orderedDeck();
    var result1 = shuffleDeck(input1);
    var result2 = shuffleDeck(input2);

    // check that all cards are not present in the same order
    result1.should.not.eql(result2);
    // It is theoretically conceivable, but statistically impossible that this could happen randomly.
    // (P = 1 in 52!)
  });

  it('should not have any bias from a uniform distribution', function () {
    // This one is tricky. We're going to verify that your algorithm returns a deck which "looks random".
    var deck = orderedDeck();
    // Keep a table of how often each card appears in each deck position...
    var cardPositionCounts = {};
    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]] = {};
      for (var j = 0; j < deck.length; j++) {
        cardPosition[j] = 0;
      }
    }
    // ...over the course of five hundred shuffles
    var iterations = 52 * 10;
    for (var i = 0; i < iterations; i++) {
      deck = orderedDeck();
      var randomDeck = shuffleDeck(deck);
      for (var j = 0; j < randomDeck.length; j++) {
        cardPositionCounts[randomDeck[j]][j] += 1;
      }
    }
    // The result should not betray any obvious statistical bias.
    deck = orderedDeck();
    // The expected number of occurrences for a particular card in a particular index is
    // iterations/52 = 10
    var expected = 10,
      chi2 = 0;
    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]];
      for (var j = 0; j < deck.length; j++) {
        // calculate chi-squared test
        chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
      }
    }
    // quick and dirty statistical test:
    // if your shuffles are uniformly distributed, chi-squared should be roughly 52^2
    chi2.should.be.approximately(52*52, 52*10);
    return chi2;
  });

  it('EXTRA CREDIT: for large N, should not have any bias from a uniform distribution', function () {
    // We perform this test on an array of 1000 integers.
    // (Your function must shuffle an arbitrary array to pass this test.)
    // If your algorithm times out here, it is not running in linear time.
    var orderedArray = function () {
      var output = [];
      for (var i = 0; i < 1000; i++) {
        output.push(i);
      }
      return output;
    };
    var deck = orderedArray();
    // Keep a table of how often each integer appears in each array position...
    var cardPositionCounts = {};
    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]] = {};
      for (var j = 0; j < deck.length; j++) {
        cardPosition[j] = 0;
      }
    }
    // ...over the course of five thousand shuffles
    var iterations = 1000 * 5;
    for (var i = 0; i < iterations; i++) {
      deck = orderedArray();
      var randomDeck = shuffleDeck(deck);
      for (var j = 0; j < randomDeck.length; j++) {
        cardPositionCounts[randomDeck[j]][j] += 1;
      }
    }
    // The result should not betray any obvious statistical bias.
    deck = orderedArray();
    // The expected number of occurrences for a particular card in a particular index is
    // iterations/1000 = 1
    var expected = 5,
      chi2 = 0;
    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]];
      for (var j = 0; j < deck.length; j++) {
        // calculate chi-squared test
        chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
      }
    }
    // quick and dirty statistical test:
    // if your shuffles are uniformly distributed, chi-squared should be roughly 1000^2
    chi2.should.be.approximately(1000*1000, 1000*10);
  });
});
