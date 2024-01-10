import { useState } from "react";
import Board from "./Board";
export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);

    const currentSqures =history[history.length-1];// history last push

    const handlePlay = (nextSquares)=>{
        setXIsNext(!xIsNext);
        setHistory([...history,nextSquares])
    }

    const moves = history.map((squares,move)=>{
        let desc;
        if(move>0){
            desc = `Go to the move # ${move}`
        }else{
            desc = `Start the Game.`
        }
        return(
            <li>
                <button>{desc}</button>
            </li>
        )
    })
    return (
        <>
        <div>
            <div>
                <Board onPlay={handlePlay} squares={currentSqures} xIsNext={xIsNext}/>
            </div>
            <div>
                <ul>
                    {moves}
                </ul>
            </div>
        </div>
        </>
    );
}