import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Modal from "./Modal";
import { NewGameStyled } from "./styled";
import { GAME_STATUS } from "../../constants/game";

describe("<Modal />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const setupGameMock = jest.fn();

  const Component = mount(
    <Router>
      <Modal
        duration="00:00:00"
        gameStatus={GAME_STATUS.WIN}
        setupGame={setupGameMock}
      />
    </Router>
  );

  it("should render without thrown an error", () => {
    expect(Component.length).toBe(1);
  });

  it("match snapshot", () => {
    expect(Component).toMatchSnapshot();
  });

  it("should trigger setupGameMock when New button is clicked", () => {
    const NewGameBtn = Component.find(NewGameStyled).at(0);
    NewGameBtn.simulate("click");
    expect(setupGameMock).toBeCalledTimes(1);
  });

  it("should render 1 Link", () => {
    const Links = Component.find(Link);
    expect(Links.length).toBe(1);
  });
});
