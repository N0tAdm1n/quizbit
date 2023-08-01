import getDataFromAPI from "./getDataFromAPI";

export default async function getQAObject() {
  let result = await getDataFromAPI();
  const qaObject = result.map((ele) => {
    const question = ele.question;
    const correctAnswer = ele.correct_answer;
    const choicesArray = [correctAnswer, ...ele.incorrect_answers];

    return {
      question,
      correctAnswer,
      choicesArray,
      choosenAnswer: "",
      isCorrect: false,
    };
  });

  return qaObject;
}
