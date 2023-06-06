import { useState } from "react";

export const TicTacToe = () => {
  const [turn, setTurn] = useState(true);

  const [board, setBoard] = useState(Array(9).fill(null));

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const onHandleClick = (index) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === index) {
        return turn ? "x" : "o";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);
    handleWin(updatedBoard);
    setTurn(!turn);
  };

  const handleWin = (board) => {
    winConditions.forEach((value) => {
      const [x, y, z] = value || [];

      if (board[x] && board[x] == board[y] && board[x] == board[z]) {
        alert(`The winner are the : ${board[x]} !!! Congrats`);
        return board[x];
      }
    });
  };

  return (
    <div className="board" style={{ height: 200 }}>
      {board.map((value, index) => {
        return (
          <div
            className="cell"
            key={index}
            onClick={() => !value && onHandleClick(index)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};
