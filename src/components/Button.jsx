/* eslint-disable react/prop-types */
export default function Button({ value, onSquareClick }){
    return (
        <button onClick={onSquareClick} className="bg-white border border-gray-400 h-14 w-14 m-1 leading-9 text-lg"
        >{value}</button>
    );
}