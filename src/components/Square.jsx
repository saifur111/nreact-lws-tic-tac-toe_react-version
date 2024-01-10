/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState } from "react";

export default function Square({ value, onSquareClick }) {
    return (
        <>
            <Button onSquareClick={onSquareClick}  value={value} />
        </>
    );
}