import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { HomeWrapper, GroupLevelStyled, LevelBtnStyled } from "./styled";

const Welcome = ({ newGame }) => {
  useEffect(() => {
    newGame();
  }, [newGame]);

  return (
    <HomeWrapper>
      <h3>Please select game level</h3>
      <GroupLevelStyled>
        <LevelBtnStyled to="/beginner">Beginner</LevelBtnStyled>
        <LevelBtnStyled to="/advantage">Advantage</LevelBtnStyled>
      </GroupLevelStyled>
    </HomeWrapper>
  );
};

Welcome.propTypes = {
  newGame: PropTypes.func.isRequired
};

export default Welcome;
