function OptionButton({
	value,
	id,
	chooseAnswer,
	isHeld,
	correctAnswer,
	isSubmitted,
}) {
	let bgColor;
	if (value == correctAnswer && isSubmitted) {
		bgColor = "green";
	} else if (value != correctAnswer && isSubmitted && isHeld) {
		bgColor = "red";
	} else if (isHeld) {
		bgColor = "grey";
	} else {
		bgColor = "transparent";
	}

	return (
		<button
			style={{
				backgroundColor: bgColor,
			}}
			onClick={() => {
				chooseAnswer(value, id);
			}}
		>
			{value}
		</button>
	);
}

export default OptionButton;
