/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.
/* START SOLUTION */
var swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};
/* END SOLUTION */

var bubbleSort = function(array) {
  // Your code here.
  /* START SOLUTION */
  if (!Array.isArray(array)) {
    throw new TypeError("bubbleSort accepts only arrays");
  }

  var len = array.length;

  for (var i = 0; i < len; i++) {
    var swaps = 0;

    // Do j < len - 1 - i iterations so we don't consider the final (sorted)
    // element in the array in future iterations
    for (var j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps++;
        swap(j, j + 1, array);
      }
    }

    // If no swaps were done during this iteration, then the array is sorted
    // and we can bail out
    if (!swaps) { break; }
  }

  return array;
  /* END SOLUTION */
};
