import OptionButton from "./OptionButton";

function Question({ question, answerArr, id, chooseAnswer }) {
	const answerButtonElements = answerArr.map((ele) => {
		return (
			<OptionButton
				value={ele.answer}
				chooseAnswer={chooseAnswer}
				id={id}
				isHeld={ele.isHeld}
			/>
		);
	});

	return (
		<div>
			<p>{question}</p>
			{answerButtonElements}
		</div>
	);
}

export default Question;
