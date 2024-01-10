/* eslint-disable react/prop-types */
import Button from "./Button";
export default function Square({ value, onSquareClick }) {
    return (
        <>
            <Button onSquareClick={onSquareClick}  value={value} />
        </>
    );
}