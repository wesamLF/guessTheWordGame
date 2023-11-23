
const HangmanDrawing = ({ wrongLatters }: { wrongLatters: string[] }) => {


    const HMbase = () => <>
        <div className=" absolute right-6 top-0 w-2 h-8 bg-black"></div>
        <div className=" w-24 h-2 ml-28 bg-black"></div>
        <div className="w-2 h-60 ml-28 bg-black"></div>
        <div className="w-60 h-2 bg-black"></div>
    </>

    const Head = (
        <div className="absolute rounded-full top-8 right-2 w-10 h-10 border-4 border-black	"></div>
    )
    const Body = (
        <div className="absolute w-1 h-[4.20rem] top-[4.5rem] right-[1.55rem] bg-black"></div>
    )
    const RightArm = (
        <div className="absolute w-1 h-14 top-14 right-1 rotate-45 bg-black"></div>
    )
    const LefttArm = (
        <div className="absolute w-1 h-14 top-14 right-[2.85rem] -rotate-45 bg-black"></div>
    )
    const RightLeg = (
        <div className="absolute w-1 h-14 top-32 right-[6px] -rotate-45 bg-black"></div>
    )
    const LefttLeg = (
        <div className="absolute w-1 h-14 top-32 right-11 rotate-45 bg-black"></div>
    )
    let fullBody =  [Head, Body, RightArm, LefttArm, RightLeg, LefttLeg]
    
    
    
    return (
        <div className="relative">
            <HMbase />
            { fullBody.slice(0 , wrongLatters.length)}
        </div>
    )
}

export default HangmanDrawing