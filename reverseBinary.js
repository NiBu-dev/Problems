/*Yi has moved to Sweden and now goes to school here. The first years of schooling she got in China, and the curricula do not match completely in the two countries. Yi likes mathematics, but now... The teacher explains the algorithm for subtraction on the board, and Yi is bored. Maybe it is possible to perform the same calculations on the numbers corresponding to the reversed binary representations of the numbers on the board? Yi dreams away and starts constructing a program that reverses the binary representation, in her mind. As soon as the lecture ends, she will go home and write it on her computer.

Task
Your task will be to write a program for reversing numbers in binary. For instance, the binary representation of 13 is 1101, and reversing it gives 1011, which corresponds to number 11.

Input
The input contains a single line with an integer N, 1≤N≤1000000000.

Output
Output one line with one integer, the number we get by reversing the binary representation of N. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reverseBinary = (decimalNum) => {
	const binaryNum = decimalNum.toString(2);

	const binaryNumArrayReversed = binaryNum.split('').reverse()
	return parseInt(binaryNumArrayReversed.join(''), 2);
};


rl.on('line', (line) => {
    const num = line;
   	// console.log(nums)
   	console.log(reverseBinary((+num)));
    rl.close()
});
