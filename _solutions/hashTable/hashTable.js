/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(/*...*/ /* START SOLUTION */ key, value /* END SOLUTION */){
    // TODO: implement `insert()`
    /* START SOLUTION */

    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
    }
    /* END SOLUTION */
  };

  result.retrieve = function(/*...*/ /* START SOLUTION */ key /* END SOLUTION */){
    // TODO: implement `retrieve()`
    /* START SOLUTION */
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
    /* END SOLUTION */
  };

  result.remove = function(/*...*/ /* START SOLUTION */ key /* END SOLUTION */){
    // TODO: implement `remove()`
    /* START SOLUTION */
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        return value;
      }
    }
    /* END SOLUTION */
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
