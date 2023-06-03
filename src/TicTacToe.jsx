import { useEffect, useState } from "react";

export const TicTacToe = () => {
  const [turn, setTurn] = useState("X");

  // const [isClicked, setIsClicked] = useState(false);

  // const [winner, setWinner] = useState([]);

  // const clicked = () => {
  //   setIsClicked((current) => !current);
  //   document.getElementsByClassName("cell")[4].innerHTML = turn;
  //   console.log(isClicked);
  // };

  const handleClick = () => {
    setTurn((turn) => (turn === "X" ? "O" : "X"));
  };

  // const createElement = () => {
  //   turn.map((t) => {
  //     turn === "X"
  //       ? (document.getElementsByClassName("cell")[t].innerHTML = {
  //           handleClick,
  //         })
  //       : (document.getElementsByClassName("cell")[t].innerHTML = {
  //           handleClick,
  //         });
  //   });
  // };

  useEffect(() => {
    // const divText = document.getElementsByClassName("cell").innerHTML;
    // if (divText === "") return;
    // divText === "X" ? "O" : "X";
    if (turn === "X") {
      document.getElementsByClassName("cell")[7].innerHTML = "X";
    } else {
      document.getElementsByClassName("cell")[7].innerHTML = "O";
    }
    console.log("useEffect turn: " + turn);
  }, [turn]);

  console.log(turn);
  return (
    <div className="board">
      <div className="cell" onClick={handleClick}>
        X
      </div>
      <div className="cell" onClick={handleClick} value="X">
        O
      </div>
      <div className="cell" onClick={handleClick}></div>
      <div className="cell" onClick={handleClick}></div>
      <div className="cell" onClick={handleClick}></div>
      <div className="cell" onClick={handleClick}></div>
      <div className="cell" onClick={handleClick}></div>
      <div className="cell" onClick={handleClick}></div>
      <div className="cell" onClick={handleClick}></div>
    </div>
  );
};
