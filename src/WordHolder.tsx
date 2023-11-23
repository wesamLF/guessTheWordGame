
const WordHolder = ({ word, guessedLatters }: { word: string, guessedLatters: string[] }) => {

    return (
        <div className=" mt-14 flex flex-row justify-center items-center gap-10 flex-wrap">
            {word.split("").map((latter, i) => {
                return (
                    <div key={i} className=" w-10 h-1 border border-black border-b-4 relative">
                            <span className=" absolute  -top-12 left-1/2 transform -translate-x-1/2  text-4xl font-bold">
                                {
                                    guessedLatters.includes(latter) ? latter : ""
                                }
                            </span>
                    </div>
                )

            })}
        </div>
    )
}

export default WordHolder