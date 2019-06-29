/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
/* START SOLUTION */
// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};
/* END SOLUTION */

var largestProductOfThree = function(array) {
  /* START SOLUTION */
  // Make a copy of the input array and sort it numerically
  array = array.slice().sortAscending();

  var secondFromLast = array[array.length - 2],
      thirdFromLast = array[array.length - 3];

  return array[array.length - 1] * Math.max(secondFromLast * thirdFromLast, array[0] * array[1]);
  /* ELSE
  // TODO: everything
  END SOLUTION */
};
