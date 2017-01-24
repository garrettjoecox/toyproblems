/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

let possible = ['rock', 'paper', 'scissors'];

var rockPaperScissors = function (rounds) {
	rounds = rounds || 3;
	let result = [];

	function recurse(toGo, soFar) {
		if (!toGo) {
			result.push(soFar);
		} else {

			for (let p = 0; p < possible.length; p++) {
				recurse(toGo - 1, soFar.concat(possible[p]));
			}

		}
	}

	recurse(rounds, []);

	return result;
};
