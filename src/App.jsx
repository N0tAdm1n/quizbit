import { useState } from "react";
import "./App.css";
import getQAObject from "./helper/getQuestions";

function App() {
	const [questionsArr, setQuestionsArr] = useState(getQAObject());

	async function handleClick() {
		console.log(questionsArr);
	}

	return (
		<>
			<button onClick={handleClick}>Click</button>
		</>
	);
}

export default App;
