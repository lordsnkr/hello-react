import "./style.css";
import Square from "components/Square";
import React from "react";

const Board: React.FC = () => {
  let width: number = Number(process.env.REACT_APP_WIDTH);
  let height: number = Number(process.env.REACT_APP_HEIGHT);

  let sizeWidth: Array<number> = Array.from(Array(width).keys());
  let sizeHeight: Array<number> = Array.from(Array(height).keys());

  const generateRow = (rowIndex: number) => {
    return (
      <>
        {sizeWidth.map((index) => (
          <Square key={(index + 1) * (rowIndex + 1)}></Square>
        ))}
      </>
    );
  };

  const board = sizeHeight.map((index) => (
    <div key={index} className="board-row">
      {generateRow(index)}
    </div>
  ));
  return <>{board}</>;
};

export default Board;
