import { useState } from "react";
import classNames from "classnames";

const Player = {
  X: "X",
  O: "O",
};

const Counter = {
  X: 0,
  O: 0,
};

const INITIAL_STATUS = Array(9).fill(null);

export const TicTacToe = () => {
  const [turn, setTurn] = useState(true);

  const [board, setBoard] = useState(INITIAL_STATUS);

  const Estado = {
    Playing: true,
    Draw: false,
    XWON: false,
    OWON: false,
  };

  const [status, setStatus] = useState(Estado.Playing);

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

  let cellClass = classNames({
    board: true,
    [`Counter--${turn}`]: board !== null,
  });

  const onHandleClick = (index) => {
    if (status !== true) return;

    const updatedBoard = board.map((value, idx) => {
      if (idx === index) {
        return turn ? Player.X : Player.O;
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);
    setTurn(!turn);
    handleWin(updatedBoard);
  };

  const handleWin = (board) => {
    let winner = Player || undefined;

    winConditions.forEach((value) => {
      const [x, y, z] = value || [];

      if (board[x] && board[x] == board[y] && board[x] == board[z]) {
        winner = board[x];
        return winner;
      }
    });

    if (winner === Player.X) {
      setStatus((Estado.XWON = true));
      setStatus(false);
      Counter.X++;
      alert("El ganador es X!");
    } else if (winner === Player.O) {
      setStatus((Estado.OWON = true));
      setStatus(false);
      Counter.O++;
      alert("El ganador es O!");
    } else if (board.every((cell) => [Player.X, Player.O].includes(cell))) {
      setStatus((Estado.Draw = true));
      setStatus(false);
      alert("Empate!!!");
    }
  };

  const onHandleReset = () => {
    setBoard(INITIAL_STATUS);
    setStatus(true);
    setTurn(true); // ésta línea vuelve a comenzar las partidas con X jugando
  };

  return (
    <main>
      <section className="turnOf">
        <p>Turno de: {turn ? Player.X : Player.O}</p>
        <div className="counterContainer">
          <p className="counterX">X Ganó: {Counter.X}</p>
          <p className="counterO">O Ganó: {Counter.O}</p>
        </div>
      </section>
      <div className={cellClass}>
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
        <section className="results">
          <article id="alert" role="alert"></article>
          <button id="btnReset" onClick={onHandleReset}>
            Reset
          </button>
        </section>
      </div>
    </main>
  );
};
