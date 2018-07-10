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

var evenOccurrence = function(array) {
  const amounts = {};
  array.forEach(n => {
    amounts[n] = amounts[n] ? amounts[n] + 1 : 1;
  });

  return array.reduce((first, n) => {
    if (first) return first;
    return amounts[n] % 2 ? null : n;
  }, null);
};
