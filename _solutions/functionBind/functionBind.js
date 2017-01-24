/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(/*START SOLUTION*/func, context/*END SOLUTION*/) {
  // TODO: Your code here
  /* START SOLUTION */
  var prev_args = Array.prototype.slice.call(arguments, 2);

  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = prev_args.concat(args);

    return func.apply(context, args);
  }
  /* END SOLUTION */
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(/*START SOLUTION*/ context /*END SOLUTION*/) {
  // TODO: Your code here
  /* START SOLUTION */
  var prev_args = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = prev_args.concat(args);

    return func.apply(context, args);
  }
  /* END SOLUTION */
};
