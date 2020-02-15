import React from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { Modal } from "../../components";
import {
  actions as MiniMineSweeperActions,
  selectors as MiniMineSweeperSelectors
} from "../../reducers/miniMineSweeper";
import { useActions, useShallowEqualSelector } from "../../utils/hookRecipes";

const ModalContainer = () => {
  const [setupBeginner, setupAdvanced] = useActions([
    MiniMineSweeperActions.setupBeginnerGame,
    MiniMineSweeperActions.setupAdvantageGame
  ]);
  const { pathname } = useLocation();
  let setupGame = () => null;
  const gameStatus = useShallowEqualSelector(
    MiniMineSweeperSelectors.getGameStatus
  );
  const startTime = useShallowEqualSelector(
    MiniMineSweeperSelectors.getStartTime
  );
  const diff = startTime ? dayjs().diff(startTime, "millisecond") : 0;
  const duration = "00:00:05";
  // const duration = dayjs(diff)
  //   .utc()
  //   .format("HH:mm:ss");

  if (pathname.includes("beginner")) setupGame = setupBeginner;
  else setupGame = setupAdvanced;

  return (
    <Modal gameStatus={gameStatus} setupGame={setupGame} duration={duration} />
  );
};

export default ModalContainer;
