/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  /* START SOLUTION */
  function reduce(numerator, denominator) {
    var lowNum = Math.min(numerator, denominator);
    for (var i = lowNum; i > 0; i--) {
      if ( i > numerator || i > denominator) {
        return [numerator, denominator];
      }
      if ( numerator % i === 0 && denominator % i === 0 ) {
        numerator /= i;
        denominator /= i;
      }
    }
    return [numerator, denominator];
  }

  var isNegative = number < 0;
  var string = number.toString();
  var split = string.split('.');
  if(isNegative) number = number * -1;
  var denominator;
  if (split[1]) {
    denominator = Math.pow(10, split[1].length);
  } else {
    denominator = 1;
  }
  var numerator = Math.round(number * denominator);
  return (isNegative ? '-' : '') + reduce(numerator, denominator).join('/');
  /* END SOLUTION */
};
