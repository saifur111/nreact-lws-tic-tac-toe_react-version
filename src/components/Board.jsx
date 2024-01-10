import { calculateWinner } from "../lib/calculateWinner";
import Square from "./Square";

export default function Board({ onPlay, squares, xIsNext, winner,currentMove }) {

    let status;

    if (winner) {
        status = `Winner : ${winner}`;
    }
    else {
        status = "Next Player is  " + (xIsNext ? "X" : "O")
    }
    if (currentMove === 9 && !winner) status = `None Win Game.`
    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    return (
        <>
            <div >{status}</div>
            <div className="flex">
                <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
                <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
                <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
            </div>
            <div className="flex">
                <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
                <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
                <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
            </div>
            <div className="flex">
                <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
                <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
                <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
            </div>
        </>

    );
}