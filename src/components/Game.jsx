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
    return (
        <>
        <div>
            <div>
                <Board onPlay={handlePlay} squares={currentSqures} xIsNext={xIsNext}/>
            </div>
            <div>
            
            </div>
        </div>
        </>
    );
}