// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  /* START SOLUTION */
  if (x === 0 || y === 0) { return 0; }
  // One is negative
  if (x < 0 ^ y < 0) {
    return -multiply(Math.abs(x), Math.abs(y));
  // Both are negative
  } else if (x < 0 && y < 0) {
    return multiply(Math.abs(x), Math.abs(y));
  }

  // Neither is negative
  var xStr = x.toString().split('.');
  var yStr = y.toString().split('.');
  var decimals = ( (xStr[1] || '') + (yStr[1] || '') ).length;

  var myX = parseInt(xStr[0] + xStr[1], 10);
  var myY = parseInt(yStr[0] + yStr[1], 10);

  var counter = myY;
  var total = 0;
  while(counter--) {
    total += myX;
  }
  // Skip decimal handling if not needed
  if (decimals === 0) { return total; }

  total = total.toString().split('');

  // Insert the decimal at proper place, as recorded before multiplication
  if (decimals > total.length) {
    var pack = [];
    for (var i = 0; i < decimals - total.length; i++) { pack.push(0); }
    total = pack.concat(total);
  }

  total.splice(total.length - decimals, 0, '.');
  return parseFloat( total.join('') );
  /* ELSE
  // TODO: should return the product of x * y
  END SOLUTION */
};

var divide = function(x, y) {
  /* START SOLUTION */
  var recursiveDiv = function(x, y, place) {
    if (x === 0) { return 0; }
    var remainder = x;
    var dividend = 0;

    while(remainder >= y) {
      remainder -= y;
      dividend++;
    }

    // Getting a bit long in the decimal, let's stop here and signify whether we should round
    if (place > 3) { return dividend >= 5; }

    // Recursively divide the next decimal place
    var remainderDiv = recursiveDiv( multiply(remainder, 10), y, place + 1 );
    // If we stopped in the lower stack call, let's round (or not) and return
    if (typeof remainderDiv === "boolean") { return dividend + Number(remainderDiv); }
    // Remove decimal from remainder dividend and append all behind decimal
    var divInt = parseFloat( '0.' + remainderDiv.toString().replace(".","") );
    // Append to current dividend and return
    return dividend + divInt;
  };

  // One is negative
  if (x < 0 ^ y < 0) {
    return -recursiveDiv(Math.abs(x), Math.abs(y), 0);
  // Both are negative
  } else if (x < 0 && y < 0) {
    return recursiveDiv(Math.abs(x), Math.abs(y), 0);
  // Neither is negative
  } else {
    return recursiveDiv(x, y, 0);
  }
  /* ELSE
  // TODO: should return the dividend of x / y
  END SOLUTION */
};

var modulo = function(x, y) {
  /* START SOLUTION */
  var remainder;
  if (x < 0) {
    remainder = Math.abs(x);
  } else {
    remainder = x;
  }

  if (y < 0) {
    y = -y;
  }

  while(remainder >= y) {
    remainder -= y;
  }

  if (x < 0) {
    return -remainder;
  } else {
    return remainder;
  }

  return remainder;
  /* ELSE
  // TODO: should return the remainder of x / y
  END SOLUTION */
};

/* START SOLUTION */
var oMGBITWISE = {

  add: function(x, y) {
    var carry = x & y;
    var result = x ^ y;
    var shiftedCarry;
    while(carry !== 0) {
      shiftedCarry = carry << 1;
      carry = result & shiftedCarry;
      result ^= shiftedCarry;
    }
    return result;
  },

  multiply: function(x, y) {
    var result = 0;
    while(y !== 0) {
      if(y & 1) {
        result = this.add(result, x);
      }
      x = x << 1;
      y = y >> 1;
    }
    return result;
  },

  divide: function(x, y) {
    var mask = 1;
    var quotient = 0;

    while(y <= x) {
      y <<= 1;
      mask <<= 1;
    }

    while(mask > 1) {
      y >>= 1;
      mask >>= 1;
      if (x >= y) {
        x = this.add(x, -y);
        quotient |= mask;
      }
    }

    return quotient;
  },

  modulo: function(x, y) {
    return this.add(x, -this.multiply(this.divide(x,y), y));
  }
};
/* END SOLUTION */
