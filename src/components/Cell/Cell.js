import React from "react";
import PropTypes from "prop-types";
import { CellWrapper } from "./styled";
import { GAME_STATUS } from "../../constants/game";

const Cell = ({ cell, openCell, gameStatus }) => {
  return (
    <CellWrapper
      isOpen={
        cell.isOpen ||
        gameStatus === GAME_STATUS.WIN ||
        gameStatus === GAME_STATUS.LOSE
      }
      isMine={cell.minesAround === -1}
      onClick={() => openCell(cell)}
    >
      {cell.isOpen && cell.minesAround > 0 && cell.minesAround}
    </CellWrapper>
  );
};

Cell.propTypes = {
  cell: PropTypes.shape({
    minesAround: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  openCell: PropTypes.func.isRequired,
  gameStatus: PropTypes.number.isRequired
};

export default Cell;
