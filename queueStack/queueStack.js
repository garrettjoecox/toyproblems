/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function() {
};

Stack.prototype.push = function(item) {
};

Stack.prototype.pop = function() {
};

Stack.prototype.size = function() {
};

/**
  * Queue Class
  */
var Queue = function() {
  this.inbox = new Stack();
  this.outbox = new Stack();
};

Queue.prototype.enqueue = function(item) {
};

Queue.prototype.dequeue = function() {
};

Queue.prototype.size = function() {
};
