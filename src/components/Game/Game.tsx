import Board from "components/Board";
import { useState } from "react";

const Game = () => {
  const initBoard = Array<string>(9).fill("");
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([initBoard]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: Array<string>) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setHistory([Array<string>(9).fill("")]);
    setXIsNext(true);
  };

  const goBack = () => {
    if (history.length <= 1) {
      return;
    }

    history.pop();
    setHistory(history);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <button onClick={resetGame}>reset</button>
      <button onClick={goBack}>back!</button>
    </>
  );
};

export default Game;
