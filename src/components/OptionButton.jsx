function OptionButton({ value, id, chooseAnswer }) {
	console.log(value);

	return (
		<button
			onClick={() => {
				chooseAnswer(id, value);
			}}
		>
			{value}
		</button>
	);
}

export default OptionButton;
