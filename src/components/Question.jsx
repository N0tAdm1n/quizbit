import OptionButton from "./OptionButton";

function Question({
	question,
	answerArr,
	id,
	chooseAnswer,
	correctAnswer,
	isSubmitted,
}) {
	const answerButtonElements = answerArr.map((ele) => {
		return (
			<OptionButton
				value={ele.answer}
				chooseAnswer={chooseAnswer}
				id={id}
				isHeld={ele.isHeld}
				correctAnswer={correctAnswer}
				isSubmitted={isSubmitted}
			/>
		);
	});

	return (
		<div>
			<p className="question">{question}</p>
			{answerButtonElements}
		</div>
	);
}

export default Question;
