/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  /* START SOLUTION */
  this.head = null;
  this.tail = null;
  /* END SOLUTION */
};

//write methods here!

LinkedList.prototype.addToTail = function(/*START SOLUTION*/value/*END SOLUTION*/){
  /* START SOLUTION */
  var newTail = this.makeNode(value);
  if ( !this.head ){ this.head = newTail; }
  if ( this.tail ){ this.tail.next = newTail; }
  this.tail = newTail;
  /* END SOLUTION */
};

LinkedList.prototype.removeHead = function(){
  /* START SOLUTION */
  var currentHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return currentHead.value;
  /* END SOLUTION */
};

LinkedList.prototype.contains = function(/*START SOLUTION*/target/*END SOLUTION*/){
  /* START SOLUTION */
  var node = this.head;
  while ( node ){
    if ( node.value === target ){ return true; }
    node = node.next;
  }
  return false;
  /* END SOLUTION */
};

LinkedList.prototype.makeNode = function(/*START SOLUTION*/value/*END SOLUTION*/){
  /* START SOLUTION */
  var node = {};
  node.value = value;
  node.next = null;
  return node;
  /* END SOLUTION */
};
