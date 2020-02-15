import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { GAME_STATUS } from "../../constants/game";
import {
  ButtonWrapper,
  NewGameStyled,
  HomeLinkStyled,
  MessageStyled
} from "./styled";

const Modal = ({ gameStatus, duration, setupGame }) => {
  return (
    <Popup
      open={gameStatus === GAME_STATUS.WIN || gameStatus === GAME_STATUS.LOSE}
    >
      <MessageStyled>
        {gameStatus === GAME_STATUS.LOSE ? "💀" : "🏆"}
      </MessageStyled>
      <MessageStyled>
        You {gameStatus === GAME_STATUS.LOSE ? "lost" : "won"} the game in{" "}
        {duration}
      </MessageStyled>
      <ButtonWrapper>
        <NewGameStyled onClick={setupGame}>New game</NewGameStyled>
        <HomeLinkStyled to="/">Home page</HomeLinkStyled>
      </ButtonWrapper>
    </Popup>
  );
};

Modal.propTypes = {
  gameStatus: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  setupGame: PropTypes.func.isRequired
};

export default Modal;
