import { useState } from 'react';

import Square from './Square';

interface board {
    xIsNext: boolean;
    currentSquares: Array<any>;
    handlePlay(): void;
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState<Array<String | null>>(
        Array(9).fill(null)
    );

    const winner: String | null = calculateWinner(squares);
    let status: String | undefined;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i: number): any {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onSquareIsClicked={() => handleClick(0)}
                ></Square>
                <Square
                    value={squares[1]}
                    onSquareIsClicked={() => handleClick(1)}
                ></Square>
                <Square
                    value={squares[2]}
                    onSquareIsClicked={() => handleClick(2)}
                ></Square>
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareIsClicked={() => handleClick(3)}
                ></Square>
                <Square
                    value={squares[4]}
                    onSquareIsClicked={() => handleClick(4)}
                ></Square>
                <Square
                    value={squares[5]}
                    onSquareIsClicked={() => handleClick(5)}
                ></Square>
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareIsClicked={() => handleClick(6)}
                ></Square>
                <Square
                    value={squares[7]}
                    onSquareIsClicked={() => handleClick(7)}
                ></Square>
                <Square
                    value={squares[8]}
                    onSquareIsClicked={() => handleClick(8)}
                ></Square>
            </div>
        </>
    );
}

function calculateWinner(squares: Array<String | null>): String | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
