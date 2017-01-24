/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  /* START SOLUTION */
  var hash = {}, i;
  // hash of not-even characters
  for(i=0; i < arr.length; i++) {
    hash[arr[i]] = !hash[arr[i]];
  }
  // return the first even occurrence
  for(i=0; i < arr.length; i++) {
    if(!hash[arr[i]]) return arr[i];
  }
  return null;
  /* END SOLUTION */
};
