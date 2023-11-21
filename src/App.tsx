
import { useState } from 'react'
import './App.css'
import words from './assets/word.json'
import HangmanDrawing from './HangmanDrawing'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string | number>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLatters, setGuessedLatters] = useState<string[]>([])
  return (
    <>
      <div className='bg-red-400 max-w-3xl flex justify-center items-center flex-col mx-auto'>
        <h1 className='my-4'>you won!</h1>
        <HangmanDrawing />
      </div>
    </>
  )
}

export default App
