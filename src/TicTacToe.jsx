import { useEffect, useState } from "react";

export const TicTacToe = () => {
  const [turn, setTurn] = useState("X");

  const [ahoraVieneX, setAhoraVieneX] = useState(true);

  const [OcuppedCells, setOcuppedCells] = useState(false);

  // const [winner, setWinner] = useState([]);

  const handleClick = () => {
    setTurn((turn) => (turn === "X" ? "O" : "X"));
    // if (turn === "X" && OcuppedCells === false) {
    //   setOcuppedCells(true);
    //   setAhoraVieneX(false);
    //   turn === "O";
    // }
    console.log(OcuppedCells);
  };

  const cellClicked = () => {
    document.getElementById("r1c1").onclick = function () {
      if (turn === "X") {
        document.getElementById("r1c1").innerHTML = "X";
      } else if (turn == "O") {
        document.getElementById("r1c1").innerHTML = "O";
      }
    };
  };

  useEffect(() => {
    if (turn === "X") {
      document.getElementsByClassName("cell")[5].innerHTML = "X";
    } else {
      document.getElementsByClassName("cell")[5].innerHTML = "O";
    }
    console.log("useEffect turn: " + turn);
  }, [turn]);

  console.log("turno de " + turn);
  return (
    <div className="board">
      <div
        className="cell"
        id="r1c1"
        onClick={(handleClick, cellClicked)}
      ></div>
      <div className="cell" id="r1c2" onClick={handleClick} value="X"></div>
      <div className="cell" id="r1c3" onClick={handleClick}></div>
      <div className="cell" id="r2c1" onClick={handleClick}></div>
      <div className="cell" id="r2c2" onClick={handleClick}></div>
      <div className="cell" id="r2c3" onClick={handleClick}></div>
      <div className="cell" id="r3c1" onClick={handleClick}></div>
      <div className="cell" id="r3c2" onClick={handleClick}></div>
      <div className="cell" id="r3c3" onClick={handleClick}></div>
    </div>
  );
};
