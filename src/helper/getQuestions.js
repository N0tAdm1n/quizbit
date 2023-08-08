import { nanoid } from "nanoid";
import getDataFromAPI from "./getDataFromAPI";

export default async function getQAObject() {
	let result = await getDataFromAPI();
	const qaObject = result.map((ele) => {
		const question = ele.question;
		const correctAnswer = ele.correct_answer;
		const answerArray = [correctAnswer, ...ele.incorrect_answers];
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
