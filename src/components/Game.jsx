import { useState } from "react";
import Board from "./Board";
import History from "./History";
import { calculateWinner } from "../lib/calculateWinner";
export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSqures =history[currentMove];// history last push
    const winner = calculateWinner(currentSqures);
    const handlePlay = (nextSquares)=>{
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1);
    }
    const jumpTo =(move)=>{
        setCurrentMove(move);
        setXIsNext(move%2 ===0);
    }
    const moves = history.map((squares,move)=>{
        let desc;
        if(move>0){
           desc = `Go to the move # ${move}`
        }
        else{
           desc = `Start the Game.`
        }
        return(
            <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
                <button onClick={()=>jumpTo(move)}>{desc}</button>
            </li>
        )
    })
    return (
        <>
        <div className="flex justify-center p-4">
            <div className="mr-16">
                    <Board currentMove={currentMove} winner={winner} onPlay={handlePlay} squares={currentSqures} xIsNext={xIsNext}/>
            </div>
            <div>
                <History moves={moves}/>
            </div>
        </div>
        </>
    );
}