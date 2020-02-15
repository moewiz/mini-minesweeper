import React from "react";
import PropTypes from "prop-types";
import { Cell } from "../../containers";
import { RowWrapper } from "./styled";

const Row = ({ row }) => {
  return (
    <RowWrapper>
      {row.map((cell, index) => (
        <Cell cell={cell} key={index} />
      ))}
    </RowWrapper>
  );
};

Row.propTypes = {
  row: PropTypes.arrayOf(
    PropTypes.shape({
      minesAround: PropTypes.number,
      isOpen: PropTypes.bool.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Row;
