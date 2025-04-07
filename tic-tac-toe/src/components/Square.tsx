import { useState } from 'react';

interface square {
    value: String | null;
    onSquareIsClicked(): () => void;
}

export default function Square({ value, onSquareIsClicked }: square) {
    return (
        <button className="square" onClick={onSquareIsClicked}>
            {value}
        </button>
    );
}
