/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  /* START SOLUTION */
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;

  for(var i = 0; i < array.length; i ++) {
    currentSum += array[i];

    if(maxSum < currentSum) {
      maxSum = currentSum;
    }

    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
  /* END SOLUTION */
};