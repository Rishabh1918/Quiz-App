import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <div className='w-full h-screen text-center mt-80'>
            <h1 className='font-bold mb-5 text-2xl'>Basic General Knowledge Quiz</h1>
            <button 
                onClick={() => setStart(true)} 
                className='bg-white text-black font-bold border px-5 py-2 text-2xl rounded-lg'>
                Start Quiz
            </button>
        </div>
    )
}
