import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Quiz from "@/components/Quiz";
import Score from "@/components/Score";
import {API_URL} from "@/config/index";



export default function Medium({data}) {
    const router = useRouter()
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)


    useEffect(() => {
        setQuestions(data.results)
    }, [])


    const correctAnswer = (answer) => {
        const index = currentIndex + 1
        setCurrentIndex(index)
        if (answer === questions[currentIndex].correct_answer) {
            setScore(score + 1)
        }
        if (index >= questions.length) {
            setGameOver(true)
        }
    }

    return (
        <div className='grid place-items-center mt-20 bg-opacity-50'>
            <div className='w-96 h-96 bg-indigo-300 p-2'>
                {!gameOver ? (
                    questions.length > 0 && (
                        <div>
                            <div>
                                <div className='h-20'>
                                    <h1 dangerouslySetInnerHTML={{__html: questions[currentIndex].question}}/>
                                </div>
                                <div className='grid grid-cols-2 mt-8 '>
                                    <Quiz
                                        questions={questions[currentIndex]}
                                        correctAnswer={correctAnswer}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <Score score={score} />
                )
                }
            </div>
        </div>

    )
}
export const getServerSideProps = async () => {
    const res = await fetch(`${API_URL}&difficulty=medium`)
    const data = await res.json()


    return {
        props: {data}
    }
}