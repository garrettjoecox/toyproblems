/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  /* START SOLUTION */
  var mem = {}, c;
  for(var i = 0; i < string.length; i++){
    c = string[i];
    if(!mem[c]) mem[c] = 1;
    else mem[c]++;
  }
  for(i = 0; i < string.length; i++){
    c = string[i];
    if(mem[c] === 1) return c;
  }
  return null;
  /* END SOLUTION */
};
