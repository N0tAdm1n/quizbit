import getDataFromAPI from "./getDataFromAPI";

export default async function getQAObject() {
	let result = await getDataFromAPI();
	console.log(result);
	const qaObject = result.map((ele) => {
		const question = ele.question;
		const correctAnswer = ele.correct_answer;
		console.log(ele.incorrect_answers);
		const choicesArray = [correctAnswer, ...ele.incorrect_answers];

		return {
			question,
			correctAnswer,
			choicesArray,
		};
	});

	return qaObject;
}
