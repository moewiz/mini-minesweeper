import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import { BoardWrapper } from "./styled";

const Board = ({ matrices }) => {
  return (
    <BoardWrapper>
      {matrices.map((row, index) => (
        <Row row={row} key={index} />
      ))}
    </BoardWrapper>
  );
};

Board.propTypes = {
  matrices: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        minesAround: PropTypes.number.isRequired,
        isOpen: PropTypes.bool.isRequired
      })
    )
  ).isRequired
};

export default Board;
