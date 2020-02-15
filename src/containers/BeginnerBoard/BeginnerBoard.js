import React from "react";
import { Board } from "../../components";

const mine = { minesAround: -1, isOpen: false, x: 0, y: 0 };
const empty = { minesAround: 1, isOpen: false, x: 0, y: 0 };

const matrices = [
  [mine, empty, empty, empty],
  [empty, empty, mine, empty],
  [empty, mine, { ...empty, isOpen: true }, empty],
  [empty, empty, empty, mine]
];

const BeginnerBoard = () => {
  return <Board matrices={matrices} />;
};

export default BeginnerBoard;
