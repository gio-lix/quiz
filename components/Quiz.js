export default function Quiz({questions,answer, correctAnswer}) {
    const {incorrect_answers, correct_answer} = questions

    const questionQuiz = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <>
            {questionQuiz.map((btn, index) => (
                    <button
                        key={index}
                        className='border p-4  hover:shadow-2xl  hover:scale-125 hover:text-white'
                        onClick={() => correctAnswer(btn)}
                    >
                        {btn}
                    </button>

            ))}
        </>
    )
}