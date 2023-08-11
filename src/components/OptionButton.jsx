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
		bgColor = "rgb(179, 215, 245)";
	} else {
		bgColor = "rgb(224, 225, 226)";
	}

	return (
		<button
			style={{
				backgroundColor: bgColor,
			}}
			onClick={() => {
				if (!isSubmitted) {
					chooseAnswer(value, id);
				}
			}}
		>
			{value}
		</button>
	);
}

export default OptionButton;
