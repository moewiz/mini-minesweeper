import React from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { Modal } from "../../components";
import {
  actions as MiniMineSweeperActions,
  selectors as MiniMineSweeperSelectors
} from "../../reducers/miniMineSweeper";
import { useActions, useShallowEqualSelector } from "../../utils/hookRecipes";

const addZero = n => (n < 10 ? `0${n}` : n);

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
  const seconds = startTime ? dayjs().diff(startTime, "second") : 0;
  const hh = addZero(parseInt(seconds / 3600, 10));
  const mm = addZero(parseInt((seconds / 60) % 60, 10));
  const ss = addZero(parseInt(seconds % 60, 10));
  const duration = `${hh}:${mm}:${ss}`;

  if (pathname.includes("beginner")) setupGame = setupBeginner;
  else setupGame = setupAdvanced;

  return (
    <Modal gameStatus={gameStatus} setupGame={setupGame} duration={duration} />
  );
};

export default ModalContainer;
