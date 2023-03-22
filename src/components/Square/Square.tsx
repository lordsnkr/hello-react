import "./style.css";
import React, { MouseEventHandler } from "react";

interface Props {
  onSquareClick: MouseEventHandler;
  value: string;
}

const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
