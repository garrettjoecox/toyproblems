/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  /* START SOLUTION */
  var upperLimit = Math.sqrt(Math.abs(n));
  if(n === 1) return false; // `1` is not prime
  for (var i = 2; i <= upperLimit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
  /* END SOLUTION */
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  /* START SOLUTION */
  var current = 2; var primes = range(0, end + 1);
  // While we haven't found all the primes.
  while (current < end) {
    // mark all multiples of current as not prime
    for (var i = current + current; i <= end; i += current) {
      // null means not prime, a number means prime
      primes[i] = null;
    }
    // find the next current
    do {
      // Advance current at least once
      current += 1;
    // Then continue to advance it until we hit a prime number or we are out of
    // range.
    } while (!primes[current] && current <= end);
  }
  // Filter out all values that aren't prime and aren't in our range
  return primes.slice(2).filter(function (val) { return val && val >= start; });
  /* END SOLUTION */
};

/* START SOLUTION */
var range = function (start, end) {
  var result = [];
  for (var i = start; i < end; i++) { result.push(i); }
  return result;
};
/* END SOLUTION */
