import { useState } from 'react';

import Board from './Board';

export default function Game() {
    const [xIsNext, setIsNext] = useState<boolean>(true);
    const [history, setHistory] = useState<Array<any>>([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(): void {}

    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{/**TODO*/}</ol>
            </div>
        </div>
    );
}
