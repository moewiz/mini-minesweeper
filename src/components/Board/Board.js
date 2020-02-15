import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import { BoardWrapper, LoadingStyled, ErrorStyled } from "./styled";

const Board = ({ matrices, gameLevel, loading, error }) => {
  const width = gameLevel.size * 32 + 50;

  if (loading) {
    return (
      <BoardWrapper>
        <LoadingStyled>Setting up the game</LoadingStyled>
      </BoardWrapper>
    );
  }

  if (error) {
    return (
      <BoardWrapper>
        <ErrorStyled>{error}</ErrorStyled>
      </BoardWrapper>
    );
  }

  return (
    <BoardWrapper style={{ width: `${width}px` }}>
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
  ).isRequired,
  gameLevel: PropTypes.shape({
    size: PropTypes.number,
    mines: PropTypes.number
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default Board;
