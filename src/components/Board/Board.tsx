import "./style.css";
import Square from "components/Square";
import React from "react";

interface Props {
  onPlay: Function;
  squares: Array<string>;
  xIsNext: boolean;
}

const Board: React.FC<Props> = ({ onPlay, squares, xIsNext }) => {
  let width: number = Number(process.env.REACT_APP_WIDTH);
  let height: number = Number(process.env.REACT_APP_HEIGHT);

  let sizeWidth: Array<number> = Array.from(Array(width).keys());
  let sizeHeight: Array<number> = Array.from(Array(height).keys());

  const handleClick = (i: number) => {
    if (squares[i] !== "" || calculateWinner(squares) !== "") {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const generateRow = (rowIndex: number) => {
    return (
      <>
        {sizeWidth.map((index) => (
          <Square
            key={(index + 1) * (rowIndex + 1)}
            value={squares[rowIndex * width + index]}
            onSquareClick={() => handleClick(rowIndex * width + index)}
          />
        ))}
      </>
    );
  };

  const board = sizeHeight.map((index) => (
    <div key={index} className="board-row">
      {generateRow(index)}
    </div>
  ));

  return (
    <>
      <h3>{status}</h3>
      <div>{board}</div>
    </>
  );
};

const calculateWinner = (squares: Array<string>): string => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return "";
};

export default Board;
