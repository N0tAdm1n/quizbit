import { nanoid } from "nanoid";
import getDataFromAPI from "./getDataFromAPI";

export default async function getQAObject() {
	let result = await getDataFromAPI();
	const qaObject = result.map((ele) => {
		const question = ele.question;
		const correctAnswer = ele.correct_answer;
		const answerArray = shuffle([correctAnswer, ...ele.incorrect_answers]);
		const choicesArray = answerArray.map((answer) => {
			return {
				answer: answer,
				isHeld: false,
			};
		});

		return {
			question,
			correctAnswer,
			choicesArray,
			choosenAnswer: "",
			isCorrect: false,
			id: nanoid(),
		};
	});

	return qaObject;
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
