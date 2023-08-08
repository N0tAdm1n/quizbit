import { useEffect, useState } from "react";
import "./App.css";
import getQAObject from "./helper/getQuestions";
import Question from "./components/Question";

function App() {
	const [questionsArr, setQuestionsArr] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);

	async function handleClick() {
		console.log(questionsArr);
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
				console.log(ele.choicesArray);
				return ele.id == id
					? {
							...ele,
							choosenAnswer: answer,
							isCorrect: ele.choosenAnswer == ele.correctAnswer ? true : false,
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

	useEffect(() => {
		getNewQuestions();
		setIsSubmitted(false);
	}, []);

	const questionElement = questionsArr.map((ques) => {
		return (
			<Question
				id={ques.id}
				question={ques.question}
				answerArr={ques.choicesArray}
				chooseAnswer={chooseAnswer}
			/>
		);
	});

	return (
		<>
			<div className="Question-List">{questionElement}</div>
			<button onClick={handleClick}>Click</button>
		</>
	);
}

export default App;
