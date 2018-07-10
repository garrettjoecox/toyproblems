/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

const bracketsMap = {
  ']': '[',
  '}': '{',
  ')': '(',
};
const openBrackets = Object.keys(bracketsMap).map(i => bracketsMap[i]);

var balancedParens = function(input) {
  return !!input.split('').reduce((acc, char) => {
    if (!acc) return acc;

    if (openBrackets.includes(char)) {
      acc.push(char);
    } else if (bracketsMap[char] && acc.pop() !== bracketsMap[char]) {
      return false;
    }

    return acc;
  }, []);
};
