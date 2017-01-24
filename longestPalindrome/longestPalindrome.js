/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var longest = '';
  var length = string.length;
  for (var oi = 0; oi < length; oi++) {
    for (var ii = oi + 2; ii < length + 1; ii++) {
      var p = string.substring(oi, ii);
      if (p === p.split('').reverse().join('')) {
        if (p.length > longest.length) longest = p;
      }
    }
  }
  return longest;
};

console.log(longestPalindrome('My dad is a racecar athlete'));
