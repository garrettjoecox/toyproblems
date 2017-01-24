/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var storage = {};
  string.split('').forEach(char => storage[char] = storage.hasOwnProperty(char) ? false : true);
  return string.split('').reduce((a, c) => {
    if (!a && storage[c]) return c;
    else return a;
  }, null);
};
