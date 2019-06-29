/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  /* START SOLUTION */
  var storage = [];
  /* END SOLUTION */

  // add an item to the top of the stack
  this.push = function(){
    /* START SOLUTION */
    return storage.push.apply(storage, arguments);
    /* END SOLUTION */
  };

  // remove an item from the top of the stack
  this.pop = function(){
    /* START SOLUTION */
    return storage.pop.apply(storage, arguments);
    /* END SOLUTION */
  };

  // return the number of items in the stack
  this.size = function(){
    /* START SOLUTION */
    return storage.length;
    /* END SOLUTION */
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(){
    /* START SOLUTION */
    inbox.push.apply(inbox, arguments);
    /* END SOLUTION */
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    /* START SOLUTION */
    if(outbox.size() === 0){
      while(inbox.size() !== 0){
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
    /* END SOLUTION */
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function(){
    /* START SOLUTION */
    return inbox.size() + outbox.size();
    /* END SOLUTION */
    // TODO: implement `size`
  };
};
