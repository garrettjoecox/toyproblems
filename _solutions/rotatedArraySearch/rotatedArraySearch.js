/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  /* START SOLUTION */
  var left = 0, right = rotated.length - 1;

  // Just a straight binary search.
  while (left <= right) {
    var middle = Math.floor((right + left) / 2);

    // We have found our target.
    if (rotated[middle] === target) { return middle; }

    // The clever part starts here:
    if (rotated[left] <= rotated[middle]) {
      // If the middle element is greater than the element to the left
      // of it, then that means that the bottom half is strictly increasing
      // from left to middle, i.e. it is sorted and we can just do a normal
      // binary search.

      // Is the target in this range?
      if (rotated[left] <= target && target < rotated[middle]) {
        // 'recurse' down this side
        right = middle - 1;
      } else {
        // 'recurse' down the other side
        left = middle + 1;
      }
    } else {
      // This means that the *top* half must be sorted, because
      // there can only be one place in the entire array where
      // the order is not sorted, and it's on the bottom half.

      if (rotated[middle] < target && target <= rotated[right]) {
        // 'recurse' down this side
        left = middle + 1;
      } else {
        // 'recurse' down the other side
        right = middle - 1;
      }

    }
  }

  // If we got here, that means that the target is not in the array, so:
  return null;
  /* END SOLUTION */
};

