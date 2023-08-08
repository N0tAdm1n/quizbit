function OptionButton({ value, id, chooseAnswer, isHeld }) {
	return (
		<button
			style={{
				backgroundColor: isHeld ? "grey" : "transparent",
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
