import "./style.css";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Square: React.FC<Props> = ({ children }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
  };

  return (
    <button className="square" onClick={(e) => handleClick(e)}>
      {children}
    </button>
  );
};

export default Square;
