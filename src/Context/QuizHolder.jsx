import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "Which animal is known as the 'Ship of the Desert'?",
        "a": "Lion",
        "b": "Camel",
        "c": "Horse",
        "d": "Elephant",
        "correct": "b"
    },
    {
        "question": "What is the color of Buffalo?",
        "a": "Red",
        "b": "Green",
        "c": "Black",
        "d": "Blue",
        "correct": "c"
    },
    {
        "question": "Baby frog is known as.......",
        "a": "Puppy",
        "b": "Foal",
        "c": "Piglet",
        "d": "Tadpole",
        "correct": "d"
    },
    {
        "question": "What is the capital of India?",
        "a": "Bangluru",
        "b": "Kolkata",
        "c": "Delhi",
        "d": "Maharastra",
        "correct": "c"
    },
    {
        "question": "What i my name?",
        "a": "Narendra Modi",
        "b": "Rishabh Shah",
        "c": "Akshay Kumar",
        "d": "Salman Khan",
        "correct": "b"
    },
    {
        "question": "What is 70 degrees Fahrenheit in Celsius?",
        "a": "18.8889",
        "b": "20",
        "c": "21.1111",
        "d": "158",
        "correct": "c"
    },
    {
        "question": "When was Mahatma Gandhi born?",
        "a": "October 2, 1869",
        "b": "December 15, 1872",
        "c": "July 18, 1918",
        "d": "January 15, 1929",
        "correct": "a"
    },
    {
        "question": "What is the largest ocean in the world?",
        "a": "Atlantic Ocean",
        "b": "Indian Ocean",
        "c": "Arctic Ocean",
        "d": "Pacific Ocean",
        "correct": "d"
    },
    {
        "question": "What is 65 times 52?",
        "a": "117",
        "b": "3120",
        "c": "3380",
        "d": "3520",
        "correct": "c"
    },
    {
        "question": "What is the tallest mountain in the world?",
        "a": "Mount Kilimanjaro",
        "b": "Mount Everest",
        "c": "Mount Himalaya",
        "d": "Mount Fuji",
        "correct": "b"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
