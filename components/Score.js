import {useRouter} from "next/router";

export default function Score({score}) {
    const router = useRouter()
    return(
        <div className='w-full mt-10 flex justify-center  '>
            <div className='flex flex-col justify-around items-center  w-44 h-40'>
                <div>
                    Your score is: <strong className='text-2xl'>{score}</strong>
                </div>
                <div className='flex items-center  '>
                    try again:
                    <button
                        className='p-2 border w-20 ml-3 hover:shadow-2xl  hover:text-white'
                        onClick={(e) => router.push('/')}
                    >
                        <p className='text-xl'>
                            start
                        </p>

                    </button>
                </div>
            </div>
        </div>
    )
}