import {useContext, useEffect, useState} from "react";
import Quiz from "../components/Quiz";
import {API_URL} from "../config";
import {useRouter} from "next/router";


export default function Home() {
    const [startQuiz, setStartQuiz] = useState('easy')

    const router = useRouter()


    return (
        <>
            <div className='grid place-items-center mt-20'>
                <div className='w-96 h-96 bg-indigo-300 flex flex-col justify-start items-center'>
                    <div className='flex flex-col justify-between w-52 h-52 mt-8'>
                        <h1 className='mx-auto'>choose</h1>
                        <select
                            className='p-2 shadow'
                            name="difficulty"
                            onChange={(e) => setStartQuiz(e.target.value)}>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                        {startQuiz === 'easy' && (
                            <button
                                className='mt-8 border p-2 hover:shadow-2xl hover:text-white'
                                onClick={() => router.push('/quiz/easy')}
                            >
                                start quiz
                            </button>
                        )}
                        {startQuiz === 'medium' && (
                            <button
                                className='mt-8 border p-2 hover:shadow-2xl  hover:text-white'
                                onClick={() => router.push('/quiz/medium')}
                            >
                                start quiz
                            </button>
                        )}
                        {startQuiz === 'hard' && (
                            <button
                                className='mt-8 border p-2 hover:shadow-2xl hover:text-white'
                                onClick={() => router.push('/quiz/hard')}
                            >
                                start quiz
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
