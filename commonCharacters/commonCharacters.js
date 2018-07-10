/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/*
  Loop through all characters for each provided string recording its existence

  return first provided string filtered by characters that exist in all arguments
*/

var commonCharacters = function(...args) {
  const existence = {};

  args.forEach((string, index) => {
    string.split('').forEach(char => {
      if (!existence[char]) existence[char] = {};
      existence[char][index] = true;
    });
  });

  return args[0]
    .split('')
    .filter(char => {
      return args.reduce((acc, a, index) => {
        if (!acc) return acc;

        return !!existence[char][index];
      }, true);
    })
    .join('');
};
