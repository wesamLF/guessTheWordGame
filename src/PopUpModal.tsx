
type status = "won" | "lost"
const PopUpModal = ({ gameStatus, wordToGuess }: { gameStatus: status, wordToGuess: string }) => {
    let customBG: string;
    if (gameStatus === "won") {
        customBG = "rgba(25, 190, 53, 0.685)"
    } else {
        customBG = "rgba(190, 50, 53, 0.685)"
    }

    return (
        <>
            <div className="w-full h-screen overflow-hidden  fixed z-50 flex justify-center "
                style={{ background: customBG }} >
                <div className="p-10 md:p-36 text-white [text-shadow:_0_4px_0_rgb(0_0_0_/_50%)] flex justify-center items-center flex-col">
                    <h1 className=" text-6xl font-bold mb-16">You {gameStatus}!</h1>
                    <h1 className="text-4xl font-bold mb-16">The Correct Word Is: <span>{wordToGuess}</span></h1>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={() => window.location.reload()}>
                        Try again
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopUpModal