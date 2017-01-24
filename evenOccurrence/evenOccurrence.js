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



var evenOccurrence = function() {

	return 'Hello';


};

var array = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];

var result = evenOccurrence(array);

console.log(result);













































// var evenOccurrence = function(arr) {
//   var storage = {};
//   arr.forEach(item => storage[item] = !storage[item]);
//   return arr.reduce((acc, item) => {
//     if (!acc && !storage[item]) return item;
//     else return acc;
//   }, null);
// };
