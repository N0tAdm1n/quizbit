import { useEffect, useState } from "react";
import "./App.css";
import getQAObject from "./helper/getQuestions";

function App() {
	const [questionsArr, setQuestionsArr] = useState([]);

	async function handleClick() {
		console.log(questionsArr);
	}

	async function getNewQuestions() {
		try {
			const data = await getQAObject();
			setQuestionsArr(data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getNewQuestions();
	}, []);

	return (
		<>
			<button onClick={handleClick}>Click</button>
		</>
	);
}

export default App;
