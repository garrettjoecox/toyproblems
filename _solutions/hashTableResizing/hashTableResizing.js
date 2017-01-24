/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.insert = function(/*...*/ /* START SOLUTION */ key, value /* END SOLUTION */){
    // TODO: implement `insert`
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
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
    /* END SOLUTION */
  };

  result.retrieve = function(/*...*/ /* START SOLUTION */ key /* END SOLUTION */){
    // TODO: implement `retrieve`
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
    // TODO: implement `remove`
    /* START SOLUTION */
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
    /* END SOLUTION */
  };

  /* START SOLUTION */
  var resizing = false;
  function resize(newSize){
    // collect all the pairs
    if(!resizing){
      resizing = true;
      var pairs = [];
      for(var i = 0; i < storage.length; i++){
        if(!storage[i]) continue;
        for(var j = 0; j < storage[i].length; j++){
          if(!storage[i][j]) continue;
          pairs.push(storage[i][j]);
        }
      }
      storageLimit = newSize;
      storage = [];
      size = 0;
      for(var i = 0; i < pairs.length; i++){
        result.insert(pairs[i][0], pairs[i][1]);
      }
      resizing = false;
    }
    /* END SOLUTION */
  }

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
