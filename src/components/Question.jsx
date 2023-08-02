import OptionButton from "./OptionButton";

function Question({ question, answerArr, id, chooseAnswer }) {
	const answerButtonElements = answerArr.map((ele) => {
		console.log(ele);
		return (
			<OptionButton
				value={ele}
				chooseAnswer={chooseAnswer}
				id={id}
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
