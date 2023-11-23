import { Dispatch, SetStateAction } from "react"




const KayBoard = ({ setGuessedLatters, correctLatter, wrongLatters }:
  { setGuessedLatters: Dispatch<SetStateAction<string[]>>, correctLatter: string[], wrongLatters: string[] }) => {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  return (
    <div className=" grid grid-cols-4 md:grid-cols-8 gap-1 mt-5 w-full ">
      {KEYS.map(latter => {
        const isCorrect = correctLatter.includes(latter)
        const isWrong = wrongLatters.includes(latter)

        return (
          <button key={latter}
            className={`p-5 border-2 border-black text-3xl font-bold flex justify-center items-center
           ${isCorrect ? "bg-green-300 hover:bg-green-300" :
                isWrong ? "bg-red-300 hover:bg-red-300" : "hover:bg-slate-200"}`}
            type="submit"
            onClick={(e) => {
              setGuessedLatters((l) => [...l, latter])
              e.currentTarget.disabled = true

            }}
          >{latter}</button>
        )
      })}
    </div>
  )
}

export default KayBoard