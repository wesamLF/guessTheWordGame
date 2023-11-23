
import { useState } from 'react'
import './App.css'
import words from './assets/word.json'
import HangmanDrawing from './HangmanDrawing'
import WordHolder from './WordHolder'
import KayBoard from './KayBoard'
import PopUpModal from './PopUpModal'
function App() {
  const [wordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLatters, setGuessedLatters] = useState<string[]>([wordToGuess[0], wordToGuess[wordToGuess.length - 1]])

  const wrongLatters: string[] = guessedLatters.filter((latter) => !wordToGuess.includes(latter))
  const correctLatter: string[] = guessedLatters.filter((latter) => wordToGuess.includes(latter))
  const won = wordToGuess.split("").every((latter) => correctLatter.includes(latter))
  const lost = wrongLatters.length > 5

  return (
    <>
      {/* <div className="relative"> */}
      {won && <PopUpModal gameStatus={"won"} wordToGuess={wordToGuess} />}
      {lost && <PopUpModal gameStatus={"lost"} wordToGuess={wordToGuess} />}

      <div className='max-w-3xl flex justify-center items-center flex-col mx-auto pt-12 relative'>
        <div className="absolute left-0 top-0 flex flex-col gap-10">
          <span className='  rounded-full px-9 py-10 mt-12 bg-red-300 text-lg font-bold'>
            {wrongLatters.length} / 6</span>
          <button className=" hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4  hover:border-blue-500 rounded"
            onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
        <HangmanDrawing wrongLatters={wrongLatters} />
        <WordHolder word={wordToGuess} guessedLatters={guessedLatters} />
        <KayBoard setGuessedLatters={setGuessedLatters} correctLatter={correctLatter} wrongLatters={wrongLatters} />


      </div>
      {/* </div> */}
    </>
  )
}

export default App
