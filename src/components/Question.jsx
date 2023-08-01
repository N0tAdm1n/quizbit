
function Question({question, answerArr, correctAnswer}) {
  return (
    <div>
        <p>{question}</p>
        {answerArr.map(ele=><span>{ele}</span>)}
    </div>
  )
}

export default Question;