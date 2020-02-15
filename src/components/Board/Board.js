import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import {
  BoardWrapper,
  LoadingStyled,
  ErrorStyled,
  HeaderWrapper,
  NewGameStyled,
  HomeStyled
} from "./styled";

const Board = ({ matrices, onNewGame, loading, error }) => {
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
    <>
      <HeaderWrapper>
        <NewGameStyled onClick={onNewGame}>New game</NewGameStyled>
        <HomeStyled to="/">Home page</HomeStyled>
      </HeaderWrapper>
      <BoardWrapper>
        {matrices.map((row, index) => (
          <Row row={row} key={index} />
        ))}
      </BoardWrapper>
    </>
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
  onNewGame: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default Board;
