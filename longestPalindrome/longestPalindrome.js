/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
 /* START SOLUTION */
  var length = string.length;
  var result = "";

  // Given starting center indices,
  // find the longest centered palindrome
  var centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length
           && string[left] === string[right]) {
      left--;
      right++;
    }

    return string.slice(left+1, right);
  };

  // Loop through the whole string,
  // checking for palindromes
    for (var i = 0; i < length; i++) {
      var oddPal = centeredPalindrome(i - 1, i + 1);
      var evenPal = centeredPalindrome(i, i + 1);

     if (oddPal.length > result.length)
       result = oddPal;
     if (evenPal.length > result.length)
       result = evenPal;
    }
  return result;
 /* END SOLUTION */
};
