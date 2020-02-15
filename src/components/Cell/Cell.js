import React from "react";
import PropTypes from "prop-types";
import { CellWrapper } from "./styled";
import { GAME_STATUS } from "../../constants/game";

const Cell = ({ cell, openCell, gameStatus }) => {
  const isOpen =
    cell.isOpen ||
    gameStatus === GAME_STATUS.WIN ||
    gameStatus === GAME_STATUS.LOSE;

  return (
    <CellWrapper
      isOpen={isOpen}
      isMine={cell.minesAround === -1}
      onClick={() => openCell(cell)}
    >
      {isOpen && cell.minesAround > 0 && cell.minesAround}
    </CellWrapper>
  );
};

Cell.propTypes = {
  cell: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    minesAround: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired
  }),
  openCell: PropTypes.func.isRequired,
  gameStatus: PropTypes.number.isRequired
};

export default Cell;
