import axios from "axios";

const MiniMineSweeperService = {
  fetchMines({ size, mines }) {
    return axios.get(
      `https://tiki-minesweeper.herokuapp.com/getMines?size=${size}&mines=${mines}`
    );
  }
};

export default MiniMineSweeperService;
