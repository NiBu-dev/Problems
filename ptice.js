/*
Adrian, Bruno and Goran wanted to join the bird lovers’ club. However, they did not know that all applicants must pass an entrance exam. The exam consists of N questions, each with three possible answers: A, B and C.

Unfortunately, they couldn’t tell a bird from a whale so they are trying to guess the correct answers. Each of the three boys has a theory of what set of answers will work best:

Adrian claims that the best sequence is: A, B, C, A, B, C, A, B, C, A, B, C ...

Bruno is convinced that this is better: B, A, B, C, B, A, B, C, B, A, B, C ...

Goran laughs at them and will use this sequence: C, C, A, A, B, B, C, C, A, A, B, B ...

Write a program that, given the correct answers to the exam, determines who of the three was right – whose sequence contains the most correct answers.

Input
The first line contains an integer N (1≤N≤100), the number of questions on the exam.

The second line contains a string of N letters ‘A’, ‘B’ and ‘C’. These are, in order, the correct answers to the questions in the exam.

Output
On the first line, output M, the largest number of correct answers one of the three boys gets.

After that, output the names of the boys (in alphabetical order) whose sequences result in M correct answers.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCounter = 0;
const numbers = [];
const students = [
	{
		name: 'Adrian',
		answerSeq: 'ABC'.repeat(34).split(''),
		guesses: 0
	},
	{
		name: 'Bruno',
		answerSeq: 'BABC'.repeat(25).split(''),
		guesses: 0
	},
	{
		name: 'Goran',
		answerSeq: 'CCAABB'.repeat(17).split(''),
		guesses: 0
	}
]

const compare = (a, b) => {
	if (a.name > b.name) {
		return 1
	} else {
		return -1;
	}
}


const findTheSmartesKids = (correctAnswer) => {
	// 1) loop through students
	let bestNrOfAnswers = 0;
	const nrOfAnswers = [];
	const bestStudents = [];
	for (student of students) {
		let nrOfGuesses = 0;
		for (let i = 0; i < correctAnswer.length; i++) {
			if (correctAnswer[i] === student.answerSeq[i]) {
				nrOfGuesses++;
			}
		}
		
		student.guesses = nrOfGuesses;
		nrOfAnswers.push({name: student.name, guesses: nrOfGuesses});
		bestNrOfAnswers = nrOfGuesses > bestNrOfAnswers ? nrOfGuesses : bestNrOfAnswers;
	}
	console.log(bestNrOfAnswers);

	for (student of nrOfAnswers) {
		if (student.guesses === bestNrOfAnswers) {
			console.log(student.name)
		}
	}
}

rl.on('line', (line) => {
    numbers.push(line);
    lineCounter++;
    if (lineCounter === 2) {
    	findTheSmartesKids(numbers[1]);
    	rl.close();    	
    };
});
