import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [value, setValue] = useState(Array(9).fill(null))
    const [xTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null)

    const checkWinner = (currentValue) => {

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

        for (let item of lines) {
            const [a, b, c] = item;
            if (currentValue[a] !== null && currentValue[a] === currentValue[b] && currentValue[a] === currentValue[c]) {
                return currentValue[a]
            }
        }
        if (!currentValue.includes(null)) {
            return "Tie"
        }
        return null;


    }

    const handleClick = (index) => {
        if (winner || value[index] !== null) {
            return;
        }

        const copyArr = [...value]
        copyArr[index] = xTurn ? "X" : "O"
        setValue(copyArr)
        const result = checkWinner(copyArr);
        if (result === "Tie") {
            setWinner(result)
        }
        else if (result) {
            setWinner(result)
        }
        else {
            setXTurn(!xTurn)
        }


    }

    const restartGame = () => {
        setValue(Array(9).fill(null));
        setWinner(null)
        setXTurn(true)
    }
    return (
        <>
            <div className='board grid grid-cols-3 w-[30%]'>
                {value.map((item, index) => (
                    <Square
                        key={index}
                        value={value[index]}
                        handleClick={() => handleClick(index)}
                        disabled={winner !== null}
                    />
                ))}
            </div>
            {
                winner && winner !== null ? winner !== "Tie" ? <p>{winner} has won  </p> : <p>Match Tie</p> : null

            }

            {
                <button className='mt-4  px-2 py-1 border hover:bg-blue-600 border-gray-200 bg-blue-500 text-white rounded-md'
                    onClick={restartGame}
                >Restart</button>
            }
            {
                !winner && (xTurn ? <p> X's Turn </p> : <p>O's Turn</p>)
            }
        </>
    );
};

export default Board;


//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];
// className='mt-4  px-2 py-1 border hover:bg-blue-600 border-gray-200 bg-blue-500 text-white rounded-md'