/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // TODO: implement me!
  /* START SOLUTION */
  // fast solution
  var fibs = [0, 1];
  for(; n > 1; n--) {
    fibs.push(fibs.shift() + fibs[0]);
  }
  return fibs[n];
  /* END SOLUTION */
};


/* START SOLUTION */
// solow, recusrive (exponential time complexity) solution
// uncomment to make sure the tests fail for this case
// var nthFibonacci = function(n) {
//   // Your code here
//   return n < 2 ? n : nthFibonacci(n-1) + nthFibonacci(n-2);
// };
/* END SOLUTION */
