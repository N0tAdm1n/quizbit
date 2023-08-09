import { useEffect, useState } from "react";
import "./App.css";
import getQAObject from "./helper/getQuestions";
import Question from "./components/Question";
import TitlePage from "./components/TitlePage";

function App() {
	const [page, setPage] = useState("title");
	const [questionsArr, setQuestionsArr] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);

	async function handleSubmit() {
		setIsSubmitted(true);
	}

	async function getNewQuestions() {
		try {
			const data = await getQAObject();
			setQuestionsArr(data);
		} catch (error) {
			console.error(error);
		}
	}

	function chooseAnswer(answer, id) {
		setQuestionsArr((prevData) =>
			prevData.map((ele) => {
				return ele.id == id
					? {
							...ele,
							choosenAnswer: answer,
							isCorrect: answer == ele.correctAnswer ? true : false,
							choicesArray: ele.choicesArray.map((ans) => {
								return ans.answer == answer
									? {
											answer: ans.answer,
											isHeld: true,
									  }
									: {
											answer: ans.answer,
											isHeld: false,
									  };
							}),
					  }
					: ele;
			})
		);
	}

	const questionElement = questionsArr.map((ques) => {
		return (
			<Question
				id={ques.id}
				question={ques.question}
				answerArr={ques.choicesArray}
				chooseAnswer={chooseAnswer}
				isSubmitted={isSubmitted}
				correctAnswer={ques.correctAnswer}
			/>
		);
	});

	function getPage() {
		if (page == "title") return <TitlePage />;
		else if (page == "game") {
			return <div className="Question-List">{questionElement}</div>;
		}
	}

	function startGame() {
		getNewQuestions();
		setPage("game");
		setIsSubmitted(false);
	}

	function getScore() {
		console.log(questionsArr);
		let score = 0;
		questionsArr.forEach((ele) => {
			if (ele.isCorrect) score++;
		});
		return (
			<>
				<p>You scored: {score}</p>
			</>
		);
	}

	return (
		<>
			{getPage()}

			{isSubmitted && getScore()}

			{page == "title" && <button onClick={startGame}>Start</button>}

			{page == "game" && isSubmitted == false && (
				<button onClick={handleSubmit}>Submit</button>
			)}

			{page == "game" && isSubmitted == true && (
				<button onClick={startGame}>New quiz</button>
			)}
		</>
	);
}

export default App;
