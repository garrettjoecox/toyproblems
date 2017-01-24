/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function() {
  this.storage = [];
};

Stack.prototype.push = function(item) {
  this.storage.push(item);
};

Stack.prototype.pop = function() {
  return this.storage.pop();
};

Stack.prototype.size = function() {
  return this.storage.length;
};

/**
  * Queue Class
  */
var Queue = function() {
  this.inbox = new Stack();
  this.outbox = new Stack();
};

Queue.prototype.enqueue = function(item) {
  this.inbox.push(item);
};

Queue.prototype.dequeue = function() {
  while (this.inbox.size()) this.outbox.push(this.inbox.pop());
  var popped = this.outbox.pop();
  while (this.outbox.size()) this.inbox.push(this.outbox.pop());
  return popped;
};

Queue.prototype.size = function() {
  return this.inbox.size();
};
